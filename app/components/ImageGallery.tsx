"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryImage = {
    src: string; // root-relative like "/images/..."
    alt: string;
    caption?: string;
};

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const isOpen = openIndex !== null;
    const current = useMemo(
        () => (openIndex === null ? null : images[openIndex]),
        [openIndex, images]
    );

    function close() {
        setOpenIndex(null);
    }

    function prev() {
        setOpenIndex((i) => {
            if (i === null) return i;
            return (i - 1 + images.length) % images.length;
        });
    }

    function next() {
        setOpenIndex((i) => {
            if (i === null) return i;
            return (i + 1) % images.length;
        });
    }

    useEffect(() => {
        if (!isOpen) return;

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        }

        // prevent background scroll while open
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen, images.length]);

    return (
        <div className="my-3">
            <div className="grid grid-cols-2 gap-x-0.5 gap-y-0 sm:grid-cols-3 md:grid-cols-4">
                {images.map((img, idx) => (
                    <figure
                        key={img.src}
                        className="relative m-0 overflow-hidden rounded-lg border border-black/15 bg-white leading-none"
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(idx)}
                            aria-label={`Open image: ${img.alt}`}
                            className="block w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 leading-none text-[0px]"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="block h-auto w-full align-top"
                            />
                        </button>

                        {(img.caption || img.alt) && (
                            <figcaption className="absolute inset-x-0 bottom-0 m-0 bg-white/85 px-1 py-0 text-sm leading-none text-black/80">
                                {img.caption ?? img.alt}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>

            {isOpen && current && (
                <div
                    role="dialog"
                    aria-modal="true"
                    onClick={close}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex w-full max-w-5xl flex-col gap-3"
                    >
                        <div
                            className="flex items-center justify-between gap-3"
                        >
                            <div className="text-sm text-white/90">
                                {current.caption ?? current.alt}
                            </div>

                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={close}
                                    className="cursor-pointer rounded-lg border-0 bg-white/15 px-2.5 py-1.5 text-xs text-white"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Previous image"
                                className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-lg border-0 bg-white/15 px-3 py-2 text-lg text-white"
                            >
                                ←
                            </button>

                            <img
                                src={current.src}
                                alt={current.alt}
                                className="block max-h-[80vh] max-w-full rounded-lg border border-white/10 bg-black"
                            />

                            <button
                                type="button"
                                onClick={next}
                                aria-label="Next image"
                                className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-lg border-0 bg-white/15 px-3 py-2 text-lg text-white"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
