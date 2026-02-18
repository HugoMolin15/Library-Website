
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Footer1 = dynamic(() => import('@/components/sections/footer-1/Footer1').then(m => m.Footer1), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Modern Multicolumn Footer"
            description="A robust, semantic footer layout featuring multiple link columns, social integrations, and a clean secondary branding bar."
            componentPath="src/components/sections/footer-1/Footer1.tsx"
        >
            <Footer1 />
        </ComponentPage>
    );
}
