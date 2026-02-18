import {
    Layout,
    AppWindow,
    Component,
    GalleryVertical,
    LayoutGrid,
    MousePointerClick,
    MessageSquareQuote,
    MousePointer2,
    MoveHorizontal,
    Palette,
    CreditCard,
    CircleHelp,
    BarChart3,
    Menu
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ComponentMetadata {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    href: string;
    category: string;
    new: boolean;
    componentPath: string; // Path to main component or folder
}

export const components: ComponentMetadata[] = [
    {
        id: 'hero',
        name: 'Text-Text-Image Hero',
        description: 'A modern hero section with a two-column text layout and a large image/visual area.',
        icon: Layout,
        href: '/hero',
        category: 'Hero',
        new: false,
        componentPath: 'src/components/heros/text-text-image'
    },
    {
        id: 'text-buttons-images-hero',
        name: 'Text-Buttons-Images Hero',
        description: 'A modern hero section with dynamic image collage, statistics, and call-to-action buttons.',
        icon: Layout,
        href: '/text-buttons-images-hero',
        category: 'Hero',
        new: true,
        componentPath: 'src/components/sections/text-buttons-images-hero'
    },
    {
        id: 'bento-grid-1',
        name: 'Analytics Bento Grid',
        description: 'A 2x2 bento grid layout featuring rich data visualization cards for user profiles and performance metrics.',
        icon: AppWindow,
        href: '/bento-grid-1',
        category: 'Bento Grids',
        new: true,
        componentPath: 'src/components/sections/bento-grid-1'
    },
    {
        id: 'feature-1',
        name: 'Personalization Feature',
        description: 'Vibrant purple section with left-aligned typography and a floating mock browser window graphic.',
        icon: Component,
        href: '/feature-1',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/feature-1'
    },
    {
        id: 'feature-2',
        name: 'Personalization Feature (Mirrored)',
        description: 'Mirrored version of the Personalization Feature with the image on the left and text on the right.',
        icon: Component,
        href: '/feature-2',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/feature-2'
    },
    {
        id: 'hero-3',
        name: 'Revenue Analytics Hero',
        description: 'A conversion-focused hero layout with bold typography, social proof dashboard visualization, and key value propositions.',
        icon: Layout,
        href: '/hero-3',
        category: 'Hero',
        new: true,
        componentPath: 'src/components/sections/hero-3'
    },
    {
        id: 'financial-hero',
        name: 'Reliable Financial Hero',
        description: 'A professional, split-container hero section featuring bold financial messaging, dual CTA buttons, and key performance statistics.',
        icon: Layout,
        href: '/financial-hero',
        category: 'Hero',
        new: true,
        componentPath: 'src/components/sections/financial-hero'
    },
    {
        id: 'health-hero',
        name: 'Health Care Hero',
        description: 'A premium full-screen hero section with high-impact imagery, medium-weight typography, and sophisticated glassmorphism buttons.',
        icon: Layout,
        href: '/health-hero',
        category: 'Hero',
        new: true,
        componentPath: 'src/components/sections/health-hero'
    },
    {
        id: 'navbar-2',
        name: 'Floating Pill Navbar',
        description: 'Premium sticky navigation pill with glassmorphism, mega-menu features, and sophisticated mobile animations.',
        icon: Menu,
        href: '/navbar-2',
        category: 'Nav',
        new: true,
        componentPath: 'src/components/sections/navbar-2'
    },
    {
        id: 'bento-3-cards',
        name: 'Bento 3 Cards',
        description: 'A trendy blog-style grid featuring one large feature card and two smaller side cards with hover effects.',
        icon: AppWindow,
        href: '/bento-3-cards',
        category: 'Bento Grids',
        new: true,
        componentPath: 'src/components/sections/bento-3-cards'
    },
    {
        id: 'text-over-image-bento',
        name: 'Text-Over-Image Bento',
        description: 'A sophisticated grid layout with immersive background images, glassmorphism footers, and bold typography overlays.',
        icon: AppWindow,
        href: '/text-over-image-bento',
        category: 'Bento Grids',
        new: true,
        componentPath: 'src/components/sections/text-over-image-bento'
    },
    {
        id: 'premium-brands',
        name: 'Premium Brands Cards',
        description: 'Three-column horizontal cards featuring animated grainy backgrounds and hover effects.',
        icon: GalleryVertical,
        href: '/premium-brands',
        category: 'Cards',
        new: false,
        componentPath: 'src/components/cards/3-cards-horizontal'
    },
    {
        id: 'icon-text-card',
        name: 'Icon-Text-Button Card',
        description: 'A clean, responsive card with a centered icon, title, description, and a full-width call-to-action button.',
        icon: GalleryVertical,
        href: '/icon-text-card',
        category: 'Cards',
        new: true,
        componentPath: 'src/components/cards/icon-text-button-card'
    },
    {
        id: 'bento-grid-2',
        name: 'Security Bento Grid',
        description: 'A modern, multi-span grid layout features high-impact iconography and descriptive cards for dashboard or feature overviews.',
        icon: LayoutGrid,
        href: '/bento-grid-2',
        category: 'Bento Grids',
        new: true,
        componentPath: 'src/components/sections/bento-grid-2'
    },
    {
        id: 'bento-grid-3',
        name: 'Analytic Insights Bento',
        description: 'A stylish, high-contrast bento grid featuring a tall center focus card, statistical highlights, and integrated visual spaces.',
        icon: LayoutGrid,
        href: '/bento-grid-3',
        category: 'Bento Grids',
        new: true,
        componentPath: 'src/components/sections/bento-grid-3'
    },
    {
        id: 'property-bento-grid',
        name: 'Property Portfolio Bento',
        description: 'A premium, responsive bento grid featuring mixed card styles, high-contrast themes, and integrated call-to-action elements.',
        icon: AppWindow,
        href: '/property-bento-grid',
        category: 'Bento Grids',
        new: true,
        componentPath: 'src/components/sections/property-bento-grid'
    },
    {
        id: 'horizontal-text-image',
        name: 'Horizontal Text-Image Card',
        description: 'A professional card layout featuring a horizontal arrangement (text left, image right) and a vertical variant for sub-content.',
        icon: GalleryVertical,
        href: '/horizontal-text-image',
        category: 'Cards',
        new: true,
        componentPath: 'src/components/cards/horizontal-text-image'
    },
    {
        id: 'image-text-card',
        name: 'Image-Text Card',
        description: 'A visually striking card with a full-background image and an overlay content box featuring backdrop-blur.',
        icon: GalleryVertical,
        href: '/image-text-card',
        category: 'Cards',
        new: true,
        componentPath: 'src/components/cards/image-text-card'
    },
    {
        id: 'gradient-cta',
        name: 'Floating Icons Hero',
        description: 'Interactive hero section with icons that float and react to mouse movements, creating a premium software showcase.',
        icon: MousePointerClick,
        href: '/gradient-cta',
        category: 'Hero',
        new: true,
        componentPath: 'src/components/ui/floating-icons-hero-section.tsx'
    },
    {
        id: 'community-cta',
        name: 'Community Impact CTA',
        description: 'A bold, split CTA section featuring massive typography, a descriptive body, and a distinctive rounded-card layout.',
        icon: MousePointerClick,
        href: '/community-cta',
        category: 'CTA',
        new: true,
        componentPath: 'src/components/ctas/community-cta'
    },
    {
        id: 'horizontal-cta',
        name: 'Premium Horizontal Banner',
        description: 'A sleek, wide-format CTA banner with high-impact typography and dual-action buttons on a dark textured background.',
        icon: MousePointerClick,
        href: '/horizontal-cta',
        category: 'CTA',
        new: true,
        componentPath: 'src/components/ctas/horizontal-cta'
    },
    {
        id: 'faq-premium',
        name: 'Premium FAQ Accordion',
        description: 'A professional FAQ section with smooth height animations, custom cursor states, and responsive right-aligned typography for mobile.',
        icon: MessageSquareQuote,
        href: '/faq-premium',
        category: 'FAQ',
        new: true,
        componentPath: 'src/components/faqs/faq-premium'
    },
    {
        id: 'social-buttons',
        name: 'social-auth-buttons',
        description: 'Clean and responsive authentication buttons for Google, GitHub, and X (Twitter) with custom SVG icons.',
        icon: MousePointer2,
        href: '/social-buttons',
        category: 'Buttons',
        new: true,
        componentPath: 'src/components/ctas/social-buttons'
    },
    {
        id: 'glass-icons',
        name: '3D Glass Icons',
        description: 'Interactive button set with a stunning 3D glassmorphism hover effect, gradient backdrops, and perspective transforms.',
        icon: MousePointer2,
        href: '/glass-icons',
        category: 'Buttons',
        new: true,
        componentPath: 'src/components/ui/GlassIcons.tsx'
    },
    {
        id: 'left-image-text',
        name: 'Left-Image Text Section',
        description: 'A classic section layout with a prominent image on the left and descriptive text on the right. Responsive and clean.',
        icon: Component,
        href: '/left-image-text',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/left-image-text'
    },
    {
        id: 'right-image-text',
        name: 'Right-Image Text Section',
        description: 'A mirrored version of the text-image section with the image on the right and text on the left.',
        icon: Component,
        href: '/right-image-text',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/right-image-text'
    },
    {
        id: 'neural-defense',
        name: 'Neural Defense Accordion',
        description: 'Interactive accordion with dynamic image transitions and smooth animations.',
        icon: Component,
        href: '/neural-defense',
        category: 'Sections',
        new: false,
        componentPath: 'src/components/sections/accordion-images'
    },
    {
        id: 'footer-1',
        name: 'Minimalist Brand Footer',
        description: 'A clean, multi-column footer featuring a massive, clipped brand signature and smooth link interactions.',
        icon: Layout,
        href: '/footer-1',
        category: 'Footer',
        new: true,
        componentPath: 'src/components/sections/footer-1'
    },
    {
        id: 'footer-7',
        name: 'Multi-column Corporate Footer',
        description: 'A clean, multi-column footer with social icons, logo integration, and hierarchical link structures.',
        icon: Layout,
        href: '/footer-7',
        category: 'Footer',
        new: true,
        componentPath: 'src/components/ui/footer-7.tsx'
    },
    {
        id: 'footer-section',
        name: 'Clean Animated Footer',
        description: 'A modern, responsive footer with smooth entrance animations, social integration, and a premium radial gradient effect.',
        icon: Layout,
        href: '/footer-section',
        category: 'Footer',
        new: true,
        componentPath: 'src/components/ui/footer-section.tsx'
    },
    {
        id: 'neo-minimal-footer',
        name: 'Neo-Minimalist Seeker Footer',
        description: 'A cutting-edge tech footer featuring a background grid pattern, animated status indicators, and minimalist link structures.',
        icon: Layout,
        href: '/neo-minimal-footer',
        category: 'Footer',
        new: true,
        componentPath: 'src/components/ui/neo-minimal-footer.tsx'
    },
    {
        id: 'feature-selection',
        name: 'Interactive Feature Selection',
        description: 'Interactive section with a vertical list that switches images with a smooth slide-up animation effect.',
        icon: Component,
        href: '/feature-selection',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/feature-selection'
    },
    {
        id: 'alternating-carousel',
        name: 'Alternating Feature Carousel',
        description: 'A responsive carousel slider with alternating text and image cards featuring smooth horizontal scrolling.',
        icon: Component,
        href: '/alternating-carousel',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/alternating-carousel'
    },
    {
        id: 'interactive-product-grid',
        name: 'Interactive Product Grid',
        description: 'A 70vh section featuring a horizontal slider with expandable glassmorphism overlays triggered by interactive plus buttons.',
        icon: Component,
        href: '/interactive-product-grid',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/interactive-product-grid'
    },
    {
        id: 'auto-feature-selection',
        name: 'Automated Feature Carousel',
        description: 'A non-interactive, autoplaying section that cycles through features with individual progress bars and smooth image transitions.',
        icon: Component,
        href: '/auto-feature-selection',
        category: 'Sections',
        new: true,
        componentPath: 'src/components/sections/auto-feature-selection'
    },
    {
        id: 'logo-slider',
        name: 'Infinite Logo Slider',
        description: 'A smooth, horizontally scrolling logo marquee with infinite loop animation and hover-to-pause functionality.',
        icon: MoveHorizontal,
        href: '/logo-slider',
        category: 'Comp. Sliders',
        new: true,
        componentPath: 'src/components/sections/logo-slider'
    },
    {
        id: 'grainient',
        name: 'Grainient Background',
        description: 'GPU-accelerated animated gradient background with procedural noise, grain, and high-performance warp effects.',
        icon: Palette,
        href: '/grainient',
        category: 'Backgrounds',
        new: true,
        componentPath: 'src/components/backgrounds/grainient'
    },
    {
        id: 'silk',
        name: 'Silk Wave Background',
        description: 'A smooth, fluid shader background with customizable warp, noise intensity, and interactive wave patterns.',
        icon: Palette,
        href: '/silk',
        category: 'Backgrounds',
        new: true,
        componentPath: 'src/components/ui/Silk.tsx'
    },
    {
        id: 'dot-grid',
        name: 'Interactive Dot Grid',
        description: 'A high-performance HTML5 Canvas grid that reacts to mouse proximity, speed-driven repulsion, and click-triggered shockwaves.',
        icon: Palette,
        href: '/dot-grid',
        category: 'Backgrounds',
        new: true,
        componentPath: 'src/components/ui/DotGrid.tsx'
    },
    {
        id: 'aurora',
        name: 'Animated Aurora Background',
        description: 'A vibrant, GPU-accelerated northern lights effect with customizable color stops, amplitude, and fluid movement.',
        icon: Palette,
        href: '/aurora',
        category: 'Backgrounds',
        new: true,
        componentPath: 'src/components/ui/Aurora.tsx'
    },
    {
        id: 'vertical-testimonials',
        name: 'Vertical Scrolling Testimonials',
        description: 'Infinite vertical scrolling columns of testimonial cards, powered by Framer Motion.',
        icon: MessageSquareQuote,
        href: '/vertical-testimonials',
        category: 'Reviews',
        new: true,
        componentPath: 'src/components/sections/vertical-testimonials'
    },
    {
        id: 'pricing',
        name: 'Modern Pricing Tab',
        description: 'Clean pricing table with a monthly/yearly toggle and animated "Aurora" text.',
        icon: CreditCard,
        href: '/pricing',
        category: 'Pricing',
        new: false,
        componentPath: 'src/components/pricing/pricing-tab-1'
    },
    {
        id: 'accordion-faq-1',
        name: 'accordion-faq-1',
        description: 'A smooth, modern accordion with spring animations and hover effects, perfect for FAQs or features.',
        icon: CircleHelp,
        href: '/accordion-faq-1',
        category: 'FAQ',
        new: true,
        componentPath: 'src/components/sections/accordion-faq-1'
    },
    {
        id: 'stats-section',
        name: 'Minimalist Stats Section',
        description: 'A clean, high-impact statistics display with bold typography and minimalist star icons.',
        icon: BarChart3,
        href: '/stats-section',
        category: 'Stats',
        new: true,
        componentPath: 'src/components/sections/stats-section'
    }
];
