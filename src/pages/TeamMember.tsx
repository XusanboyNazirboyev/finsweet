import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import avatar from "../assets/Image-21.svg"
// Javena yozgan blog postlar ro'yxati
const javenaPosts = [
    {
        id: 1,
        date: "Jan 19, 2021",
        title: "Today’s best design trends for digital products",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        link: "/blog/1",
    },
    {
        id: 2,
        date: "Jan 19, 2021",
        title: "A practical guide to building a brand strategy",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
        link: "/blog/2",
    },
];

export default function TeamMemberPage() {
    return (
        <div className="bg-white">
            {/* ================= SECTION 1: PROFILE HERO ================= */}
            <section className="py-20 lg:py-28">
                <div className="container mx-auto px-6 text-center">
                    {/* Avatar */}
                    <div className="mx-auto h-48 w-48 overflow-hidden rounded-full sm:h-56 sm:w-56">
                        <img
                            src={avatar}
                            alt="Javena Melo"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Name & Title */}
                    <h1 className="mt-8 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Javena Melo
                    </h1>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                        CEO
                    </p>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                        Through True Rich Attended does no end it his mother
                        since real had half every him case in packages enquire
                        we up ecstatic unsatiable.
                    </p>

                    {/* Social Links */}
                    <div className="mt-6 flex justify-center items-center gap-5 text-slate-700">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="transition-colors hover:text-[#666DFF]"
                        >
                            <FaFacebookF className="h-4 w-4" />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="transition-colors hover:text-[#666DFF]"
                        >
                            <FaTwitter className="h-4 w-4" />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="transition-colors hover:text-[#666DFF]"
                        >
                            <FaInstagram className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 2: BLOG POSTS FROM JAVENA ================= */}
            <section className="bg-[#EEF4F6] py-16 lg:py-24">
                <div className="container mx-auto px-6 lg:px-16">
                    {/* Sarlavha va binafsha to'rtburchak bezak */}
                    <div className="mb-10">
                        <div className="mb-3 h-3 w-3 bg-[#666DFF]" />
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Blog posts from Javena
                        </h2>
                    </div>

                    {/* Kartalar grid'i */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {javenaPosts.map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col sm:flex-row bg-white transition-transform hover:-translate-y-1"
                            >
                                {/* Rasm */}
                                <div className="sm:w-1/2 h-48 sm:h-auto shrink-0 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Kontent */}
                                <div className="p-6 sm:p-8 flex flex-col justify-between sm:w-1/2">
                                    <div>
                                        <span className="text-xs font-semibold text-slate-400">
                                            {post.date}
                                        </span>
                                        <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 hover:text-[#666DFF]">
                                            <Link to={post.link}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                    </div>

                                    {/* Read More Link */}
                                    <div className="mt-6">
                                        <Link
                                            to={post.link}
                                            className="inline-flex items-center gap-2 text-xs font-bold text-[#666DFF] transition-opacity hover:opacity-80"
                                        >
                                            Read More
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
