'use client';
import React from 'react';

export function GradientCTA() {
    return (
        <section className="w-full py-24 bg-white flex items-center justify-center">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Gradient CTA</h2>
                <p className="text-gray-500">Placeholder component for Gradient CTA.</p>
                <div className="w-full h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg" />
            </div>
        </section>
    );
}
