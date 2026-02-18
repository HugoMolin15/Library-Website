
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const LogoSlider = dynamic(() => import('@/components/sections/logo-slider/LogoSlider').then(m => m.LogoSlider), {
    ssr: false,
    loading: () => <div className="h-[200px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Infinite Logo Marquee"
            description="A high-performance infinite scroll marquee for displaying partner logos, brand assets, or testimonials."
            componentPath="src/components/sections/logo-slider/LogoSlider.tsx"
        >
            <LogoSlider />
        </ComponentPage>
    );
}
