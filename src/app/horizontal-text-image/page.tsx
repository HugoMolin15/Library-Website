
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const HorizontalTextImageCard = dynamic(() => import('@/components/cards/horizontal-text-image/HorizontalTextImageCard'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Horizontal Image Card"
            description="A modern horizontal card layout combining clear typography with a side-aligned image for dense feature previews."
            componentPath="src/components/cards/horizontal-text-image/HorizontalTextImageCard.tsx"
        >
            <HorizontalTextImageCard />
        </ComponentPage>
    );
}
