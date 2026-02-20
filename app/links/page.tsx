const groups = [
    {
        title: "Google",
        icon: "/images/links/google_logo.png",
        hue: 210,
        iconClass: "object-contain",
        links: [
            { label: "GMail", href: "https://mail.google.com/mail" },
            { label: "Calendar", href: "https://calendar.google.com/calendar" },
            {
                label: "Maps",
                href: "https://www.google.com/maps/@30.3397596,-98.0137949,30509m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
            },
            { label: "Photos", href: "https://photos.google.com" },
            { label: "Drive", href: "https://drive.google.com/drive/home" },
        ],
    },
    {
        title: "Financial",
        icon: "/images/links/100_dollar_bill.png",
        hue: 140,
        iconClass: "object-cover",
        links: [
            { label: "American Funds", href: "https://capitalgroup.retirementpartner.com/participant/#/login?accu=AmFunds" },
            { label: "BofA", href: "https://www.bankofamerica.com" },
            { label: "Coinbase", href: "https://login.coinbase.com/signin" },
            { label: "CapitalOne", href: "https://verified.capitalone.com/auth/signin" },
            { label: "Chase", href: "https://www.chase.com" },
            { label: "Citi", href: "https://www.citi.com" },
            { label: "Credit Karma", href: "https://www.creditkarma.com" },
            { label: "Crossroads US", href: "https://crossroadsus.epayub.com/Account/Login" },
            { label: "E*Trade", href: "https://us.etrade.com" },
            { label: "Fidelity", href: "https://digital.fidelity.com/prgw/digital/login/full-page" },
            { label: "First Service Residential", href: "https://www.clickpay.com/custom/fsr/login.html" },
            { label: "Loring Ward", href: "https://loringward.envestnet.com/secure/login/login.jsp" },
            { label: "Mr. Cooper", href: "https://auth.rocketaccount.com/u/login" },
            { label: "Schwab", href: "https://client.schwab.com/Areas/Access/Login" },
            { label: "PayPal", href: "https://www.paypal.com/signin" },
            { label: "Principal", href: "https://accounts.principal.com" },
            { label: "Putnam", href: "https://www.putnam.com/individual/accounts#/protected/individual/accounts" },
            { label: "Spectrum", href: "https://id.spectrum.net/login?account_type=RESIDENTIAL&client_id=consumer_portal" },
            { label: "Vanguard", href: "https://login.vanguard.com/login" },
        ],
    },
    {
        title: "Games",
        icon: "/images/links/board_games.jpeg",
        hue: 22,
        iconClass: "object-contain",
        links: [
            { label: "Wordle", href: "https://www.nytimes.com/games/wordle/index.html" },
            { label: "Quordle", href: "https://www.merriam-webster.com/games/quordle/#/" },
            { label: "Octordle", href: "https://www.britannica.com/games/octordle/daily" },
            { label: "NYT Connections", href: "https://www.nytimes.com/games/connections" },
            { label: "WP Minicross", href: "https://www.washingtonpost.com/games/mini-meta/" },
            { label: "NYT Minicross", href: "https://www.nytimes.com/crosswords/game/mini" },
            { label: "Duotrigordle", href: "https://duotrigordle.com/game/daily/normal" },
            { label: "Word Finder", href: "https://www.litscape.com/word_tools/words_made_from.php" },
            { label: "Word Finder", href: "https://wordfinder.yourdictionary.com/unscramble/" },
        ],
    },
];

export default function LinksPage() {
    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold">My Links</h1>
                <p className="text-black/70">
                    These are some of the links that take me to webpages that I use frequently.
                </p>
            </div>

            <div className="space-y-8">
                {groups.map((group) => (
                    <section key={group.title} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={group.icon}
                                alt={`${group.title} category`}
                                className={`h-10 w-24 rounded-md border border-black/10 bg-white ${group.iconClass}`}
                            />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {group.links.map((link, index) => {
                                const lightness = 92 - (index % 6) * 3;
                                const borderLightness = lightness - 10;
                                return (
                                <a
                                    key={`${group.title}-${link.label}-${link.href}`}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md"
                                    style={{
                                        backgroundColor: `hsl(${group.hue}, 35%, ${lightness}%)`,
                                        borderColor: `hsl(${group.hue}, 30%, ${borderLightness}%)`,
                                        color: "rgb(35,35,35)",
                                    }}
                                >
                                    {link.label}
                                </a>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}
