'use client';

import React from 'react';
import { Phone } from 'lucide-react';

/* --- Simplified Local UI Components to match the request --- */

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`flex flex-col ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <h3 className={`text-2xl font-bold text-black ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <p className={`text-gray-500 leading-relaxed ${className}`}>{children}</p>
);

const CardFooter = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`${className}`}>{children}</div>
);

const Button = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <button className={`bg-black text-white font-medium text-center py-4 px-6 rounded-full hover:bg-black/90 transition-all duration-200 cursor-pointer ${className}`}>
        {children}
    </button>
);

/* --- The Main Component --- */

export default function IconTextCard() {
    return (
        <Card className="w-full max-w-full md:max-w-md bg-gray-50/50 gap-y-9">
            <CardHeader className="px-7 pt-8 text-center text-black">
                <span className="size-16 mx-auto flex items-center justify-center rounded-full bg-black/5">
                    <Phone className="text-xl text-black" size={24} />
                </span>
                <CardTitle className="mt-7">Fully Responsive</CardTitle>
                <CardDescription className="mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the{" "}
                </CardDescription>
            </CardHeader>
            <CardFooter className="p-7 pt-0">
                <Button className="w-full">Visit Now</Button>
            </CardFooter>
        </Card>
    );
}
