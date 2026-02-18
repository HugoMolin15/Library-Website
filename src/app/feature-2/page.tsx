
'use client';
import { Feature2 } from '@/components/sections/feature-2/Feature2';
import { ComponentPage } from '@/components/layout/component-page';

export default function Page() {
    return (
        <ComponentPage
            title="Feature Selection"
            description="A beautiful feature section with icon grid and detailed text. Perfect for showcasing your product capabilities."
            componentPath="src/components/sections/feature-2/Feature2.tsx"
        >
            <Feature2 />
        </ComponentPage>
    );
}


