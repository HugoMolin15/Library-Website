
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeView } from '@/components/ui/CodeView';
import Link from 'next/link';
import { Smartphone, Tablet, Monitor, RotateCcw } from 'lucide-react';

interface ComponentPageProps {
    title: string;
    description: string;
    children: React.ReactNode;
    componentPath?: string;
}

type ViewportWidth = '430px' | '840px' | '100%';

/**
 * Enhanced Frame component with robust style syncing and height observation.
 * Optimized to prevent "Infinite Growth" loops.
 */
function Frame({ children, width, onHeightChange, currentHeight, isCode }: {
    children: React.ReactNode,
    width: string,
    onHeightChange: (h: number) => void,
    currentHeight: number,
    isCode?: boolean
}) {
    const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const mountNode = contentRef?.contentWindow?.document?.body;
    const lastHeightRef = useRef(currentHeight);

    const syncStyles = useCallback(() => {
        if (!contentRef) return;
        const doc = contentRef.contentWindow?.document;
        if (!doc) return;

        const head = doc.head;
        head.innerHTML = '';

        // Base Resets - Hiding scrollbars as requested
        const baseStyle = doc.createElement('style');
        baseStyle.innerHTML = `
            html { height: 100%; }
            body { 
                margin: 0; padding: 0; background: transparent; 
                overflow-x: hidden; overflow-y: auto; height: 100%;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            }
            #frame-root { width: 100%; min-height: 100%; }
            
            /* Hide scrollbar for all elements */
            *::-webkit-scrollbar {
                display: none;
            }
            * {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }
        `;
        head.appendChild(baseStyle);

        // Copy all style tags
        document.querySelectorAll('style').forEach(style => {
            head.appendChild(style.cloneNode(true));
        });

        // Copy all link tags (stylesheets)
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            head.appendChild(link.cloneNode(true));
        });

        setIframeLoaded(true);
    }, [contentRef]);

    useEffect(() => {
        if (!contentRef) return;
        const win = contentRef.contentWindow;
        if (!win) return;

        if (win.document.readyState === 'complete') {
            syncStyles();
        } else {
            win.addEventListener('load', syncStyles);
            return () => win.removeEventListener('load', syncStyles);
        }
    }, [contentRef, syncStyles]);

    // Height observation of the root container
    useEffect(() => {
        if (!mountNode || !iframeLoaded) return;

        let observer: ResizeObserver | null = null;
        let timeoutId: NodeJS.Timeout;

        const startObserving = () => {
            const rootDiv = mountNode.querySelector('#frame-root') as HTMLElement;
            if (!rootDiv) {
                // Retry in a bit if portal hasn't rendered yet
                timeoutId = setTimeout(startObserving, 100);
                return;
            }

            observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    const scrollH = entry.target.scrollHeight;
                    const newHeight = Math.max(minHeight, scrollH);

                    if (Math.abs(newHeight - lastHeightRef.current) > 10) {
                        lastHeightRef.current = newHeight;
                        onHeightChange(newHeight);
                    }
                }
            });

            observer.observe(rootDiv);
        };

        const minHeight = 600;
        startObserving();

        return () => {
            if (observer) observer.disconnect();
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [mountNode, iframeLoaded, onHeightChange]);

    return (
        <div
            className="w-full transition-all duration-500 ease-[cubic-bezier(0.23, 1, 0.32, 1)] flex justify-center py-12"
        >
            <iframe
                title="preview-frame"
                ref={setContentRef}
                className="transition-all duration-500 shadow-2xl rounded-[32px] border-8 border-black ring-1 ring-black/10"
                style={{
                    width: width,
                    height: 'min(850px, 90vh)',
                    maxHeight: '850px',
                    border: '8px solid black',
                    backgroundColor: isCode ? '#1e1e1e' : 'white'
                }}
            >
                {mountNode && iframeLoaded && createPortal(
                    <div id="frame-root">
                        {children}
                    </div>,
                    mountNode
                )}
            </iframe>
        </div>
    );
}

export function ComponentPage({ title, description, children, componentPath }: ComponentPageProps) {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
    const [viewportWidth, setViewportWidth] = useState<ViewportWidth>('100%');
    const [code, setCode] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [contentHeight, setContentHeight] = useState(800);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !componentPath) {
            if (!componentPath) setLoading(false);
            return;
        }

        async function fetchCode() {
            try {
                const res = await fetch(`/api/code?path=${encodeURIComponent(componentPath as string)}`);
                const data = await res.json();
                setCode(data.code || '// Error loading code');
            } catch (e) {
                setCode('// Failed to fetch code');
            } finally {
                setLoading(false);
            }
        }
        fetchCode();
    }, [componentPath, mounted]);

    if (!mounted) return <div className="min-h-screen bg-white" />;

    return (
        <div className="w-full">
            <div className="mb-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-purple-600 transition-colors mb-6 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    Back to Gallery
                </Link>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                    <span>Components</span>
                    <span>/</span>
                    <span className="text-slate-900">{title}</span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-4 uppercase italic leading-none">{title}</h1>
                <p className="text-xl text-slate-500 leading-relaxed font-light max-w-3xl italic">{description}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => setActiveTab('preview')}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'preview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Preview
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'code' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Code
                    </button>
                </div>

                {activeTab === 'preview' && (
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-slate-900 font-bold">{viewportWidth}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Width</span>
                        </div>
                        <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                            {[
                                { icon: Smartphone, width: '430px' as ViewportWidth },
                                { icon: Tablet, width: '840px' as ViewportWidth },
                                { icon: Monitor, width: '100%' as ViewportWidth },
                            ].map((v, i) => (
                                <button
                                    key={i}
                                    onClick={() => setViewportWidth(v.width)}
                                    className={`p-2 rounded-lg transition-all ${viewportWidth === v.width ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    <v.icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="relative">
                <div className="flex justify-center bg-transparent min-h-[600px]">
                    <Frame
                        width={activeTab === 'preview' ? viewportWidth : '100%'}
                        currentHeight={contentHeight}
                        onHeightChange={setContentHeight}
                        isCode={activeTab === 'code'}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full h-full"
                            >
                                {activeTab === 'preview' ? (
                                    <div className="w-full h-full">{children}</div>
                                ) : (
                                    <div className="w-full h-full p-8 md:p-12 overflow-y-auto">
                                        {loading ? (
                                            <div className="space-y-4">
                                                <div className="h-8 w-1/3 bg-white/5 animate-pulse rounded-lg" />
                                                <div className="h-[400px] w-full bg-white/5 animate-pulse rounded-xl" />
                                            </div>
                                        ) : (
                                            <CodeView
                                                code={code}
                                                language="tsx"
                                                filename={componentPath?.split('/').pop() || 'Component.tsx'}
                                            />
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </Frame>
                </div>

            </div>

        </div>
    );
}
