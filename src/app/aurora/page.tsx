
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const Aurora = dynamic(() => import('@/components/ui/Aurora'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-slate-50 animate-pulse rounded-xl" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Aurora Background"
            description="A smooth, animated aurora gradient background. Perfect for hero sections and dramatic reveals."
            componentPath="src/components/ui/Aurora.tsx"
        >
            <div className="h-[500px] w-full relative overflow-hidden rounded-xl">
                <Aurora />
            </div>
        </ComponentPage>
    );
}
