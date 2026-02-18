
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Hero3 = dynamic(() => import('@/components/sections/hero-3/Hero3').then(m => m.Hero3), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Sleek Modern Hero"
            description="A high-end, minimal hero section with a focus on premium aesthetics and smooth entrance animations."
            componentPath="src/components/sections/hero-3/Hero3.tsx"
        >
            <Hero3 />
        </ComponentPage>
    );
}
