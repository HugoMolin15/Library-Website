
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Footer7 = dynamic(() => import('@/components/ui/footer-7').then(m => m.Footer7), {
    ssr: false,
    loading: () => <div className="h-[300px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Minimalist Centered Footer"
            description="A high-end minimal footer with centered navigation and a focus on essential legal and social links."
            componentPath="src/components/ui/footer-7.tsx"
        >
            <Footer7 />
        </ComponentPage>
    );
}
