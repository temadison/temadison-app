"use client";

import { useEffect, useState } from "react";

type PortfolioImage = {
    src: string;
    alt: string;
    caption: string;
    thumbnailClassName?: string;
};

export default function PortfolioPage() {
    const [activeImage, setActiveImage] = useState<PortfolioImage | null>(null);

    useEffect(() => {
        if (!activeImage) {
            return;
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeImage]);

    const images = [
        {
            src: "/images/portfolio/home--img_0819.jpeg",
            alt: "Home exterior",
            caption: "Our house (is a very, very, very fine house)",
        },
        {
            src: "/images/portfolio/tom-and-testudo--img_2769.jpeg",
            alt: "Tom and Testudo",
            caption: "Me and Testudo",
            thumbnailClassName: "object-[50%_10%]",
        },
        {
            src: "/images/portfolio/parents-in-hot-springs--img_1771.jpeg",
            alt: "Friends in hot springs",
            caption: "Chillaxin' in the hot springs in Pagosa Springs, CO",
        },
        {
            src: "/images/portfolio/kids-halloween--img_5377.jpeg",
            alt: "Kids in Halloween costumes",
            caption: "Kids in Halloween costumes",
        },
        {
            src: "/images/portfolio/kid-skiers--img_5307.jpeg",
            alt: "Kids skiing",
            caption: "Kids skiing (and snowboarding) at Wolf Creek Ski Resort",
        },
        {
            src: "/images/portfolio/ginny-cl-flags--img_6606.jpeg",
            alt: "Flags on Capitol Lawn",
            caption: "Flags on Capitol Lawn at Zilker Park",
        },
        {
            src: "/images/portfolio/medevac-helicopter.jpeg",
            alt: "Medevac helicopter",
            caption: "Medevac helicopter (like the one I got a ride in)",
        },
    ] satisfies PortfolioImage[];

    return (
        <section className="space-y-6 rounded-3xl bg-[rgb(225,235,255)] p-6 sm:p-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold">Portfolio</h1>
                <p className="text-black/75">
                    A quick visual collection while the full portfolio refresh is in progress.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image) => (
                    <figure
                        key={image.src}
                        className="rounded-2xl border border-black/10 bg-white"
                    >
                        <button
                            type="button"
                            onClick={() => setActiveImage(image)}
                            className="block w-full text-left"
                            aria-label={`Open image: ${image.caption}`}
                        >
                            <div className="overflow-hidden rounded-t-2xl">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={`h-56 w-full object-cover ${image.thumbnailClassName ?? ""}`}
                                    loading="lazy"
                                />
                            </div>
                        </button>
                        <figcaption className="px-4 py-2 text-xs text-black/60">
                            {image.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>

            {activeImage ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeImage.caption}
                    onClick={() => setActiveImage(null)}
                >
                    <div
                        className="relative max-h-[90vh] max-w-[90vw]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveImage(null)}
                            className="absolute -right-3 -top-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-black shadow"
                            aria-label="Close"
                        >
                            Close
                        </button>
                        <img
                            src={activeImage.src}
                            alt={activeImage.alt}
                            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
                        />
                        <div className="mt-3 text-center text-sm text-white/80">
                            {activeImage.caption}
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
