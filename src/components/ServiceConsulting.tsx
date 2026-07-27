import consult from "../assets/Image-7.svg";

export default function ServiceConsulting() {
    return (
        <section className="bg-[#F9F9FF] px-6 py-20 md:px-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
                {/* Chap qism: Rasm */}
                <div className="lg:col-span-6">
                    <div className="relative overflow-hidden w-full max-w-lg aspect-[4/3]">
                        <img
                            src={consult}
                            alt="Consulting team meeting"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* O'ng qism: Matnlar */}
                <div className="lg:col-span-6">
                    {/* Eyebrow */}
                    <p className="text-sm font-bold text-slate-900 mb-4 tracking-wide">
                        Consulting
                    </p>

                    {/* Asosiy Sarlavha */}
                    <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Get advice from world class professionals
                    </h2>

                    {/* Tavsif matni */}
                    <p className="mt-6 text-sm leading-relaxed text-slate-500 max-w-xl">
                        Through True Rich Attended does no end it his mother
                        since real had half every him case in packages enquire
                        we up ecstatic unsatiable saw his giving Remain expense
                        you position concluded. Through True Rich Attended does
                        no end it his mother since real had half every.
                    </p>
                </div>
            </div>
        </section>
    );
}
