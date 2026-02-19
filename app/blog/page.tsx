import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
    const posts = getPosts();

    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-semibold">Blog</h1>

            <ul className="space-y-3">
                {posts.map((p: any) => (
                    <li key={p.slug} className="rounded border p-4">
                        <div className="text-sm opacity-70">{p.date}</div>
                        <Link href={`/blog/${p.slug}`} className="underline">
                            {p.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}