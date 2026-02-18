
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const TextOverImageBento = dynamic(() => import('@/components/sections/text-over-image-bento/TextOverImageBento'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-3xl" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Image Overlay Bento"
            description="A visual-first bento grid that overlays glassmorphic text panels onto high-resolution images for a cinematic feel."
            componentPath="src/components/sections/text-over-image-bento/TextOverImageBento.tsx"
        >
            <TextOverImageBento />
        </ComponentPage>
    );
}
