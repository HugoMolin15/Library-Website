
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Feature1 = dynamic(() => import('@/components/sections/feature-1/Feature1').then(m => m.Feature1), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Modern Feature Grid"
            description="A clean, three-column feature grid with hover states and subtle icons. Perfect for service or product breakdowns."
            componentPath="src/components/sections/feature-1/Feature1.tsx"
        >
            <Feature1 />
        </ComponentPage>
    );
}
