import conference1 from "../../assets/Image 1-2.svg";
import conference2 from "../../assets/Image 2-2.svg";
import conference3 from "../../assets/Image 3-2.svg";
import { Shapes } from "../Shape";

export default function CompanyHero() {
    return (
        <section className="relative bg-white px-6 py-16 md:px-16 lg:py-20">
            <div className="absolute right-6 top-16 md:right-16 lg:top-20">
                <Shapes size="md" variant="company" />
            </div>

            <div className="mx-auto max-w-7xl">

                <div>
                    <div className="mb-4 h-4 w-4 bg-[#FFD3AF]" />
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-700">
                        COMPANY
                    </p>
                </div>

                <div className="mt-4 max-w-3xl">
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Award-winning Company seen and used by millions around
                        the world.
                    </h1>
                    <p className="mt-6 text-sm leading-relaxed text-slate-500 max-w-xl">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The Maker is a decentralized.
                    </p>
                </div>

                <div className="relative mt-12">
                    <div className="absolute -top-3 right-0 flex h-3">
                        <div className="w-16 bg-orange-400" />
                        <div className="w-32 bg-amber-200" />
                        <div className="w-8 bg-[#444CFC]" />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={conference1}
                                alt="Company Meeting 1"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={conference2}
                                alt="Company Meeting 2"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={conference3}
                                alt="Company Meeting 3"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
