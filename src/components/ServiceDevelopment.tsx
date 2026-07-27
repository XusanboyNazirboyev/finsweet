import laptop from "../assets/Image-5.svg";

export default function ServiceDevelopment() {
    return (
        <section className="bg-[#EDF7F9] px-6 py-20 md:px-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
                {/* Chap qism: Rasm */}
                <div className="lg:col-span-6">
                    <div className="relative overflow-hidden w-full max-w-lg aspect-[4/3]">
                        {/* 
  
            */}
                        <img
                            src={laptop} 
                            alt="Developer working on code"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* O'ng qism: Matnlar */}
                <div className="lg:col-span-6">
                    {/* Eyebrow / Kichik sarlavha */}
                    <p className="text-sm font-bold text-slate-900 mb-4 tracking-wide">
                        Developoment
                    </p>

                    {/* Asosiy Sarlavha */}
                    <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Bring your ideas to reality with certified team of
                        developers, working with latest technologies
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
