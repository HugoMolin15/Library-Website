
'use client';
import PricingTable from '@/components/pricing/pricing-tab-1/PricingTable';
import { ComponentPage } from '@/components/layout/component-page';

export default function Page() {
    return (
        <ComponentPage
            title="Premium Pricing Table"
            description="A high-conversion pricing table with tiered plans, feature lists, and highlighted CTA. Fully responsive for all devices."
            componentPath="src/components/pricing/pricing-tab-1/PricingTable.tsx"
        >
            <PricingTable />
        </ComponentPage>
    );
}
