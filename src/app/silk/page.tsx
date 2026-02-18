
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Silk = dynamic(() => import('@/components/ui/Silk'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Silk Interactive Surface"
            description="A specialized shader-based interactive surface that responds to user input with fluid, silk-like animations."
            componentPath="src/components/ui/Silk.tsx"
        >
            <Silk />
        </ComponentPage>
    );
}
