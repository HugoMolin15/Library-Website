
'use client';
import { FaqPremium } from '@/components/faqs/faq-premium/FaqPremium';
import { ComponentPage } from '@/components/layout/component-page';

export default function Page() {
    return (
        <ComponentPage
            title="Premium FAQ Accordion"
            description="A modern, animated FAQ section with a clean accordion interface and smooth transition effects."
            componentPath="src/components/faqs/faq-premium/FaqPremium.tsx"
        >
            <FaqPremium />
        </ComponentPage>
    );
}
