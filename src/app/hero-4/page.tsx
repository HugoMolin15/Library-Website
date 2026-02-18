
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const FinancialHero = dynamic(() => import('@/components/sections/financial-hero/FinancialHero').then(m => m.FinancialHero), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Financial Service Hero"
            description="A trust-focused hero section designed for fintech and serious business applications, featuring a clean, structured layout."
            componentPath="src/components/sections/financial-hero/FinancialHero.tsx"
        >
            <FinancialHero />
        </ComponentPage>
    );
}
