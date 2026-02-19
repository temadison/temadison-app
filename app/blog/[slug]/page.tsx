import { getPost } from "@/lib/posts";
import ImageGallery from "@/app/components/ImageGallery";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type GalleryImage = {
    src: string;
    alt: string;
    caption?: string;
};

export default async function BlogPost({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost(slug) as any;
    const isTerpTailgate = slug === "terp-tailgate";
    const isAclFestival = slug === "acl-festival-2023";

    const images: GalleryImage[] = Array.isArray(post.images) ? post.images : [];
    const headerImage = images[0] ?? null;
    const galleryImages = images.slice(2);

    if (isTerpTailgate) {
        return (
            <article className="max-w-none">
                <div className="rounded-lg bg-[rgb(201,46,46)] p-4 text-white">
                    <h1 className="m-0 text-2xl font-semibold text-white">{post.title}</h1>
                    {post.subtitle && <p className="mt-2 text-white/90">{post.subtitle}</p>}
                    <p className="mt-3 text-sm text-white/80">
                        {post.date}
                        {post.readTime ? ` · ${post.readTime}` : ""}
                    </p>
                </div>

                <div className="mt-6 rounded-lg bg-[rgb(186,151,151)] p-4">
                    <div className="prose prose-neutral max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                    </div>
                </div>
            </article>
        );
    }

    const contentBlocks = typeof post.content === "string" ? post.content.split("\n\n") : [];
    const topBlock = contentBlocks[0] ?? "";
    const middleBlocks = contentBlocks.slice(1, 4).join("\n\n");
    const restBlocks = contentBlocks.slice(4).join("\n\n");

    return (
        <article className="max-w-none">
            <div className="rounded-lg bg-[rgb(34,89,106)] p-4 text-white">
                <h1 className="m-0 text-2xl font-semibold text-white">{post.title}</h1>
                {post.subtitle && <p className="mt-2 text-white/90">{post.subtitle}</p>}
                <p className="mt-3 text-sm text-white/80">
                    {post.date}
                    {post.readTime ? ` · ${post.readTime}` : ""}
                </p>
            </div>

            <div className="mt-6 rounded-lg bg-[rgb(198,210,214)] p-4">
                <div className="prose prose-neutral max-w-none">
                    {isAclFestival && topBlock && (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{topBlock}</ReactMarkdown>
                    )}

                    {isAclFestival && headerImage && (
                        <figure className="not-prose my-6 overflow-hidden rounded-xl border border-black/10 bg-black/5">
                            <img
                                src={headerImage.src}
                                alt={headerImage.alt}
                                className="block h-auto w-full object-cover"
                            />
                            {(headerImage.caption || headerImage.alt) && (
                                <figcaption className="px-3 py-1 text-xs opacity-70">
                                    {headerImage.caption ?? headerImage.alt}
                                </figcaption>
                            )}
                        </figure>
                    )}

                    {isAclFestival && middleBlocks && (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{middleBlocks}</ReactMarkdown>
                    )}

                    {isAclFestival && galleryImages.length > 0 && (
                        <ImageGallery images={galleryImages} />
                    )}

                    {isAclFestival && restBlocks && (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{restBlocks}</ReactMarkdown>
                    )}

                    {!isAclFestival && (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                    )}
                </div>
            </div>
        </article>
    );
}
