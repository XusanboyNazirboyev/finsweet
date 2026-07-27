import teamPlaying from "../../assets/Image-8.svg";

export default function CompanyVision() {
    return (
        <section className="bg-white px-6 py-16 md:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-3">
                    OUR VISION
                </p>

                <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl max-w-3xl">
                    We want to get local identification in every corner of the
                    world in this era of global citizenship.
                </h2>

                <p className="mt-6 text-sm leading-relaxed text-slate-500 max-w-2xl">
                    Through True Rich Attended does no end it his mother since
                    real had half every him case in packages enquire we up
                    ecstatic unsatiable saw his giving Remain expense you
                    position concluded.
                </p>

                {/* Keng Rasm */}
                <div className="mt-12 aspect-[21/9] w-full overflow-hidden">
                    <img
                        src={teamPlaying}
                        alt="Office Vision"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
