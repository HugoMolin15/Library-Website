
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
function Frame({ children, width, onHeightChange, currentHeight }: {
    children: React.ReactNode,
    width: string,
    onHeightChange: (h: number) => void,
    currentHeight: number
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
            html { height: auto; }
            body { 
                margin: 0; padding: 0; background: transparent; 
                overflow-x: hidden; overflow-y: auto; height: auto;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
            }
            #frame-root { width: 100%; height: auto; overflow: hidden; }
            
            /* Hide scrollbar for Chrome, Safari and Opera */
            ::-webkit-scrollbar {
                display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            body {
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
                className="transition-all duration-500 shadow-2xl rounded-[32px] border-8 border-slate-900 ring-2 ring-slate-200"
                style={{
                    width: width,
                    height: 'min(850px, 90vh)',
                    maxHeight: '850px',
                    border: '8px solid #0f172a',
                    backgroundColor: 'white'
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
                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-slate-100 p-1 rounded-xl mr-4">
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
                        <button
                            onClick={() => window.location.reload()}
                            className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                            title="Reset Preview"
                        >
                            <RotateCcw size={18} />
                        </button>
                    </div>
                )}
            </div>

            <div className={`relative ${activeTab === 'preview' ? '' : 'bg-[#1E1E2E] rounded-[32px] border border-slate-100 shadow-sm overflow-hidden p-8'}`}>
                <AnimatePresence mode="wait">
                    {activeTab === 'preview' ? (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full"
                        >
                            <div className="flex justify-center bg-transparent min-h-[600px]">
                                <Frame
                                    width={viewportWidth}
                                    currentHeight={contentHeight}
                                    onHeightChange={setContentHeight}
                                >
                                    {children}
                                </Frame>
                            </div>

                            {/* Minimal floating viewport indicator */}
                            <div className="mt-8 flex justify-between items-center px-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Width</span>
                                    <span className="text-[10px] font-mono text-purple-400 font-bold">{viewportWidth}</span>
                                </div>
                                <div className="flex items-center gap-2 opacity-50">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Live Virtual Sync</span>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="code"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {loading ? (
                                <div className="space-y-4">
                                    <div className="h-8 w-1/3 bg-white/5 animate-pulse rounded lg" />
                                    <div className="h-[400px] w-full bg-white/5 animate-pulse rounded-xl" />
                                </div>
                            ) : (
                                <CodeView code={code} language="tsx" filename={componentPath?.split('/').pop() || 'Component.tsx'} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <footer className="mt-24 py-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white uppercase italic">L</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 italic">Luma UI</span>
                </div>
                <p className="text-xs text-slate-400">© 2026 Premium Component Collections.</p>
            </footer>
        </div>
    );
}
