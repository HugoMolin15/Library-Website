'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackButton() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => router.push('/')}
            className="fixed top-4 left-4 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-gray-100 transition-all duration-200 group"
            aria-label="Go back"
        >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
        </button>
    );
}
