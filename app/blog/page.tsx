import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
    const posts = getPosts();

    return (
        <section className="space-y-6 rounded-3xl bg-[rgb(225,235,255)] p-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-black">Blog</h1>

            <ul className="space-y-3">
                {posts.map((p: any) => (
                    <li
                        key={p.slug}
                        className="rounded-2xl border border-black/10 bg-[rgb(244,238,255)] p-4 transition hover:bg-[rgb(236,228,252)]"
                    >
                        <div className="text-sm text-black/65">{p.date}</div>
                        <Link
                            href={`/blog/${p.slug}`}
                            className="font-semibold text-black underline decoration-black/30 underline-offset-4"
                        >
                            {p.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
