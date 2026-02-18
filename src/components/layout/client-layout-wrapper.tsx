
'use client';

import React, { useEffect, useState } from 'react';

/**
 * ClientLayoutWrapper handles the global layout.
 * It detects "raw" mode to hide common UI (headers, etc) when 
 * a component is being rendered inside the preview iframe.
 */
export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [isRaw, setIsRaw] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Direct window check for raw mode parameter
        if (typeof window !== 'undefined') {
            setIsRaw(window.location.search.includes('raw=true'));
        }
    }, []);

    // Basic mount check to avoid hydration mismatch
    if (!mounted) {
        return <div className="min-h-screen bg-white" />;
    }

    // If raw mode, just render the content (used inside the documentation iframe)
    if (isRaw) {
        return <main className="w-full min-h-screen bg-white">{children}</main>;
    }

    return (
        <div className="bg-white min-h-screen">
            <div className="flex flex-col min-w-0">
                <header className="h-16 border-b border-slate-100 bg-white sticky top-0 z-50 flex items-center justify-between px-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                            <span className="text-[10px] font-bold text-white uppercase italic">L</span>
                        </div>
                        <span className="text-sm font-black text-slate-900 uppercase italic tracking-tighter">Luma UI Gallery</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
                            <a href="/" className="hover:text-purple-600 transition-colors">Library</a>
                            <a href="#" className="hover:text-purple-600 transition-colors">Templates</a>
                            <a href="#" className="hover:text-purple-600 transition-colors">Showcase</a>
                        </nav>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto bg-white">
                    <div className="max-w-[1600px] mx-auto w-full p-4 lg:p-12 mb-20 font-sans">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
