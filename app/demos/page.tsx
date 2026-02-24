import Link from "next/link";

type DemoCard = {
    title: string;
    tag: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
};

const demos: DemoCard[] = [
    {
        title: "StockDash",
        tag: "Java • Spring Boot • Portfolio Analytics",
        description:
            "Interactive portfolio dashboard with account-level performance, stock drill-downs, and time-range analytics presented in a clean demo experience.",
        primaryLabel: "Open Live Demo",
        primaryHref: "https://stockdash.temadison.com",
        secondaryLabel: "View Source",
        secondaryHref: "https://github.com/temadison/stockdash",
    },
];

export default function DemosPage() {
    return (
        <section className="space-y-6 rounded-3xl bg-[rgb(225,235,255)] p-6 sm:p-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold">Demos</h1>
                <p className="text-black/75">
                    These are hands-on demo applications built with AI-assisted workflows and
                    production-minded engineering practices. Each includes a live preview and
                    source repository.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {demos.map((demo) => (
                    <article
                        key={demo.title}
                        className="space-y-4 rounded-2xl border border-black/10 bg-white p-5"
                    >
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold text-black">{demo.title}</h2>
                            <div className="text-xs uppercase tracking-[0.15em] text-black/60">
                                {demo.tag}
                            </div>
                        </div>

                        <p className="text-black/70">{demo.description}</p>

                        <div className="flex flex-wrap gap-3 text-sm">
                            <Link
                                href={demo.primaryHref}
                                className="rounded-full border border-black/15 bg-white px-4 py-2 font-semibold text-black hover:bg-black/5"
                            >
                                {demo.primaryLabel}
                            </Link>
                            <Link
                                href={demo.secondaryHref}
                                className="rounded-full border border-black/15 px-4 py-2 text-black/70 hover:text-black"
                            >
                                {demo.secondaryLabel}
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
