
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const IconTextCard = dynamic(() => import('@/components/cards/icon-text-button-card/IconTextCard'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Interactive Feature Card"
            description="A versatile card component combining illustrative icons, structured text, and an integrated action button."
            componentPath="src/components/cards/icon-text-button-card/IconTextCard.tsx"
        >
            <IconTextCard />
        </ComponentPage>
    );
}
