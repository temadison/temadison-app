import projects from "@/content/projects.json";

type Project = {
    name: string;
    summary: string;
    tech?: string[];
    href?: string;
};

export default function PortfolioPage() {
    const items = projects as Project[];

    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-semibold">Portfolio</h1>

            <div className="grid gap-4 md:grid-cols-2">
                {items.map((p) => (
                    <div key={p.name} className="rounded border p-4">
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="font-medium">{p.name}</h2>
                            {p.href ? (
                                <a className="text-sm underline underline-offset-4" href={p.href}>
                                    Link
                                </a>
                            ) : null}
                        </div>

                        <p className="mt-2 opacity-80">{p.summary}</p>

                        {p.tech?.length ? (
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border px-2 py-1 text-xs opacity-80"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
}