import React from "react";
import {
    Lightbulb,
    PenTool,
    Code,
    CheckCircle,
    Rocket,
    ShieldCheck,
} from "lucide-react";

interface ProcessStep {
    number: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    showLine?: boolean; // Kartalar orasidagi chiziq uchun
}

const steps: ProcessStep[] = [
    {
        number: "01",
        icon: <Lightbulb className="w-6 h-6 text-slate-800" />,
        title: "Discover",
        description:
            "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        showLine: true,
    },
    {
        number: "02",
        icon: <PenTool className="w-6 h-6 text-slate-800" />,
        title: "Designing",
        description:
            "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        showLine: true,
    },
    {
        number: "03",
        icon: <Code className="w-6 h-6 text-slate-800" />,
        title: "Development",
        description:
            "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        showLine: false,
    },
    {
        number: "04",
        icon: <CheckCircle className="w-6 h-6 text-slate-800" />,
        title: "Testing",
        description:
            "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        showLine: true,
    },
    {
        number: "05",
        icon: <Rocket className="w-6 h-6 text-slate-800" />,
        title: "Deployment",
        description:
            "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        showLine: true,
    },
    {
        number: "06",
        icon: <ShieldCheck className="w-6 h-6 text-slate-800" />,
        title: "Maintenance",
        description:
            "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
        showLine: false,
    },
];

const ProcessCard: React.FC<ProcessStep> = ({
    number,
    icon,
    title,
    description,
    showLine,
}) => {
    // Ba'zi kartalarda pastki/yuqori chiziq rangli, ba'zilarida yo'q.
    const hasBottomBorder = number === "01";
    const hasTopBorder = number === "03" || number === "06";

    return (
        <div className="relative flex-1">
            <div
                className={`bg-white p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md h-full relative z-10 
          ${hasBottomBorder ? "border-b-0" : ""} 
          ${hasTopBorder ? "border-t-0" : ""}`}
            >
                {/* Yuqori o'ng burchakdagi raqam */}
                <span className="absolute top-6 right-8 text-3xl font-extrabold text-slate-200 tracking-tight">
                    {number}
                </span>

                {/* Ikonka orqa foni bilan */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                    {icon}
                </div>

                {/* Sarlavha */}
                <h3 className="mb-3 text-xl font-bold text-slate-900 tracking-tight">
                    {title}
                </h3>

                {/* Tavsif */}
                <p className="text-sm leading-relaxed text-slate-500 max-w-[240px]">
                    {/* {service.description} */}
                </p>

                Dekorativ rangli pastki chiziq (faqat 01 uchun)
                {hasBottomBorder && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                        <div className="flex-1 bg-orange-400"></div>
                        <div className="flex-1 bg-amber-200"></div>
                        <div className="flex-1 bg-indigo-600"></div>
                    </div>
                )}

                Dekorativ rangli yuqori chiziq (03 va 06 uchun)
                {hasTopBorder && (
                    <div className="absolute top-0 left-0 right-0 h-1 flex">
                        <div className="flex-1 bg-orange-400"></div>
                        <div className="flex-1 bg-amber-200"></div>
                        <div className="flex-1 bg-indigo-600"></div>
                    </div>
                )}
            </div>

            {/* Kartalar orasidagi gorizontal nuqtali chiziq (desktopda) */}
            {showLine && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dotted border-slate-200 z-0 transform -translate-y-1/2"></div>
            )}
        </div>
    );
};

export default function ProcessSection() {
    // Kartalarni ikki qatorga bo'lish
    const firstRow = steps.slice(0, 3);
    const secondRow = steps.slice(3, 6);

    return (
        <section className="bg-white px-6 py-20 md:px-16 lg:py-24 font-sans">
            <div className="mx-auto max-w-7xl">
                {/* Yuqori matn qismi */}
                <div className="max-w-xl mb-16 relative">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-5">
                        Our Process
                    </p>

                    <h2 className="text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-5xl tracking-tighter mb-6">
                        The process we are working With Our client Worldwide
                    </h2>

                    <p className="text-base leading-relaxed text-slate-600 max-w-lg">
                        Through True Rich Attended does no end it his mother
                        since real had half every him case in packages enquire
                        we up ecstatic unsatiable.
                    </p>

                    {/* O'ng yuqoridagi kichik rangli logo dekoratsiyasi */}
                    <div
                        className="absolute top-0 right-0 lg:-right-24 grid grid-cols-2 gap-0.5 opacity-80"
                        aria-hidden="true"
                    >

                    </div>
                </div>

                {/* Jarayonlar panjarasi (Grid) */}
                <div className="grid gap-y-12 gap-x-8">
                    {/* Birinchi qator */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
                        {firstRow.map((step) => (
                            <ProcessCard key={step.number} {...step} />
                        ))}
                    </div>

                    {/* Ikkinchi qator */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
                        {secondRow.map((step) => (
                            <ProcessCard key={step.number} {...step} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}