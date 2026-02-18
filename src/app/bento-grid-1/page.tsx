
'use client';
import { BentoGrid1 } from '@/components/sections/bento-grid-1/BentoGrid1';
import { ComponentPage } from '@/components/layout/component-page';

export default function Page() {
    return (
        <ComponentPage
            title="Premium Bento Grid"
            description="A sophisticated bento grid layout with glowing borders and glassmorphism. Ideal for showcasing core platform features."
            componentPath="src/components/sections/bento-grid-1/BentoGrid1.tsx"
        >
            <BentoGrid1 />
        </ComponentPage>
    );
}
