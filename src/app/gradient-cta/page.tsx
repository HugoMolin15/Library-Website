
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const GradientCTA = dynamic(() => import('@/components/ctas/gradient-cta/GradientCTA').then(m => m.GradientCTA), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Mesh Gradient CTA"
            description="A modern, vibrant CTA section utilizing fluid mesh gradients and glassmorphism for a futuristic aesthetic."
            componentPath="src/components/ctas/gradient-cta/GradientCTA.tsx"
        >
            <GradientCTA />
        </ComponentPage>
    );
}
