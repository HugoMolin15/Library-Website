
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const VerticalTestimonials = dynamic(() => import('@/components/sections/vertical-testimonials/VerticalTestimonials').then(m => m.VerticalTestimonials), {
    ssr: false,
    loading: () => <div className="h-[700px] w-full bg-slate-50 animate-pulse rounded-[40px]" />
});

export default function Page() {
    return (
        <ComponentPage
            title="Vertical Social Proof"
            description="A dense vertical testimonial masonry layout designed to showcase a high volume of user feedback and trust markers."
            componentPath="src/components/sections/vertical-testimonials/VerticalTestimonials.tsx"
        >
            <VerticalTestimonials />
        </ComponentPage>
    );
}
