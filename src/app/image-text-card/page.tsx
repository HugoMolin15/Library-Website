
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const ImageTextCard = dynamic(() => import('@/components/cards/image-text-card/ImageTextCard'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Visual Narrative Card"
            description="A high-contrast card designed for storytelling, featuring large-scale imagery and elegant typographic overlays."
            componentPath="src/components/cards/image-text-card/ImageTextCard.tsx"
        >
            <ImageTextCard />
        </ComponentPage>
    );
}
