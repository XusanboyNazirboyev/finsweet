import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa";
import { Shapes } from "./Shape"; 

const columns = [
    {
        title: "Home",
        links: [
            { label: "Home", to: "/" },
            { label: "Service", to: "/service" },
            { label: "Company", to: "/company" },
            { label: "Career", to: "/career" },
            { label: "News", to: "/blog" },
        ],
    },
    {
        title: "Service",
        links: [
            { label: "Technical support", to: "/service" },
            { label: "Testing", to: "/service" },
            { label: "Development", to: "/service" },
            { label: "AWS/Azure", to: "/service" },
            { label: "Consulting", to: "/service" },
            { label: "Information Technology", to: "/service" },
        ],
    },
    {
        title: "Resourses",
        links: [
            { label: "About Us", to: "/company" },
            { label: "Testimonial", to: "/" },
            { label: "Privacy Policy", to: "/privacy-policy" },
            { label: "Terms of use", to: "/privacy-policy" },
            { label: "Blog", to: "/blog" },
        ],
    },
];

const socials = [
    { label: "Facebook", Icon: FaFacebookF },
    { label: "Twitter", Icon: FaTwitter },
    { label: "Instagram", Icon: FaInstagram },
    { label: "LinkedIn", Icon: FaLinkedinIn },
];

export default function Footer() {
    const location = useLocation();

    const hiddenRoutes = ["/privacy-policy", "/contact"];
    const hideNewsletter =
        hiddenRoutes.includes(location.pathname) ||
        location.pathname.startsWith("/blog/") 

    return (
        <footer className="bg-white">
            <div className="container mx-auto px-6 pt-16 lg:px-16">
                {!hideNewsletter && (
                    <div className="relative overflow-hidden bg-[#444CFC] px-8 py-12 md:px-16 lg:px-20 lg:py-16">
                        <div className="absolute left-0 top-0">
                            <Shapes size="lg" />
                        </div>

                        <div className="absolute right-0 top-0 flex h-full pointer-events-none">
                            <div className="flex h-full flex-col">
                                <div className="h-16 w-4 bg-[#F98A5B]" />{" "}
                                <div className="h-28 w-4 bg-[#FFE0C2]" />{" "}
                            </div>
                        </div>

                        <div className="absolute bottom-0 right-0 h-10 w-4 bg-[#4A50E2]" />

                        <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
                            <div className="lg:col-span-7">
                                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-200">
                                    NEWSLETTER
                                </p>
                                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                                    Subscribe our News Letter{" "}
                                    <br className="hidden sm:inline" />
                                    to get Latest Updates.
                                </h2>
                            </div>

                            <div className="lg:col-span-5">
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    className="w-full"
                                >
                                    <input
                                        type="email"
                                        placeholder="Paresh@Pixeto.com"
                                        className="w-full bg-white px-6 py-4 text-sm font-medium text-slate-800 placeholder-slate-400 outline-none transition-all focus:ring-2 focus:ring-amber-300"
                                        required
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                <div className="grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
                    <div>
                        <Shapes size="md" className="mb-6" />

                        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                            Let's make <br />
                            something special
                        </h2>

                        <p className="mt-8 text-lg font-bold text-slate-900">
                            Let's talk! 🤙
                        </p>

                        <div className="mt-4 space-y-1 text-sm font-medium text-slate-700">
                            <p>020 7993 2905</p>
                            <p>hi@finsweet.com</p>
                        </div>

                        <p className="mt-6 text-xs leading-relaxed text-slate-500">
                            DLF Cybercity, Bhubaneswar,
                            <br />
                            India, &52050
                        </p>
                    </div>

                    {columns.map((column) => (
                        <nav key={column.title} aria-label={column.title}>
                            <p className="mb-6 font-bold text-slate-900">
                                {column.title}
                            </p>
                            <ul className="space-y-4 text-sm font-medium text-slate-600">
                                {column.links.map((link, index) => (
                                    <li
                                        key={`${column.title}-${link.label}-${index}`}
                                    >
                                        <Link
                                            to={link.to}
                                            className="transition-colors hover:text-slate-900"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <div className="flex justify-end pb-12">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-80"
                    >
                        Contact Us
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>

            {/* ==================== BOTTOM BAR ==================== */}
            <div className="bg-[#FFEAD8] px-6 py-6 lg:px-16">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
                    <div className="flex items-center gap-6">
                        <span className="text-xl font-extrabold text-slate-900">
                            {"{"}Finsweet
                        </span>
                        <span className="text-xs font-medium text-slate-600">
                            ©2021 Finsweet
                        </span>
                    </div>

                    <div
                        className="flex items-center gap-5 text-slate-800"
                        aria-label="Ijtimoiy tarmoqlar"
                    >
                        {socials.map(({ label, Icon }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="transition-colors hover:text-slate-600"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
