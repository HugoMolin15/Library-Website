
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const AutoFeatureSelection = dynamic(() => import('@/components/sections/auto-feature-selection/AutoFeatureSelection').then(m => m.AutoFeatureSelection), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Auto-Cycling Feature Selector"
            description="A premium interactive section that automatically cycles through features with smooth transitions and progress indicators."
            componentPath="src/components/sections/auto-feature-selection/AutoFeatureSelection.tsx"
        >
            <AutoFeatureSelection />
        </ComponentPage>
    );
}
