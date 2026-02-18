
'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
    return (
        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm my-8">
            <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
                <span className="text-xs font-mono text-slate-500 uppercase">{language}</span>
                <button
                    onClick={() => navigator.clipboard.writeText(code)}
                    className="text-xs text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                    Copy Code
                </button>
            </div>
            <SyntaxHighlighter
                language={language}
                style={shadesOfPurple}
                customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    fontSize: '0.875rem',
                    backgroundColor: '#1E1E2E',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
