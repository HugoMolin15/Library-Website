
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const InteractiveAccordion = dynamic(() => import('@/components/sections/accordion-faq-1/InteractiveAccordion').then(m => m.InteractiveAccordion), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Premium Interactive FAQ"
            description="A smooth, animated accordion-style FAQ section with support for icons and clear categorization."
            componentPath="src/components/sections/accordion-faq-1/InteractiveAccordion.tsx"
        >
            <InteractiveAccordion />
        </ComponentPage>
    );
}
