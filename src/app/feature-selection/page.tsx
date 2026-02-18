
'use client';
import { FeatureSelection } from '@/components/sections/feature-selection/FeatureSelection';
import { ComponentPage } from '@/components/layout/component-page';

export default function Page() {
    return (
        <ComponentPage
            title="Advanced Feature Selection"
            description="A premium feature selection grid with glowing borders and interactive hover states. Designed for high-end SaaS landing pages."
            componentPath="src/components/sections/feature-selection/FeatureSelection.tsx"
        >
            <FeatureSelection />
        </ComponentPage>
    );
}


