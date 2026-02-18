'use client';
import { Navbar2 } from '@/components/sections/navbar-2/Navbar2';
import { BackButton } from '@/components/ui/BackButton';

export default function Page() {
    return (
        <main className="min-h-screen bg-white">
            <BackButton />
            <div className="pt-20">
                <Navbar2 />
            </div>
        </main>
    );
}

