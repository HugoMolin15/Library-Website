
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const DotGrid = dynamic(() => import('@/components/ui/DotGrid'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Interactive Dot Matrix"
            description="A minimalist background system that generates a responsive grid of dots reactive to mouse proximity."
            componentPath="src/components/ui/DotGrid.tsx"
        >
            <DotGrid />
        </ComponentPage>
    );
}
