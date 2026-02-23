import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
    const posts = getPosts();

    return (
        <section className="space-y-6 rounded-3xl bg-[rgb(225,235,255)] p-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-black">Blog</h1>

            <ol className="space-y-4">
                {posts.map((p: any) => (
                    <li
                        key={p.slug}
                        className="rounded-2xl border border-white/20 bg-[rgb(120,142,206)] p-4 text-white transition hover:bg-[rgb(108,131,198)]"
                    >
                        <Link href={`/blog/${p.slug}`} className="block">
                            <div className="text-sm text-white/80">{p.date}</div>

                            <div className="mt-1 font-medium text-white">{p.title}</div>

                            {p.subtitle ? <p className="mt-2 text-white/80">{p.subtitle}</p> : null}

                            {p.tags?.length ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tags.map((t: string) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-white/25 px-2 py-1 text-xs text-white/80"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </Link>
                    </li>
                ))}
            </ol>
        </section>
    );
}
