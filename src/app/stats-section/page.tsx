
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const StatsSection = dynamic(() => import('@/components/sections/stats-section/StatsSection').then(m => m.StatsSection), {
    ssr: false,
    loading: () => <div className="h-[300px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Data & Growth Stats"
            description="A high-visibility statistics section featuring animated counters and clear, data-driven typography for proof of scale."
            componentPath="src/components/sections/stats-section/StatsSection.tsx"
        >
            <StatsSection />
        </ComponentPage>
    );
}
