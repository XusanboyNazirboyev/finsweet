import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type Tab = "details" | "requirements" | "responsibilities";

const tabs: { id: Tab; label: string }[] = [
    { id: "details", label: "Details" },
    { id: "requirements", label: "Requirements" },
    { id: "responsibilities", label: "Responsibilities" },
];

const content: Record<Tab, string[]> = {
    details: [
        "Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).",
        "Design & Create highly engaging industry-related content in both photo, gif & video format.",
        "Publish Posts on various social media channels.",
        "Promote content on social networks and monitor engagement (e.g. comments and shares).",
        "Research industry-related topics.",
        "Editing audio and sound design on projects.",
        "Engage in opportunities to develop original content and concepts for web and mobile.",
        "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
        "Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels.",
    ],
    requirements: [
        "4 to 5 years of professional experience in a related field.",
        "Strong portfolio demonstrating relevant, shipped work.",
        "Comfortable working across multiple platforms and tools.",
        "Excellent written and verbal communication skills.",
        "Ability to work independently in a remote-first team.",
    ],
    responsibilities: [
        "Own the end-to-end delivery of assigned projects.",
        "Collaborate closely with design, product, and engineering.",
        "Give and receive constructive feedback in code/design reviews.",
        "Keep stakeholders updated on progress and blockers.",
        "Continuously improve team processes and documentation.",
    ],
};

export default function CareerInnerPage() {
    const [activeTab, setActiveTab] = useState<Tab>("details");
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!agreed) {
            alert("Please accept the privacy policy first!");
            return;
        }
        alert("Application submitted successfully!");
    };

    return (
        <div className="bg-white">
            {/* ================= HERO & JOB DESCRIPTION ================= */}
            <section className="container py-16 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    {/* Chap tomon: Sarlavha va Apply Now tugmasi */}
                    <div className="lg:col-span-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            Career at Finsweet
                        </p>

                        <h1 className="mt-4 text-4xl font-extrabold text-navy sm:text-5xl">
                            Full Stack Developer
                        </h1>

                        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                            Through True Rich Attended does no end it his mother
                            since real had half every him case in packages.
                        </p>

                        <div className="relative mt-8 inline-block">
                            <a
                                href="#apply-form"
                                className="relative z-0 inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            >
                                Apply Now
                                <ArrowRight
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>

                    {/* O'ng tomon: Shaftoli rangli Job Description kartasi */}
                    <div className="relative overflow-hidden bg-[#FFE6D8] p-10 sm:p-14 lg:col-span-6">
                        <h3 className="text-2xl font-extrabold text-navy">
                            Job Description
                        </h3>

                        <ul className="mt-6 space-y-4 text-sm font-medium leading-relaxed text-navy/80">
                            <li>Remote, India , 4 to 5 Years Of Experience</li>
                            <li>Department: Product Engineering</li>
                            <li>Full Time 5 Position Available.</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ================= TABS & CONTENT ================= */}
            <section className="bg-[#ECF8F9] py-16 lg:py-20">
                <div className="container">
                    <div className="mx-auto max-w-4xl">
                        {/* Tab Sarlavhalari */}
                        <div className="flex justify-center gap-8 border-b border-border pb-4 text-center sm:gap-16">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative pb-4 text-lg font-bold transition-colors ${
                                        activeTab === tab.id
                                            ? "text-primary"
                                            : "text-navy hover:text-primary/70"
                                    }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <span className="absolute bottom-0 left-0 h-1 w-full bg-primary" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Mazmuni */}
                        <div className="mt-12">
                            <ul className="space-y-4">
                                {content[activeTab].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-sm leading-relaxed text-navy/80"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================= APPLY NOW FORM SECTION ================= */}
            <section id="apply-form" className="py-20 lg:py-28">
                <div className="container">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                            Apply Now
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-6"
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    className="w-full bg-[#F8F9FC] px-6 py-5 text-sm text-navy placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    className="w-full bg-[#F8F9FC] px-6 py-5 text-sm text-navy placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <input
                                    type="email"
                                    placeholder="Email Id"
                                    required
                                    className="w-full bg-[#F8F9FC] px-6 py-5 text-sm text-navy placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-primary"
                                />
                                <input
                                    type="tel"
                                    placeholder="Mobile No"
                                    required
                                    className="w-full bg-[#F8F9FC] px-6 py-5 text-sm text-navy placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <textarea
                                    rows={5}
                                    placeholder="Why do you think you are a good fit for Finsweet?"
                                    required
                                    className="w-full resize-none bg-[#F8F9FC] px-6 py-5 text-sm text-navy placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            {/* Checkbox Privacy Policy */}
                            <div className="flex items-start gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={agreed}
                                    onChange={(event) =>
                                        setAgreed(event.target.checked)
                                    }
                                    className="mt-1 h-5 w-5 shrink-0 accent-primary"
                                />
                                <label
                                    htmlFor="privacy"
                                    className="text-xs leading-relaxed text-muted-foreground"
                                >
                                    I agree to accept the privacy policy, We
                                    will add your contact details provided in
                                    this form to our system for contacting you
                                    regarding your request.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="relative inline-block pt-4">
                                <button
                                    type="submit"
                                    className="relative z-0 inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                >
                                    Submit Application
                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}
