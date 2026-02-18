
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const InteractiveProductGrid = dynamic(() => import('@/components/sections/interactive-product-grid/InteractiveProductGrid').then(m => m.InteractiveProductGrid), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Interactive Product Showcase"
            description="A dynamic grid designed to showcase multiple product views or features with engaging hover interactions."
            componentPath="src/components/sections/interactive-product-grid/InteractiveProductGrid.tsx"
        >
            <InteractiveProductGrid />
        </ComponentPage>
    );
}
