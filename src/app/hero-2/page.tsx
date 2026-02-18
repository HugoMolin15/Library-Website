
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const TextButtonsImagesHero = dynamic(() => import('@/components/sections/text-buttons-images-hero/TextButtonsImagesHero'), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Professional CTA Hero"
            description="A conversion-focused hero layout combining bold typography, action buttons, and a structured mockup showcase."
            componentPath="src/components/sections/text-buttons-images-hero/TextButtonsImagesHero.tsx"
        >
            <TextButtonsImagesHero />
        </ComponentPage>
    );
}
