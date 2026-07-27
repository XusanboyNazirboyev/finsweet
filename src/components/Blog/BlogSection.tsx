import React from "react";
import { Link } from "react-router-dom";

const recentPosts = [
    {
        id: 1,
        title: "Today’s best design trends for digital products",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 2,
        title: "Today’s best design trends for digital products",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 3,
        title: "Today’s best design trends for digital products",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 4,
        title: "Today’s best design trends for digital products",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
];

// 2. All posts ma'lumotlari (Vertikal kartalar)
const allPosts = [
    {
        id: 1,
        title: "We aim to attain the greatest satisfaction for our clients",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 2,
        title: "We aim to attain the greatest satisfaction for our clients",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 3,
        title: "We aim to attain the greatest satisfaction for our clients",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 4,
        title: "We aim to attain the greatest satisfaction for our clients",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 5,
        title: "We aim to attain the greatest satisfaction for our clients",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 6,
        title: "We aim to attain the greatest satisfaction for our clients",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
        author: "Andrew Jonson",
        date: "Jan 19, 2021",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
];

export default function BlogSections() {
    return (
        <div className="bg-white py-16 lg:py-24 space-y-24">
            <div className="container mx-auto px-6 lg:px-16">
                {/* ================= READ RECENT POST ================= */}
                <section>
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Read Recent Post
                    </h2>

                    <div className="mt-10 grid gap-8 md:grid-cols-2">
                        {recentPosts.map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col sm:flex-row bg-[#F8F9FC] transition-transform hover:-translate-y-1"
                            >
                                {/* Rasm */}
                                <div className="sm:w-1/2 h-48 sm:h-auto shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Kontent */}
                                <div className="p-6 sm:p-8 flex flex-col justify-between sm:w-1/2">
                                    <h3 className="text-lg font-bold leading-snug text-slate-900 hover:text-[#666DFF]">
                                        <Link to={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-500">
                                        <img
                                            src={post.avatar}
                                            alt={post.author}
                                            className="h-7 w-7 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-slate-900 font-bold">
                                                {post.author}
                                            </p>
                                            <p className="text-slate-400 font-normal">
                                                {post.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= ALL POSTS ================= */}
                <section className="mt-24">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        All posts
                    </h2>

                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {allPosts.map((post) => (
                            <div
                                key={post.id}
                                className="flex flex-col justify-between bg-[#F8F9FC] p-6 sm:p-8 transition-transform hover:-translate-y-1"
                            >
                                <div>
                                    {/* Rasm */}
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    {/* Sarlavha & Tavsif */}
                                    <h3 className="mt-6 text-xl font-bold leading-snug text-slate-900 hover:text-[#666DFF]">
                                        <Link to={`/blog/${post.id}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                                        {post.desc}
                                    </p>
                                </div>

                                {/* Muallif info */}
                                <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-slate-500">
                                    <img
                                        src={post.avatar}
                                        alt={post.author}
                                        className="h-7 w-7 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-slate-900 font-bold">
                                            {post.author}
                                        </p>
                                        <p className="text-slate-400 font-normal">
                                            {post.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
