export default function ContactPage() {
    const linkedinUrl = "https://www.linkedin.com/in/your-handle";

    return (
        <section className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-2xl font-semibold">Contact</h1>
                <p className="text-black/70">
                    The fastest way to reach me is by email or LinkedIn.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div
                    aria-disabled="true"
                    className="rounded-2xl border border-black/10 bg-white p-5 opacity-60"
                >
                    <div className="text-xs uppercase tracking-[0.2em] text-black/60">
                        Email
                    </div>
                    <div className="mt-2 text-lg font-semibold text-black">
                        tom@temadison.com
                    </div>
                    <p className="mt-2 text-sm text-black/70">
                        Send a message and I will get back to you.
                    </p>
                    <p className="mt-3 text-xs font-semibold text-red-600">
                        Disclaimer: this button is disabled and does not send email yet.
                    </p>
                </div>

                <div
                    aria-disabled="true"
                    className="rounded-2xl border border-black/10 bg-[rgb(225,235,255)] p-5 opacity-60"
                >
                    <div className="text-xs uppercase tracking-[0.2em] text-black/60">
                        LinkedIn
                    </div>
                    <div className="mt-2 text-lg font-semibold text-black">
                        Connect on LinkedIn
                    </div>
                    <p className="mt-2 text-sm text-black/70">
                        Send a connection request or a direct message.
                    </p>
                    <p className="mt-3 text-xs font-semibold text-red-600">
                        Disclaimer: this button is disabled and does not open LinkedIn yet.
                    </p>
                </div>
            </div>
        </section>
    );
}
