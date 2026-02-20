import timeline from "@/content/timeline.json";
import Link from "next/link";

type TimelineItem = {
    date: string;        // YYYY-MM-DD
    title: string;
    details?: string;
    href?: string;       // internal route like "/acl-festival-2023"
    tags?: string[];
};

export default function TimelinePage() {
    const items = (timeline as TimelineItem[]).slice().sort((a, b) => {
        // newest first
        return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });

    return (
        <section className="space-y-6 rounded-3xl bg-[rgb(225,235,255)] p-6 sm:p-8">
            <h1 className="text-2xl font-semibold text-black">Timeline</h1>

            <ol className="space-y-4">
                {items.map((item) => (
                    <li
                        key={`${item.date}-${item.title}`}
                        className="rounded-2xl border border-black/10 bg-[rgb(244,238,255)] p-4 transition hover:bg-[rgb(236,228,252)]"
                    >
                        <div className="text-sm text-black/65">{item.date}</div>

                        <div className="mt-1 flex items-start justify-between gap-4">
                            <div className="font-medium text-black">{item.title}</div>

                            {item.href ? (
                                <Link
                                    className="text-sm font-semibold text-black underline decoration-black/30 underline-offset-4"
                                    href={item.href}
                                >
                                    Read
                                </Link>
                            ) : null}
                        </div>

                        {item.details ? <p className="mt-2 text-black/70">{item.details}</p> : null}

                        {item.tags?.length ? (
                            <div className="mt-3 flex flex-wrap gap-2">
                                {item.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-black/15 px-2 py-1 text-xs text-black/70"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </li>
                ))}
            </ol>
        </section>
    );
}
