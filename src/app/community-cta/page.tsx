
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const CommunityCta = dynamic(() => import('@/components/ctas/community-cta/CommunityCta').then(m => m.CommunityCta), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Community Engagement CTA"
            description="A high-impact call-to-action designed to build community, featuring social proof and vibrant background effects."
            componentPath="src/components/ctas/community-cta/CommunityCta.tsx"
        >
            <CommunityCta />
        </ComponentPage>
    );
}
