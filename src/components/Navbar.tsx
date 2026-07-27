import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal"; 

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Service", to: "/service" },
    { label: "Company", to: "/company" },
    { label: "Career", to: "/career" },
    { label: "Blog", to: "/blog" },
    { label: "Contact us", to: "/contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { open } = useContactModal(); 

    return (
        <header className="sticky top-0 z-40 bg-navy text-navy-foreground">
            <div className="container flex h-20 items-center justify-between">
                <Link to="/" className="text-xl font-extrabold tracking-tight">
                    {"{"}Finsweet
                </Link>

                <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/"}
                            className={({ isActive }) =>
                                `transition-colors hover:text-white ${
                                    isActive
                                        ? "font-semibold text-white"
                                        : "text-white/50"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}


                    <button
                        type="button"
                        onClick={open}
                        className="flex items-center gap-1.5 text-orange transition-colors hover:text-orange/80 cursor-pointer"
                    >
                        Clone project
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                </nav>

                <button
                    className="lg:hidden"
                    aria-label="Menyuni ochish/yopish"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-nav"
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    {mobileOpen ? (
                        <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            {mobileOpen && (
                <div
                    id="mobile-nav"
                    className="border-t border-white/10 bg-navy px-6 py-6 lg:hidden"
                >
                    <nav className="flex flex-col gap-4 text-sm font-medium">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === "/"}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-semibold text-white"
                                        : "text-white/50"
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <button
                            onClick={() => {
                                setMobileOpen(false);
                                open();
                            }}
                            className="flex items-center gap-1.5 text-orange text-left"
                        >
                            Clone project
                            <ArrowRight
                                className="h-4 w-4"
                                aria-hidden="true"
                            />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
