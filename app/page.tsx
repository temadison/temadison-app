import Link from "next/link";
import {getPosts} from "@/lib/posts";

const family = [
    {
        name: "Ginny",
        role: "Wife",
        image: "/images/home/ginny--img_5720.jpg",
    },
    {
        name: "Bryn",
        role: "Offspring 1",
        image: "/images/home/bryn--img_2131.jpeg",
    },
    {
        name: "Elle",
        role: "Offspring 2",
        image: "/images/home/elle--img_4749.jpeg",
    },
    {
        name: "Mosey",
        role: "Dog 1",
        image: "/images/home/mosey--img_3365.jpeg",
    },
    {
        name: "Phoebe",
        role: "Dog 2",
        image: "/images/home/phoebe--img_5889.jpeg",
    },
];

export default function HomePage() {
    const posts = getPosts().slice(0, 3);

    return (
        <div className="-mx-4 bg-[rgb(225,235,255)] px-4 py-10">
            <div className="space-y-16">
                <section className="rounded-2xl bg-[rgb(225,235,255)] p-6 sm:p-10">
                    <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.2em] text-black/60">
                                Welcome
                            </p>
                            <h1 className="text-3xl font-semibold text-black sm:text-4xl">
                                Tom Madison
                            </h1>
                            <p className="text-lg text-black/75">
                                A simple home for my thoughts, adventures, stories, and
                                memories — built for family, friends, and future me.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2 text-sm">
                                <Link
                                    href="/blog"
                                    className="rounded-full border border-black/15 bg-white/80 px-4 py-2 text-black hover:bg-white"
                                >
                                    Read the blog
                                </Link>
                                <Link
                                    href="/timeline"
                                    className="rounded-full border border-black/15 px-4 py-2 text-black/70 hover:text-black"
                                >
                                    See the timeline
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/70">
                            <img
                                src="/images/home/tem--img_5865.jpeg"
                                alt="Tom Madison"
                                className="block h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                <section
                    className="grid gap-8 rounded-2xl bg-[rgb(225,235,255)] p-6 md:grid-cols-[1fr_1fr] md:items-center">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold">Me, lately</h2>
                        <p className="text-black/75">
                            I split time between work, family, and chasing small adventures
                            around Austin. This space is where I save the good stuff: notes,
                            photos, and the stories I want to remember.
                        </p>
                        <p className="text-black/70">
                            When I am not typing, I am probably on a hike, at a soccer
                            field, or taking too many photos of my kids.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-[rgb(244,232,236)] p-5">
                        <h3 className="text-sm uppercase tracking-[0.2em] text-black/60">
                            My links
                        </h3>
                        <div className="mt-4 grid gap-3 text-sm">
                            <Link className="underline" href="/portfolio">
                                Work & projects
                            </Link>
                            <Link className="underline" href="/blog">
                                Latest stories
                            </Link>
                            <Link className="underline" href="/links">
                                My links
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="space-y-6 rounded-2xl bg-[rgb(225,235,255)] p-6">
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-2xl font-semibold">My People</h2>
                        <Link className="text-sm underline" href="/portfolio">
                            Family photos
                        </Link>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {family.map((member) => (
                            <div
                                key={member.name}
                                className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="block h-64 w-full object-contain bg-white"
                                />
                                <div className="px-4 py-3">
                                    <div className="text-xs uppercase tracking-[0.15em] text-black/50">
                                        {member.role}
                                    </div>
                                    <div className="text-lg font-semibold">{member.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6 rounded-2xl bg-[rgb(225,235,255)] p-6">
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-2xl font-semibold">Latest blog posts</h2>
                        <Link className="text-sm underline" href="/blog">
                            All posts
                        </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {posts.map((post: any) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="rounded-2xl border border-black/10 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="text-xs uppercase tracking-[0.15em] text-black/50">
                                    {post.date}
                                </div>
                                <div className="mt-2 text-lg font-semibold text-black">
                                    {post.title}
                                </div>
                                {post.subtitle && (
                                    <p className="mt-2 text-sm text-black/70">
                                        {post.subtitle}
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border border-black/10 bg-[rgb(225,235,255)] p-6 sm:p-8">
                    <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold">Contact</h2>
                            <p className="text-black/75">
                                If you are family, a friend, or just want to say hello, send
                                a note my way. I read everything (eventually).
                            </p>
                        </div>
                        <div className="space-y-3">
                            <a
                                href="mailto:tom@temadison.com"
                                className="block rounded-xl border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-black"
                            >
                                tom@temadison.com
                            </a>
                            <Link
                                href="/contact"
                                className="block rounded-xl border border-black/15 px-4 py-3 text-sm text-black/70 hover:text-black"
                            >
                                Contact form
                            </Link>
                            <p className="text-xs font-semibold text-red-600">
                                Disclaimer: this form is not operational. It was only a placeholder
                                and will not send any messages.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
