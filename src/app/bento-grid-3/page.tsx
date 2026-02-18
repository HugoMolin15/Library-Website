
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const BentoGrid3 = dynamic(() => import('@/components/sections/bento-grid-3/BentoGrid3').then(m => m.BentoGrid3), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-3xl" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Feature Matrix Bento"
            description="A dense feature matrix layout using a bento grid structure to highlight a large number of capabilities in a compact space."
            componentPath="src/components/sections/bento-grid-3/BentoGrid3.tsx"
        >
            <BentoGrid3 />
        </ComponentPage>
    );
}
