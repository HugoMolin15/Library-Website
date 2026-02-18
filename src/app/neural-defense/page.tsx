
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const NeuralDefense = dynamic(() => import('@/components/sections/accordion-images/NeuralDefense'), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Neural Defense Interactive"
            description="A high-tech interactive section with a unique accordion-based image showcase. Perfect for security and AI-focused products."
            componentPath="src/components/sections/accordion-images/NeuralDefense.tsx"
        >
            <NeuralDefense />
        </ComponentPage>
    );
}
