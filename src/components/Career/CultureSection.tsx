

const cultureBenefits = [
    {
        icon: "😷",
        title: "Covid-19 insurance",
        description:
            "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
        icon: "⏱️",
        title: "Flexible working time",
        description:
            "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
        icon: "🏡",
        title: "Work from home",
        description:
            "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
        icon: "🎉",
        title: "Annual retreats",
        description:
            "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
        icon: "💰",
        title: "Learning stipend",
        description:
            "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
    {
        icon: "💪",
        title: "Gym membership",
        description:
            "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
    },
];

export default function CultureSection() {
    return (
        <section className="bg-[#FAFAFC] py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Header qismi */}
                <div className="max-w-xl">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        OUR WORK & CULTURE
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                        Come and join a team of highly skilled professionals.
                    </h2>

                    <p className="mt-4 text-xs leading-relaxed text-slate-500 sm:text-sm">
                        Through True Rich Attended does no end it his mother
                        since real had half every him case in packages enquire
                        we up ecstatic unsatiable saw his giving Remain expense
                        you position concluded.
                    </p>
                </div>

                {/* Benefits Grid (Afzalliklar) */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {cultureBenefits.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between rounded-none bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            {/* Dumaloq ikonka fon dipi */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE6D8]">
                                <span className="text-xl">{item.icon}</span>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
