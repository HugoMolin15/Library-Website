
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const GlassIcons = dynamic(() => import('@/components/ui/GlassIcons'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Glassmorphic Interactive Icons"
            description="A collection of interactive icons with advanced glassmorphism effects, featuring smooth reactive hover states."
            componentPath="src/components/ui/GlassIcons.tsx"
        >
            <GlassIcons />
        </ComponentPage>
    );
}
