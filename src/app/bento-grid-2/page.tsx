
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const BentoGrid2 = dynamic(() => import('@/components/sections/bento-grid-2/BentoGrid2').then(m => m.BentoGrid2), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-3xl" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Security Bento Grid"
            description="A clean, structured bento grid focused on security features. Uses a minimalist design with sharp borders and consistent icons."
            componentPath="src/components/sections/bento-grid-2/BentoGrid2.tsx"
        >
            <BentoGrid2 />
        </ComponentPage>
    );
}
