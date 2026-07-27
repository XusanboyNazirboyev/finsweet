import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Shapes } from "../../components/Shape";
import { jobOpenings } from "../../lib/site-data";
import careersBgImage from "../../assets/Image 1-2.svg"; // Rasmingiz fonda ishlatiladi

export default function CareerPage() {
    return (
        <div className="bg-white">
            {/* ================= HERO SECTION ================= */}
            <section className="relative container py-16 text-center lg:py-20">
                {/* O'ng yuqori burchakdagi Shapes SVG */}
                <div className="absolute right-6 top-6 lg:right-16 lg:top-10">
                    <Shapes size="md" />
                </div>

                <div className="mx-auto max-w-4xl">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Career at Finsweet
                    </p>

                    <h1 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
                        We hired people who are{" "}
                        <br className="hidden sm:inline" />
                        Always Passionate about{" "}
                        <br className="hidden sm:inline" />
                        what they do
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        Through True Rich Attended does no end it his mother
                        since real had half every him case in packages enquire
                        we up ecstatic unsatiable saw.
                    </p>

                    {/* Careers maskalangan ulkan matn-yozuvi */}
                    <div className="mt-10 flex justify-center select-none overflow-hidden">
                        <h2
                            className="text-7xl font-black tracking-tight text-transparent bg-clip-text sm:text-9xl md:text-[11rem] lg:text-[13rem] leading-none"
                            style={{
                                backgroundImage: `url(${careersBgImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center 85%", // Rasmni pastroqqa (odamlar va noutbuklar qismiga) suradi
                                WebkitBackgroundClip: "text",
                            }}
                        >
                            Careers
                        </h2>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-2">
                        <p className="text-sm font-semibold text-navy">
                            See Our open positions
                        </p>
                        <span className="text-xl" aria-hidden="true">
                            👇
                        </span>
                    </div>
                </div>
            </section>

            {/* ================= OPEN POSITIONS GRID ================= */}
            <section className="bg-[#ECF8F9] py-16 lg:py-24">
                <div className="container">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {jobOpenings.map((job) => (
                            <div
                                key={job.slug}
                                className="flex flex-col justify-between rounded-md bg-white p-8"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-navy">
                                        {job.title}
                                    </h3>
                                    <p className="mt-2 text-xs font-medium text-muted-foreground">
                                        {job.location} · {job.type}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {job.salary} · {job.extra}
                                    </p>
                                </div>

                                <Link
                                    to={`/career/${job.slug}`}
                                    className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                                >
                                    Apply Now
                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
