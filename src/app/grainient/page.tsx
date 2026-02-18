
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Grainient = dynamic(() => import('@/components/backgrounds/grainient/Grainient'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Interactive Grained Gradient"
            description="A sophisticated background component that mixes noise textures with moving gradients for a tactile, modern feel."
            componentPath="src/components/backgrounds/grainient/Grainient.tsx"
        >
            <Grainient />
        </ComponentPage>
    );
}
