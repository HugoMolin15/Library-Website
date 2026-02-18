
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const SocialButtons = dynamic(() => import('@/components/ctas/social-buttons/SocialButtons'), {
    ssr: false,
    loading: () => <div className="h-[300px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Premium Social Buttons"
            description="A collection of high-interaction social link buttons with custom hover states and brand-accurate colors."
            componentPath="src/components/ctas/social-buttons/SocialButtons.tsx"
        >
            <SocialButtons />
        </ComponentPage>
    );
}
