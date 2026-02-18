
'use client';
import dynamic from 'next/dynamic';
import { ComponentPage } from '@/components/layout/component-page';

const BentoThreeCards = dynamic(() => import('@/components/sections/bento-3-cards/BentoThreeCards').then(m => m.BentoThreeCards), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-3xl" />
});

const demoPosts = [
    {
        id: 1,
        title: "The Future of Minimalist Design",
        category: "Design",
        imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
        views: 12400,
        readTime: 5,
        rating: 5
    },
    {
        id: 2,
        title: "Architecture in the Digital Age",
        category: "Tech",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        views: 8900,
        readTime: 4,
        rating: 4
    },
    {
        id: 3,
        title: "Spatial Computing Explored",
        category: "Future",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        views: 15600,
        readTime: 6,
        rating: 5
    }
];

export default function Page() {
    return (
        <ComponentPage
            title="Three-Tile Bento"
            description="A bold, high-contrast three-tile bento layout. Perfect for hero features that require massive visual impact."
            componentPath="src/components/sections/bento-3-cards/BentoThreeCards.tsx"
        >
            <BentoThreeCards posts={demoPosts} />
        </ComponentPage>
    );
}
