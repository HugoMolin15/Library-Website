
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const HorizontalCta = dynamic(() => import('@/components/ctas/horizontal-cta/HorizontalCta').then(m => m.HorizontalCta), {
    ssr: false,
    loading: () => <div className="h-[300px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Sleek Horizontal CTA"
            description="A minimal, space-efficient horizontal call-to-action bar, perfect for placement between major sections."
            componentPath="src/components/ctas/horizontal-cta/HorizontalCta.tsx"
        >
            <HorizontalCta />
        </ComponentPage>
    );
}
