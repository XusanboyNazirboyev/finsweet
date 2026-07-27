import React from "react";

const stats = [
    { value: "1560+", label: "Project Delivered" },
    { value: "100+", label: "Professional" },
    { value: "950+", label: "Happy Client" },
    { value: "10 yrs", label: "Experience" },
];

export default function CompanyStory() {
    return (
        <section className="bg-white px-6 py-16 md:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    {/* Chap qism: Matn */}
                    <div className="lg:col-span-6">
                        <div className="h-3 w-3 bg-[#666DFF] mb-3" />
                        <p className="text-sm font-bold text-slate-900 mb-2">
                            Our Story 👆
                        </p>
                        <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            From Startups to Titans of Industry
                        </h2>
                        <p className="mt-6 text-sm leading-relaxed text-slate-500 max-w-xl">
                            Through True Rich Attended does no end it his mother
                            since favourable real had half every him case in
                            packages enquire we up ecstatic unsatiable saw his
                            giving Remain expense of gay produce excited
                            perceived do an a china mean its so ye when in
                            explained Hearts am next over match mr partiality
                            not shoud latter thus as out no passed forming
                            middleton exercise up
                        </p>
                    </div>

                    {/* O'ng qism: Statistikalar bloki */}
                    <div className="bg-[#FFEAD8] p-8 md:p-12 lg:col-span-6">
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <p className="text-3xl font-black text-slate-900 sm:text-4xl">
                                        {stat.value}
                                    </p>
                                    <div className="mt-2 flex h-1.5 w-12 overflow-hidden">
                                        <div className="w-1/3 bg-[#666DFF]" />
                                        <div className="w-2/3 bg-orange-300" />
                                    </div>
                                    <p className="mt-2 text-xs font-bold text-slate-800">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Logotiplar bo'limi */}
                <div className="mt-16 bg-[#F9F9FF] px-8 py-10">
                    <div className="flex flex-wrap items-center justify-between gap-8 opacity-80">
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            logoipsum
                        </span>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            logoipsum
                        </span>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            logoipsum
                        </span>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            logoipsum
                        </span>
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            logoipsum
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
