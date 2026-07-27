import { useParams } from "react-router-dom";
import { Shapes } from "../components/Shape";
import { blogPosts } from "../lib/site-data";
import playing from "../assets/Image-8.svg"
export default function BlogInnerPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];

    return (
        <article className="bg-white">
            <div className="container max-w-3xl py-16">
                <div className="relative">
                    <span
                        className="mb-4 inline-block h-4 w-4 bg-orange"
                        aria-hidden="true"
                    />
                    <Shapes size="sm" className="absolute right-0 top-0" />

                    <h1 className="max-w-xl text-3xl font-extrabold leading-snug text-navy sm:text-4xl">
                        {post.title}
                    </h1>
                    <p className="mt-4 max-w-xl text-muted-foreground">
                        {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                        <img
                            src={post.authorAvatar}
                            alt=""
                            className="h-9 w-9 rounded-full object-cover"
                        />
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-navy">
                                {post.author}
                            </span>{" "}
                            · {post.date}
                        </p>
                    </div>
                </div>

                <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-md">
                    <img
                        src={playing}
                        alt={post.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="mt-12 space-y-12">
                    {post.sections.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-2xl font-extrabold text-navy">
                                {section.heading}
                            </h2>

                            {section.type === "paragraph" && section.body && (
                                <p className="mt-4 leading-8 text-muted-foreground">
                                    {section.body}
                                </p>
                            )}

                            {section.type === "steps" && section.steps && (
                                <ol className="mt-4 space-y-3">
                                    {section.steps.map((step, stepIndex) => (
                                        <li
                                            key={stepIndex}
                                            className="flex gap-3 text-muted-foreground"
                                        >
                                            <span className="font-semibold text-navy">
                                                {stepIndex + 1}.
                                            </span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
