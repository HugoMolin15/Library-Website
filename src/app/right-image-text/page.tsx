
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const RightImageText = dynamic(() => import('@/components/sections/right-image-text/RightImageText'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Image Right Feature"
            description="A balanced split layout with descriptive content on the left and a high-impact image on the right. Perfect for secondary sections."
            componentPath="src/components/sections/right-image-text/RightImageText.tsx"
        >
            <RightImageText />
        </ComponentPage>
    );
}
