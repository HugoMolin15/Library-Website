'use client';
import { useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

const hexToRgb = (hex: string) => {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 0, g: 0, b: 0 };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
};

interface DotGridProps {
    dotSize?: number;
    gap?: number;
    baseColor?: string;
    activeColor?: string;
    proximity?: number;
    speedTrigger?: number;
    shockRadius?: number;
    shockStrength?: number;
    maxSpeed?: number;
    resistance?: number;
    returnDuration?: number;
    className?: string;
    style?: React.CSSProperties;
}

const DotGrid = ({
    dotSize = 16,
    gap = 32,
    baseColor = '#5227FF',
    activeColor = '#5227FF',
    proximity = 150,
    speedTrigger = 0, // Lowered to 0 to feel the force immediately
    shockRadius = 250,
    shockStrength = 5,
    maxSpeed = 5000,
    resistance = 750,
    returnDuration = 0.8,
    className = '',
    style
}: DotGridProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<any[]>([]);
    const pointerRef = useRef({
        x: -1000, // Move off-screen initially
        y: -1000,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });

    const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
    const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

    const circlePath = useMemo(() => {
        if (typeof window === 'undefined' || !window.Path2D) return null;
        const p = new Path2D();
        p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
        return p;
    }, [dotSize]);

    const buildGrid = useCallback(() => {
        const wrap = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const { width, height } = wrap.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        const cols = Math.floor((width + gap) / (dotSize + gap));
        const rows = Math.floor((height + gap) / (dotSize + gap));
        const cell = dotSize + gap;

        const gridW = cell * cols - gap;
        const gridH = cell * rows - gap;

        const extraX = width - gridW;
        const extraY = height - gridH;

        const startX = extraX / 2 + dotSize / 2;
        const startY = extraY / 2 + dotSize / 2;

        const dots = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cx = startX + x * cell;
                const cy = startY + y * cell;
                dots.push({
                    cx, cy,
                    xOffset: 0, yOffset: 0,
                    targetX: 0, targetY: 0
                });
            }
        }
        dotsRef.current = dots;
    }, [dotSize, gap]);

    useEffect(() => {
        if (!circlePath) return;

        let rafId: number;
        const draw = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x: px, y: py } = pointerRef.current;
            const proxSq = proximity * proximity;

            for (const dot of dotsRef.current) {
                const dx = dot.cx - px;
                const dy = dot.cy - py;
                const dsq = dx * dx + dy * dy;

                let dotStyle = baseColor;

                if (dsq <= proxSq) {
                    const dist = Math.sqrt(dsq);
                    const t = 1 - dist / proximity;

                    // Broad, high-impact Force-based displacement (Attraction feel)
                    // Scale force relative to proximity to make it much more 'felt'
                    const force = t * (proximity * 0.4);
                    dot.targetX = -(dx / dist) * force;
                    dot.targetY = -(dy / dist) * force;

                    const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                    const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                    const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                    dotStyle = `rgb(${r},${g},${b})`;
                } else {
                    dot.targetX = 0;
                    dot.targetY = 0;
                }

                // Smoothly interpolate to target offsets for a fluid "force" feel
                dot.xOffset += (dot.targetX - dot.xOffset) * 0.15;
                dot.yOffset += (dot.targetY - dot.yOffset) * 0.15;

                const ox = dot.cx + dot.xOffset;
                const oy = dot.cy + dot.yOffset;

                ctx.save();
                ctx.translate(ox, oy);
                ctx.fillStyle = dotStyle;
                ctx.fill(circlePath);
                ctx.restore();
            }

            rafId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(rafId);
    }, [proximity, baseColor, activeRgb, baseRgb, circlePath, dotSize]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        buildGrid();
        let ro: ResizeObserver | null = null;
        if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
            ro = new (window as any).ResizeObserver(buildGrid);
            wrapperRef.current && ro?.observe(wrapperRef.current);
        } else if (typeof window !== 'undefined') {
            (window as any).addEventListener('resize', buildGrid);
        }
        return () => {
            if (ro) ro.disconnect();
            else if (typeof window !== 'undefined') (window as any).removeEventListener('resize', buildGrid);
        };
    }, [buildGrid]);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            const pr = pointerRef.current;
            pr.x = e.clientX - rect.left;
            pr.y = e.clientY - rect.top;
        };

        const onClick = (e: MouseEvent) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;

            // For clicks, we can still use a GSAP shockwave kick
            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                if (dist < shockRadius) {
                    const falloff = Math.max(0, 1 - dist / shockRadius);
                    const pushX = (dot.cx - cx) * 0.5 * falloff;
                    const pushY = (dot.cy - cy) * 0.5 * falloff;

                    gsap.to(dot, {
                        xOffset: pushX,
                        yOffset: pushY,
                        duration: 0.2,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'power3.out'
                            });
                        }
                    });
                }
            }
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('click', onClick);
        };
    }, [shockRadius, returnDuration]);

    return (
        <section className={`flex items-center justify-center h-full w-full relative ${className}`} style={style}>
            <div ref={wrapperRef} className="w-full h-full relative">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
            </div>
        </section>
    );
};

export default DotGrid;
