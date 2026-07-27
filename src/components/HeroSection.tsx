import { Link } from "react-router-dom";
import {
    ArrowRight,
    Hexagon,
    CircleDot,
    Waves,
    Camera,
    Circle,
} from "lucide-react";
import team from "../assets/Image-4.svg";
import { Shapes } from "./Shape";

const clientLogos = [
    { name: "logoipsum", Icon: Hexagon },
    { name: "logoipsum", Icon: CircleDot },
    { name: "logoipsum", Icon: Circle },
    { name: "logoipsum", Icon: Waves },
    { name: "logoipsum", Icon: Camera },
];

export default function HeroSection() {
    return (
        <section className="bg-navy text-navy-foreground">
            <div className="container grid gap-10 pb-20 pt-16 lg:grid-cols-2 lg:items-center">
                <div>
                    <span
                        className="mb-6 inline-block h-4 w-4 rounded-[3px] bg-white/10"
                        aria-hidden="true"
                    />
                    <h1 className="text-5xl font-extrabold leading-[1.1] sm:text-6xl">
                        Transform Your Idea Into Reality with Finsweet
                    </h1>
                    <p className="mt-6 max-w-md text-white/50">
                        The entire Finsweet team knows what&apos;s good with
                        Webflow and you can too with 1 week and a good attitude.
                    </p>

                    <div className="relative mt-9 inline-block">
                        <span
                            className="absolute -left-1 -top-1 grid h-4 w-4 grid-cols-2 gap-px"
                            aria-hidden="true"
                        ></span>
                        <Link
                            to="/contact"
                            className="relative flex h-14 items-center gap-2.5 overflow-hidden bg-[#444CFC] pl-10 pr-7 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                            <div className="absolute left-0 top-0 pointer-events-none">
                                <Shapes size="sm" />
                            </div>

                            <span className="relative z-10">Request Quote</span>
                            <ArrowRight
                                className="relative z-10 h-4 w-4"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden bg-white/5">
                        <img
                            src={team}
                            alt="Jamoa muzokara stolida"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <span
                        className="absolute -right-4 top-0 h-24 w-4 bg-orange"
                        aria-hidden="true"
                    />
                    <span
                        className="absolute -right-4 top-24 h-24 w-4 bg-peach"
                        aria-hidden="true"
                    />

                    <span
                        className="absolute -right-4 top-[46%] h-8 w-4 bg-primary"
                        aria-hidden="true"
                    />

                    <span
                        className="absolute -bottom-4 left-0 h-24 w-4 bg-orange"
                        aria-hidden="true"
                    />
                </div>
            </div>

            <div className="container pb-16 pt-8 lg:pt-4">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold text-white/40">
                            Our Clients
                        </p>
                        <p className="mt-1 font-bold text-white">
                            We&apos;ve Worked with
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-8 lg:gap-10">
                        {clientLogos.map(({ name, Icon }, index) => (
                            <span
                                key={`${name}-${index}`}
                                className="flex items-center gap-2 text-lg font-semibold text-white/30"
                            >
                                <Icon className="h-5 w-5" aria-hidden="true" />
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
