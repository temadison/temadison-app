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
            {
                label: "American Funds",
                href: "https://capitalgroup.retirementpartner.com/participant/#/login?accu=AmFunds",
                icon: "/images/links/financial/american-funds.jpg"
            },
            {
                label: "BofA",
                href: "https://www.bankofamerica.com",
                icon: "/images/links/financial/bank-of-america.png"
            },
            {
                label: "CapitalOne",
                href: "https://verified.capitalone.com/auth/signin",
                icon: "/images/links/financial/capital-one.png"
            },
            {
                label: "Chase",
                href: "https://www.chase.com",
                icon: "/images/links/financial/chase.jpg",
            },
            {
                label: "Citi",
                href: "https://www.citi.com",
                icon: "/images/links/financial/citi.png",
            },
            {
                label: "Coinbase",
                href: "https://login.coinbase.com/signin",
                icon: "/images/links/financial/coinbase.png"
            },
            {
                label: "Credit Karma",
                href: "https://www.creditkarma.com",
                icon: "/images/links/financial/credit-karma.png",
            },
            {
                label: "Crossroads US",
                href: "https://crossroadsus.epayub.com/Account/Login",
                icon: "/images/links/financial/crossroads-us.png",
            },
            {
                label: "E*Trade",
                href: "https://us.etrade.com",
                icon: "/images/links/financial/e-trade.png",
            },
            {
                label: "Fidelity",
                href: "https://digital.fidelity.com/prgw/digital/login/full-page",
                icon: "/images/links/financial/fidelity.png",
            },
            {
                label: "First Service Residential",
                href: "https://www.clickpay.com/custom/fsr/login.html",
                icon: "/images/links/financial/clickpay.jpg",
            },
            {
                label: "Loring Ward",
                href: "https://loringward.envestnet.com/secure/login/login.jsp",
                icon: "/images/links/financial/loring-ward-envestnet.png",
            },
            {
                label: "Mr. Cooper",
                href: "https://auth.rocketaccount.com/u/login",
                icon: "/images/links/financial/mr-cooper.png",
            },
            {
                label: "Schwab",
                href: "https://client.schwab.com/Areas/Access/Login",
                icon: "/images/links/financial/schwab.png",
            },
            {
                label: "PayPal",
                href: "https://www.paypal.com/signin",
                icon: "/images/links/financial/paypal.png",
            },
            {
                label: "Principal",
                href: "https://accounts.principal.com",
                icon: "/images/links/financial/principal.png",
            },
            {
                label: "Putnam",
                href: "https://www.putnam.com/individual/accounts#/protected/individual/accounts",
                icon: "/images/links/financial/putnam.png",
            },
            {
                label: "Spectrum",
                href: "https://id.spectrum.net/login?account_type=RESIDENTIAL&client_id=consumer_portal",
                icon: "/images/links/financial/spectrum.png",
            },
            {
                label: "Vanguard",
                href: "https://login.vanguard.com/login",
                icon: "/images/links/financial/vanguard.jpg",
            }
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
                        <div className="flex justify-center">
                            <img
                                src={group.icon}
                                alt={`${group.title} category`}
                                className={`h-20 w-44 rounded-md border border-black/10 bg-white ${group.iconClass}`}
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
                                    className="flex min-h-[52px] items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md"
                                    style={{
                                        backgroundColor: `hsl(${group.hue}, 35%, ${lightness}%)`,
                                        borderColor: `hsl(${group.hue}, 30%, ${borderLightness}%)`,
                                        color: "rgb(35,35,35)",
                                    }}
                                >
                                    {link.icon ? (
                                        <span className="flex items-center gap-3">
                                            <img
                                                src={link.icon}
                                                alt={link.label}
                                                className="h-6 w-auto max-w-[120px] object-contain"
                                            />
                                            <span className="text-sm font-semibold">{link.label}</span>
                                        </span>
                                    ) : (
                                        link.label
                                    )}
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
