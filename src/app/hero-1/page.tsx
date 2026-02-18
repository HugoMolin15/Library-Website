
'use client';
import Hero from '@/components/heros/text-text-image/Hero';
import { ComponentPage } from '@/components/layout/component-page';

export default function Page() {
    return (
        <ComponentPage
            title="SaaS Hero Section"
            description="A bold, conversion-focused hero section with high-impact typography and a professional product showcase area."
            componentPath="src/components/heros/text-text-image/Hero.tsx"
        >
            <Hero />
        </ComponentPage>
    );
}
