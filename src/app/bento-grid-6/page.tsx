
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const PropertyBentoGrid = dynamic(() => import('@/components/sections/property-bento-grid/PropertyBentoGrid').then(m => m.PropertyBentoGrid), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-3xl" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Real Estate Bento"
            description="A specialized bento grid designed for property and real estate listings, combining maps, stats, and gallery views."
            componentPath="src/components/sections/property-bento-grid/PropertyBentoGrid.tsx"
        >
            <PropertyBentoGrid />
        </ComponentPage>
    );
}
