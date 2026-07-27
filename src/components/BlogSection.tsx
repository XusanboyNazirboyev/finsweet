
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import girls from "../assets/Image-22.svg"
import colleagues from "../assets/Image-23.svg"
interface BlogPost {
    id: number;
    date: string;
    title: string;
    slug: string;
    image: string; 
}

const blogsData: BlogPost[] = [
    {
        id: 1,
        date: "Jan 19, 2021",
        title: "Today's best design trends for digital products",
        slug: "/blog/best-design-trends",
        image: girls
    },
    {
        id: 2,
        date: "Jan 19, 2021",
        title: "A practical guide to building a brand strategy",
        slug: "/blog/building-a-brand-strategy",
        image: colleagues
    },
];

export default function BlogSection() {
    return (
        <section className="bg-[#EDF7F9] px-6 py-20 md:px-16 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 h-4 w-4 bg-[#6A54F1]" aria-hidden="true" />

                <h2 className="mb-12 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                    Read our latest blogs & news
                </h2>

                <div className="grid gap-8 lg:grid-cols-2">
                    {blogsData.map((blog) => (
                        <div
                            key={blog.id}
                            className="flex flex-col bg-white overflow-hidden shadow-sm transition-all hover:shadow-md sm:flex-row"
                        >

                            <div className="relative h-64 w-full sm:h-auto sm:w-1/2">
                                <img
                                    src={blog.image} 
                                    alt={blog.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>


                            <div className="flex flex-1 flex-col justify-between p-8 sm:w-1/2">
                                <div>
                                    <span className="text-xs font-medium text-slate-400">
                                        {blog.date}
                                    </span>

                                    <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                                        {blog.title}
                                    </h3>
                                </div>

                                <Link
                                    to={blog.slug}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6A54F1] transition-colors hover:text-indigo-800"
                                >
                                    Read More
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
