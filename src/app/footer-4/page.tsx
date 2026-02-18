
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const NeoMinimalFooter = dynamic(() => import('@/components/ui/neo-minimal-footer').then(m => m.NeoMinimalFooter), {
    ssr: false,
    loading: () => <div className="h-[200px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Neo-Minimalist Footer"
            description="An ultra-clean, low-height footer designed for minimalist portfolios and single-page applications."
            componentPath="src/components/ui/neo-minimal-footer.tsx"
        >
            <NeoMinimalFooter />
        </ComponentPage>
    );
}
