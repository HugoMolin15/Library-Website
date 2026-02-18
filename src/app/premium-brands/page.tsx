
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const PremiumBrands = dynamic(() => import('@/components/cards/3-cards-horizontal/PremiumBrands'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Premium Brand Showcase"
            description="A curated horizontal layout for showcasing high-tier brand partnerships with polished hover effects and sharp imagery."
            componentPath="src/components/cards/3-cards-horizontal/PremiumBrands.tsx"
        >
            <PremiumBrands />
        </ComponentPage>
    );
}
