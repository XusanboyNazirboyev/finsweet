import PC from "../assets/Image-6.svg";

export default function ServiceAwsAzure() {
    return (
        <section className="bg-white px-6 py-20 md:px-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">

                <div className="lg:col-span-6">

                    <p className="text-sm font-bold text-slate-900 mb-4 tracking-wide">
                        AWS/Azure
                    </p>


                    <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        We help you deploy, manage and secure your application
                        on leading web services
                    </h2>

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
                        {/* 

            */}
                        <img
                            src={PC}
                            alt="AWS and Azure Cloud Setup Workspace"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
