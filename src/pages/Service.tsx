import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProcessSection from "../components/ProcessSection";
import ServiceDetail from "../components/ServiceDetail";
import ServiceDevelopment from "../components/ServiceDevelopment";
import ServiceAwsAzure from "../components/ServiceAwsAzure";
import ServiceConsulting from "../components/ServiceConsulting";
import ServiceIT from "../components/ServiceIT";
import { Shapes } from "../components/Shape";

const servicesList = [
    {
        label: "Technical support",
        to: "/service/technical-support",
        active: false,
    },
    { label: "Development", to: "/service/development", active: true },
    { label: "AWS/Azure", to: "/service/aws-azure", active: false },
    { label: "Consulting", to: "/service/consulting", active: false },
    { label: "Information Technology", to: "/service/it", active: false },
];

export default function ServiceHero() {
    return (
        <div>
            <section className="bg-[#FFEAD8] px-6 py-20 md:px-16 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
                    {/* Chap qism: Matnlar va Tugma */}
                    <div className="lg:col-span-7">
                        {/* Eyebrow */}
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-4">
                            OUR SERVICES
                        </p>

                        {/* Sarlavha */}
                        <h1 className="text-4xl font-extrabold leading-[1.15] text-slate-900 sm:text-5xl lg:text-5xl">
                            We Build Software Solutionthat Solve Clients
                            Business Challenges
                        </h1>

                        {/* Tavsif matni */}
                        <p className="mt-6 text-sm leading-relaxed text-slate-600 max-w-lg">
                            Through True Rich Attended does no end it his mother
                            since favourable real had half every him case in
                            packages enquire we up ecstatic.
                        </p>

                        {/* Request A Quote Tugmasi (Kvadratlar dekoratsiyasi bilan) */}
                        <div className="relative mt-8 inline-block">
                            {/* Chap burchakdagi rangli kvadratlar */}
                            <div
                                className="absolute -left-2 -top-2 z-10 grid grid-cols-2 gap-0.5"
                                aria-hidden="true"
                            ></div>

                            <Link
                                                       to="/contact"
                                                       className="relative flex h-14 items-center gap-2.5 overflow-hidden bg-[#444CFC] pl-10 pr-7 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                                                   >
                                                       <div className="absolute left-0 top-0 pointer-events-none">
                                                           <Shapes size="sm" />
                                                       </div>
                           
                                                       {/* Matn va Strelka */}
                                                       <span className="relative z-10">
                                                           Start a project
                                                       </span>
                                                       <ArrowRight
                                                           className="relative z-10 h-4 w-4"
                                                           aria-hidden="true"
                                                       />
                                                   </Link>
                        </div>
                    </div>

                    {/* O'ng qism: Xizmatlar ro'yxati */}
                    <div className="lg:col-span-5 lg:pl-12">
                        <ul className="space-y-6">
                            {servicesList.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.to}
                                        className={`inline-flex items-center gap-3 text-2xl font-bold transition-colors ${
                                            service.active
                                                ? "text-slate-900"
                                                : "text-slate-700 hover:text-slate-900"
                                        }`}
                                    >
                                        {service.label}
                                        {service.active && (
                                            <ArrowRight className="h-6 w-6 text-slate-900" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <ProcessSection/>
            <ServiceDetail/>
            <ServiceDevelopment/>
            <ServiceAwsAzure/>
            <ServiceConsulting/>
            <ServiceIT/>
        </div>
    );
}
