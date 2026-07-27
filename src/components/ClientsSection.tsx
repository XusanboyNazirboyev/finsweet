import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
    { value: "1560+", label: "Project Delivered" },
    { value: "100+", label: "Professional" },
    { value: "950+", label: "Happy Client" },
    { value: "10 yrs", label: "Experience" },
];
import conference1 from "../assets/Image 1-2.svg"
import conference2 from "../assets/Image 2-2.svg"
import conference3 from "../assets/Image 3-2.svg";
const galleryImages = [
    {
        src: conference1,
        alt: "Katta konferensiya xonasida yig'ilish",
    },
    { src: conference2, alt: "Ekran atrofida muhokama" },
    { src: conference3, alt: "Ofisda jamoa suhbati" },
];

export default function ClientsSection() {
    return (
        <section className="container py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        About Us
                    </p>
                    <h2 className="text-3xl font-extrabold leading-snug text-navy sm:text-4xl">
                        The company leads entire webdesign process from concept
                        to delivery.
                    </h2>
                </div>
                <div>
                    <h3 className="text-2xl font-extrabold text-navy">
                        The Era Of Technology.
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                        Through True Rich Attended does no end it his mother
                        since real had half every him case in packages enquire
                        we up ecstatic unsatiable saw his giving Remain expense
                        you position concluded.
                    </p>
                </div>
            </div>

           
<div className="mt-10 grid gap-4 sm:grid-cols-3">
    {galleryImages.map((image, index) => (
        <div key={index} className="relative aspect-[4/3]">
            <div className="h-full w-full overflow-hidden rounded-md">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                />
            </div>
            {index === 2 && (
                <>
                    <span
                        className="absolute -right-4 top-0 h-1/2 w-4 bg-orange"
                        aria-hidden="true"
                    />
                    <span
                        className="absolute -right-4 bottom-0 h-1/2 w-4 bg-primary"
                        aria-hidden="true"
                    />
                </>
            )}
        </div>
    ))}
</div>

            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-2xl font-extrabold text-navy sm:text-3xl">
                                {stat.value}
                            </p>
                            <div className="mt-2 flex h-1 w-16 overflow-hidden rounded-full">
                                <span className="w-1/2 bg-primary" />
                                <span className="w-1/2 bg-orange" />
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <Link
                    to="/company"
                    className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary sm:mt-1"
                >
                    Read about us
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
