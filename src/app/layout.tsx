
import './globals.css';
import React from 'react';
import { ClientLayoutWrapper } from '@/components/layout/client-layout-wrapper';

export const metadata = {
    title: 'Luma UI - Premium Component Library',
    description: 'A beautiful collection of React components for modern web applications.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </head>
            <body className="antialiased">
                <ClientLayoutWrapper>
                    {children}
                </ClientLayoutWrapper>
            </body>
        </html>
    );
}
