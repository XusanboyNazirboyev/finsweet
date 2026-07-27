import React, { useState } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    position: string;
    avatar: string;
    companyLogoText: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        quote: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
        author: "Johnny Andro",
        position: "Director, Company",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        companyLogoText: "logoipsum",
    },
    {
        id: 2,
        quote: "Working with this team transformed our business operations completely. Their attention to detail and technical execution is truly world-class.",
        author: "Sarah Jenkins",
        position: "CEO, TechCorp",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        companyLogoText: "logoipsum",
    },
    {
        id: 3,
        quote: "The software solutions provided helped us scale faster than expected. I highly recommend their services to anyone looking for top quality.",
        author: "Michael Chang",
        position: "Product Manager, StartupX",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        companyLogoText: "logoipsum",
    },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const currentTestimonial = testimonialsData[activeIndex];

    return (
        <section className="bg-[#F8F9FC] px-6 py-20 md:px-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
                {/* Chap qism: Sarlavha va Mijozlar statistikasi */}
                <div className="lg:col-span-5">
                    {/* Yuqoridagi kichik ko'k kvadrat */}
                    <div
                        className="mb-6 h-4 w-4 bg-[#444CFC]"
                        aria-hidden="true"
                    />

                    {/* Sarlavha */}
                    <h2 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                        Our customers love what we do
                    </h2>

                    <p className="mt-4 text-base font-semibold text-slate-800">
                        Transform your idea into reality with finsweet
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                    </p>

                    {/* Avatar lar va sharhlar soni */}
                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <img
                                className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover"
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                                alt="Customer 1"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                                alt="Customer 2"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover"
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80"
                                alt="Customer 3"
                            />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">
                                30+ Customer Reviews
                            </p>
                        </div>
                    </div>
                </div>

                {/* O'ng qism: Testimonial Card slider bilan */}
                <div className="relative lg:col-span-7">
                    <div className="relative bg-white p-8 sm:p-12 shadow-sm transition-all">
                        {/* Chap tarafdagi rangli chiziq dekoratsiyasi */}
                        <div className="absolute top-0 left-0 bottom-0 w-2 flex flex-col">
                            <div className="h-1/3 bg-orange-400" />
                            <div className="h-1/3 bg-amber-200" />
                            <div className="h-1/3 bg-[#444CFC]" />
                        </div>

                        {/* O'ng yuqoridagi Qo'shtirnoq (Quote) belgisi */}
                        <div className="absolute top-8 right-8 text-slate-800">
                            <Quote className="h-10 w-10 fill-slate-800 rotate-180" />
                        </div>

                        {/* Matn */}
                        <p className="pr-8 text-lg font-bold leading-relaxed text-slate-800 sm:text-xl">
                            "{currentTestimonial.quote}"
                        </p>

                        {/* Muallif ma'lumoti va logotip */}
                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={currentTestimonial.avatar}
                                    alt={currentTestimonial.author}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-base font-bold text-slate-900">
                                        {currentTestimonial.author}
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        {currentTestimonial.position}
                                    </p>
                                </div>
                            </div>

                            {/* Kompaniya logotipi */}
                            <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-400">
                                <span className="h-4 w-4 rounded-full bg-slate-300" />
                                <span>
                                    {currentTestimonial.companyLogoText}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Indicator Nuqtalar (Dots) */}
                    <div className="mt-8 flex justify-center gap-2">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2.5 rounded-full transition-all ${
                                    activeIndex === index
                                        ? "w-2.5 bg-slate-900"
                                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
