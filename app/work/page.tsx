import Image from "next/image";

type Experience = {
    title: string;
    company: string;
    dates: string;
    logo: string;
    summary?: string;
    bullets: string[];
    tech?: string[];
};

const experiences: Experience[] = [
    {
        title: "Senior Developer, Account & Card Services",
        company: "Netspend",
        dates: "2021 - 23",
        logo: "/images/work/netspend-logo-680.png",
        summary:
            "Senior developer on account and card services team, responsible for working with architecture lead and business process owner to design and implement system enhancements spanning a complex set of back-end components, micro-services, and consumer applications.",
        bullets: [
            "Delivered core functionalities related to accounts, cards, and card owners in company software.",
            "Worked in a scrum-based agile team with QA team and others to scope work, develop solutions, mentor junior developers, and provide testable software to meet business requirements.",
            "Investigated and fixed failing regression tests that resulted in a 50% reduction in test cycle failures.",
        ],
    },
    {
        title: "Lead Developer, Application-Level Encryption DDA (ALED)",
        company: "Fiserv, Inc.",
        dates: "2020 - 21",
        logo: "/images/work/xcelerate_logo_680x121.png",
        summary:
            "Lead developer on a project at client (Fiserv) that implemented data encryption/decryption of data at rest in several existing legacy applications.",
        bullets: [
            "Led a three-person development team in the enhancement of the Nasco DRS application to implement encryption of sensitive data.",
            "Encrypted sensitive database elements and updated UI flows to decrypt on read and encrypt on save.",
            "Updated logging to store sensitive data in a structured format containing encrypted values.",
            "Created an application to encrypt/decrypt sensitive values and files to support development and operations teams.",
            "Completed analysis and began development on encryption implementation for DDA Feds (REST/SOAP).",
            "Extracted the mapping component from the previous encryption effort into a separate project for reuse.",
            "Expanded the mapping component with XML file-based configuration to support extended requirements.",
            "Created a log parsing utility to identify potential sensitive data by application, client, and field.",
        ],
    },
    {
        title: "Senior Software Engineer, Defense Information System for Security (DISS)",
        company: "RSA Security",
        dates: "2014 - 15",
        logo: "/images/work/rsa_security_logo_680x121.png",
        summary:
            "Designed and developed secure software solutions for defense information systems, ensuring compliance with industry standards and driving innovation in cybersecurity measures to safeguard sensitive data.",
        bullets: [
            "Provided technical guidance and support for various new efforts associated with the DISS applications.",
            "Created an independent screening application using components of the existing application together with enhanced custom code.",
            "Investigated integration of an ESB into the existing application and built Mule ESB components for external data exchange.",
        ],
        tech: ["Java", "Kotlin", "Oracle", "Gradle", "git"],
    },
    {
        title: "Senior Software Engineer, Customer CMS & Site Application",
        company: "iWorks",
        dates: "2011 - 14",
        logo: "/images/work/iworks_logo_680x121.png",
        summary:
            "Leader of the development staff for the DISS Enterprise responsible for hiring, training, providing guidance, managing assignments, and reviewing team members. Also scoped work to fit release schedules and tracked and reported on progress.",
        bullets: [
            "Overhauled issue workflow process and tailored JIRA to match team process and release planning.",
            "Re-wrote the reporting module to stabilize a historically fragile area of the system.",
            "Converted the Change Management System from SVN to git, eliminating frequent merge issues.",
            "Revamped the data service layer using Java Generics to consolidate and simplify common data services.",
            "Revitalized unit and integration tests and rebuilt the integration testing infrastructure.",
            "Created an automated Status Dashboard utility that integrated with Jenkins to report build and deployment status.",
            "Built a browser-based CMS and media website using Spring MVC, REST, and Spring Data JPA.",
            "Integrated Shiro, Orika, Dozer, Jackson, Lucene, Joda Time, and multiple social media APIs.",
            "Built RSS feeds, sitemap generation, and JUnit test harnesses.",
        ],
        tech: [
            "Java",
            "Java EE",
            "Spring Data JPA",
            "Hibernate",
            "Postgres",
            "Tomcat",
            "Maven",
            "SVN -> git",
        ],
    },
    {
        title: "Senior Java Engineer, Online Financial Planning Application",
        company: "HelloWallet",
        dates: "2010 - 11",
        logo: "/images/work/hellowallet_logo_680x121.png",
        summary:
            "Senior software engineer on a six-member team that overhauled the beta version of an online financial planning application in seven months.",
        bullets: [
            "Coded roughly one-fourth of the rich client application using GWT and UiBinder.",
            "Built client-server RPC interaction based on GWT RPC.",
            "Updated server-side business processing and persistence models.",
            "Enhanced MySQL database and built DAOs and entity classes using Spring and JPA.",
        ],
        tech: ["Java", "Spring", "GWT/UiBinder", "MySQL", "Maven", "git"],
    },
    {
        title: "Project Manager / Senior Java Engineer, Knowledge-Based Authentication (KBA)",
        company: "Silent Solutions",
        dates: "2004 - 10",
        logo: "/images/work/silent_solutions_logo_680x121.png",
        summary:
            "As Project Manager, organized and coordinated the replacement of the application’s sole data provider across three releases within a five-month period, reducing data cost from 62 cents to 22 cents per transaction.",
        bullets: [
            "Designed and developed roughly a third of the UI and supporting Java classes using J2EE components.",
            "Built account and user management, later converted to Sun One Directory Server (LDAP).",
            "Overhauled BiRT reporting infrastructure to reduce report build effort.",
            "Wrote extensive unit tests using JUnit and practiced test-driven development.",
        ],
        tech: ["Java", "J2EE", "JSP", "Sun One LDAP", "BiRT", "MySQL", "Maven", "CVS"],
    },
    {
        title: "Consultant, Recourse Analysis Processing System (RAPS)",
        company: "Fannie Mae",
        dates: "2002 - 04",
        logo: "/images/work/fannie_mae_logo_680x121.png",
        summary:
            "RAPS was the system of record at Fannie Mae to manage the remediation of deficient loans. It was the first Fannie Mae application developed in Objective C.",
        bullets: [
            "Lead technical expert responsible for maintaining the viability of a system integral to the loan lifecycle.",
        ],
        tech: ["Objective C", "Enterprise Object Framework", "Web Object Framework", "CVS"],
    },
    {
        title: "Lead Developer, Postal Equipment Operations Tracking Application",
        company: "Celerity",
        dates: "2002",
        logo: "/images/work/celerity_logo_680x121.png",
        summary:
            "The equipment monitoring system tracked status of U.S. Post Office equipment in local and remote sites.",
        bullets: [
            "Served as the sole developer responsible for re-writing the application into Java.",
            "Integrated an open-source logging framework to provide operations staff detailed application status.",
        ],
        tech: ["Java", "MySQL", "Maven", "CVS"],
    },
];

