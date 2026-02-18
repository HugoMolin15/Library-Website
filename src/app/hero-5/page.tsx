
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const HealthHero = dynamic(() => import('@/components/sections/health-hero/HealthHero').then(m => m.HealthHero), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Clean Health Hero"
            description="A calm and professional hero section for medical and wellness platforms, utilizing soft colors and friendly UI elements."
            componentPath="src/components/sections/health-hero/HealthHero.tsx"
        >
            <HealthHero />
        </ComponentPage>
    );
}
