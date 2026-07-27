
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Shapes } from "../../components/Shape";
import playing from "../../assets/Image-9.svg"
const sidebarPosts = [
    {
        id: 1,
        title: "Great design expectations prejudice in digital products in Next Year",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 2,
        title: "Great design expectations prejudice in digital products in Next Year",
        author: "Mathew Jasele",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 3,
        title: "Great design expectations prejudice in digital products in Next Year",
        author: "Hussen Abakas",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    },
];

export default function BlogHeroSection() {
    return (
        <section className="bg-[#FAFAFA] py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* ================= CHAP TOMON: TRENDING POST ================= */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                            {/* Kichik to'rtburchak bezak va TRENDING sarlavha */}
                            <div className="flex items-center gap-3">
                                <span className="h-3 w-3 bg-[#FFB58A]" />
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                                    TRENDING
                                </span>
                            </div>

                            {/* Maqola sarlavhasi */}
                            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                Breaking the code How did we build our Figma
                                plugin
                            </h1>

                            {/* Tavsif */}
                            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The Maker is a
                                decentralized. We aim to attain the.
                            </p>

                            {/* Read More havolasi */}
                            <div className="mt-6">
                                <Link
                                    to="/blog/breaking-the-code"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#666DFF] transition-opacity hover:opacity-80"
                                >
                                    Read More
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            {/* Muallif va sana */}
                            <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-500">
                                <img
                                    src={playing}
                                    alt="Andrew Jonson"
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                                <span>Andrew Jonson</span>
                                <span className="text-slate-300">|</span>
                                <span>Posted on 27th January 2021</span>
                            </div>
                        </div>

                        {/* Trending Post Rasmi (Burchagida accent chiziqlar bilan) */}
                        <div className="relative mt-8 overflow-hidden">
                            <img
                                src={playing}
                                alt="Office workspace"
                                className="h-[320px] w-full object-cover sm:h-[400px]"
                            />
                            {/* O'ng tomondagi ko'k va shaftoli dekoratsiyalar */}
                            <div className="absolute right-0 top-0 h-10 w-3 bg-[#666DFF]" />
                            <div className="absolute -bottom-2 right-0 h-12 w-3 bg-[#FFB58A]" />
                        </div>
                    </div>

                    {/* ================= O'NG TOMON: SIDEBAR POSTLAR ================= */}
                    <div className="lg:col-span-5">
                        <div className="relative h-full overflow-hidden bg-[#FFE6D8] p-8 sm:p-12 flex flex-col justify-between">
                            {/* O'ng-yuqori burchakdagi Shapes bezagi */}
                            <div className="absolute right-0 top-0 rotate-180">
                                <Shapes size="sm" />
                            </div>

                            {/* Postlar Ro'yxati */}
                            <div className="space-y-10 pt-4">
                                {sidebarPosts.map((post) => (
                                    <article
                                        key={post.id}
                                        className="space-y-3"
                                    >
                                        <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors hover:text-[#666DFF]">
                                            <Link to={`/blog/${post.id}`}>
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                                            <img
                                                src={post.avatar}
                                                alt={post.author}
                                                className="h-7 w-7 rounded-full object-cover"
                                            />
                                            <span className="font-semibold text-slate-900">
                                                {post.author}
                                            </span>
                                            <span className="text-slate-400">
                                                {post.date}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