export default function WorkPage() {
    return (
        <div className="space-y-12 rounded-3xl bg-[rgb(225,235,255)] p-6 sm:p-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-semibold">My Work</h1>
                <p className="text-black/75">
                    Versatile Application Development Professional with a proven track
                    record in diverse roles, encompassing Project Manager, Team Lead, and
                    Senior Software Engineer, adept at implementing agile development
                    practices and creating and maintaining comprehensive project plans.
                    Demonstrated expertise in constructing durable, lean, and
                    well-structured Java-based applications, accompanied by exceptional
                    code craftsmanship that withstands the test of time. Excellent written
                    and verbal communication skills, complemented by extensive experience
                    in end-to-end web application development and a deep understanding of
                    agile methodologies and full life-cycle software development.
                </p>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-black/60">
                        Education
                    </h2>
                    <p className="mt-3 text-lg font-semibold">
                        B.S., Computer Science
                    </p>
                    <p className="text-black/70">
                        University of Maryland at College Park, 1987
                    </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-black/60">
                        Work Experience
                    </h2>
                    <p className="mt-3 text-lg font-semibold">Senior developer roles</p>
                    <p className="text-black/70">See the roles below.</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <h2 className="text-sm uppercase tracking-[0.2em] text-black/60">
                        Hobbies
                    </h2>
                    <p className="mt-3 text-lg font-semibold">Travel, Adventure</p>
                    <p className="text-black/70">Sports, Music, Politics</p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Work Experience</h2>

                <div className="space-y-6">
                    {experiences.map((role) => (
                        <article
                            key={`${role.company}-${role.title}`}
                            className="rounded-2xl border border-black/10 bg-white p-6"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-40 items-center justify-start">
                                        <Image
                                            src={role.logo}
                                            alt={`${role.company} logo`}
                                            width={160}
                                            height={48}
                                            className="h-auto w-auto max-w-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{role.title}</h3>
                                        <div className="text-sm text-black/70">
                                            {role.company}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm text-black/60">{role.dates}</div>
                            </div>

                            {role.summary && (
                                <p className="mt-4 text-black/75">{role.summary}</p>
                            )}

                            <ul className="mt-4 list-disc space-y-2 pl-5 text-black/75">
                                {role.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>

                            {role.tech && role.tech.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {role.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
