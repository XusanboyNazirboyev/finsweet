import { Rocket, Settings, LifeBuoy } from "lucide-react";

const cards = [
    {
        title: "On Time Delivery",
        description:
            "Through True Rich Attended does no end it his mother since real had half every him.",
        Icon: Rocket,
    },
    {
        title: "Best Quality",
        description:
            "Through True Rich Attended does no end it his mother since real had half every him.",
        Icon: Settings,
    },
    {
        title: "Support Assist",
        description:
            "Through True Rich Attended does no end it his mother since real had half every him.",
        Icon: LifeBuoy,
    },
];

export default function ExpertiseSection() {
    return (
        <section style={{ backgroundColor: "#ECF8F9" }}>
            <div className="container grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Our Expertise
                    </p>
                    <h2 className="text-3xl font-extrabold leading-snug text-navy sm:text-4xl">
                        We want to get local identification in every corner of
                        the world in this era of global citizenship
                    </h2>
                    <p className="mt-5 max-w-md text-muted-foreground">
                        Through True Rich Attended does no end it his mother
                        since real had half every him case in packages enquire
                        we up ecstatic unsatiable saw his giving Remain expense
                        you position concluded.
                    </p>
                </div>

                <div className="relative">
                    <span
                        className="absolute -top-3 left-0 h-4 w-4 bg-primary"
                        aria-hidden="true"
                    />

                
                    <div className="grid gap-3">
                        {cards.map((card) => (
                            <div
                                key={card.title}
                                className="flex gap-4 rounded-md bg-white p-6"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-peach text-primary">
                                    <card.Icon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>
                                <div>
                                    <p className="font-bold text-navy">
                                        {card.title}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-3 flex h-1.5">
                        <span className="w-1/2 bg-orange" />
                        <span className="w-1/2 bg-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}
