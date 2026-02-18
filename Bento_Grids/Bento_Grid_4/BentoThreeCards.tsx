'use client';

import { cn } from "@/lib/utils";
import { MoveRight, Star } from "lucide-react";

interface BlogPost {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    href?: string;
    views: number;
    readTime?: number;
    rating?: number;
    className?: string; // Add className to BlogPost interface
}

interface GridSectionProps {
    posts?: BlogPost[];
    className?: string;
    onPostClick?: (post: BlogPost) => void;
}

export const BentoThreeCards = ({
    posts = [],
    className,
    onPostClick,
}: GridSectionProps) => {

    return (
        <section className={cn(
            "container relative my-20 py-10 mx-auto px-4",
            className
        )}>
            {/* Removed Title */}

            {/* Removed backgroundLabel */}

            {/* Removed Description Paragraph */}

            <div className="grid h-auto grid-cols-1 gap-5 md:h-[650px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr] w-full max-w-7xl mx-auto">
                {posts.map((post, index) => {
                    const {
                        id,
                        title: postTitle,
                        category,
                        imageUrl,
                        views,
                        readTime,
                        rating = 4,
                        className: postClassName // Destructure className
                    } = post;

                    const isPrimary = index === 0;

                    return (
                        <div
                            key={id || index}
                            style={{ backgroundImage: `url(${imageUrl})` }}
                            className={cn(
                                "group relative flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-8 text-white min-h-[300px] md:min-h-0 transition-all duration-300 hover:scale-[0.98] hover:rotate-[0.3deg] shadow-xl",
                                isPrimary ? "col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2" : "col-span-1",
                                postClassName // Apply postClassName
                            )}
                            onClick={() => onPostClick?.(post)}
                        >
                            <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:h-full" />

                            <article className="relative z-10 flex items-end justify-between w-full">
                                <div className="flex flex-1 flex-col gap-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/10">{category}</span>
                                    </div>

                                    <h3 className={cn("font-bold leading-tight", isPrimary ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl")}>
                                        {postTitle}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-4 text-white/80 mt-2">
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, idx) => (
                                                <Star
                                                    size={16}
                                                    key={idx}
                                                    className={idx < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-400/50 text-gray-400/50"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium border-l border-white/30 pl-4">
                                            {views.toLocaleString()} Views
                                        </span>
                                        {readTime && (
                                            <span className="text-sm font-medium border-l border-white/30 pl-4">
                                                {readTime} min read
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="ml-4 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                    <MoveRight
                                        className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                                        strokeWidth={2}
                                    />
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
