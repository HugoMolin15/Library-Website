
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

// The component has a default export, so we don't need .then(m => m.LeftImageText)
const LeftImageText = dynamic(() => import('@/components/sections/left-image-text/LeftImageText'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Image Left Feature"
            description="A classic split layout with a high-impact image on the left and descriptive content on the right. Fully responsive."
            componentPath="src/components/sections/left-image-text/LeftImageText.tsx"
        >
            <LeftImageText />
        </ComponentPage>
    );
}
