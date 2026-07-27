import { Link } from "react-router-dom";
import { ArrowRight, Headset, Settings, Code2 } from "lucide-react";
import { Shapes } from "./Shape";

export default function Services() {
    const services = [
        {
            icon: <Headset className="h-6 w-6 text-orange-500" />,
            title: "Technical support",
            description:
                "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            link: "/services/technical-support",
        },
        {
            icon: <Settings className="h-6 w-6 text-orange-500" />,
            title: "Testing Management",
            description:
                "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            link: "/services/testing-management",
        },
        {
            icon: <Code2 className="h-6 w-6 text-orange-500" />,
            title: "Development",
            description:
                "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            link: "/services/development",
        },
    ];

    return (
        <section className="bg-[#FFEAD8] px-6 py-16 md:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Yuqori qism: Matn va Tugma */}
                <div className="max-w-2xl">
                    {/* Eyebrow matni */}
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-4">
                        Our Services
                    </p>

                    {/* Sarlavha */}
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-5xl">
                        We build software solutions that solve client's business
                        challenges
                    </h1>

                    {/* Dekoratatsiyali Tugma */}
                    <div className="relative mt-8 inline-block">
                        {/* Chap burchakdagi rangli kvadratlar dekoratsiyasi */}
                        <div
                            className="absolute -left-2 -top-2 z-10 grid grid-cols-2 gap-0.5"
                            aria-hidden="true"
                        ></div>

                        <Link
                            to="/contact"
                            className="relative flex h-14 items-center gap-2.5 overflow-hidden bg-[#444CFC] pl-10 pr-7 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            <div className="absolute left-0 top-0 pointer-events-none">
                                <Shapes size="sm" />
                            </div>

                            {/* Matn va Strelka */}
                            <span className="relative z-10">
                                Start a project
                            </span>
                            <ArrowRight
                                className="relative z-10 h-4 w-4"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>

                {/* Pastki qism: 3 ta Card (Xizmatlar) */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div>
                                {/* Ikonka orqa foni bilan */}
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                    {service.icon}
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="text-sm leading-relaxed text-slate-500">
                                    {service.description}
                                </p>
                            </div>

                            {/* Read more havolasi */}
                            <Link
                                to={service.link}
                                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#444CFC] transition-colors hover:text-blue-700"
                            >
                                Read more
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
