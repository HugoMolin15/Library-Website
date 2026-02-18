'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeViewProps {
    code: string;
    language: string;
    filename: string;
}

export const CodeView = ({ code, language, filename }: CodeViewProps) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-[#1e1e1e] mb-8 relative">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5 rounded-t-xl">
                <span className="text-xs font-mono text-gray-400">{filename}</span>
                <div className="relative">
                    <AnimatePresence>
                        {copied && (
                            <motion.div
                                initial={{ opacity: 0, y: 0, scale: 0.9 }}
                                animate={{ opacity: 1, y: -35, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                className="absolute left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg whitespace-nowrap z-[100]"
                            >
                                COPIED!
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCopy}
                        className={`flex items-center gap-1.5 text-[10px] font-bold transition-all uppercase tracking-wider px-3 py-1.5 rounded cursor-pointer ${copied
                            ? 'bg-green-500/10 text-green-400'
                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {copied ? (
                            <>
                                <Check size={12} /> Copied
                            </>
                        ) : (
                            <>
                                <Copy size={12} /> Copy
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
            <div className="max-h-[600px] overflow-auto scrollbar-hide rounded-b-xl">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        background: 'transparent',
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};
