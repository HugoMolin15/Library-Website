
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Footer = dynamic(() => import('@/components/ui/footer-section').then(m => m.Footer), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Premium Sectional Footer"
            description="A comprehensive footer system with support for newsletter signups, multi-region navigation, and theme toggling."
            componentPath="src/components/ui/footer-section.tsx"
        >
            <Footer />
        </ComponentPage>
    );
}
