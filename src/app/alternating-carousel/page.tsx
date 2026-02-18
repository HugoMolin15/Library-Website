
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const AlternatingCarousel = dynamic(() => import('@/components/sections/alternating-carousel/AlternatingCarousel').then(m => m.AlternatingCarousel), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Alternating Feature Carousel"
            description="A premium carousel section that alternates content and visuals for a balanced, engaging browsing experience."
            componentPath="src/components/sections/alternating-carousel/AlternatingCarousel.tsx"
        >
            <AlternatingCarousel />
        </ComponentPage>
    );
}
