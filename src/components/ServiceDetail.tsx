
import girl from "../assets/Feature 1 Image.svg"
export default function ServiceDetail() {
    return (
        <section className="bg-white px-6 py-20 md:px-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
                {/* Chap qism: Matnlar */}
                <div className="lg:col-span-6">
                    {/* Eyebrow / Kichik sarlavha */}
                    <p className="text-sm font-bold text-slate-900 mb-4 tracking-wide">
                        Technical Support
                    </p>

                    {/* Asosiy Sarlavha */}
                    <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Best in class tech support for your company. We become
                        your tech backbone
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

                {/* O'ng qism: Rasm */}
                <div className="lg:col-span-6 flex justify-end">
                    <div className="relative overflow-hidden w-full max-w-lg aspect-[4/3]">

                        <img
                            src={girl} 
                            alt="Technical Support Team"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
