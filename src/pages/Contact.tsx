
import {
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa";

export default function Contact() {
    return (
        <div className="bg-white px-6 py-16 md:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Form va Ma'lumotlar bloki Grid-i */}
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                    {/* Chap taraf: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="h-4 w-4 bg-amber-300 mb-4" />
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-700">
                            CONTACT US
                        </p>
                        <h1 className="mt-4 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                            Have a Question ? <br /> Let's Get in Touch with us
                            👋
                        </h1>
                        <p className="mt-3 text-xs text-slate-500">
                            Fill up the Form and our team will get back to
                            within 24 hrs
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-10 space-y-6"
                        >
                            <div>
                                <label className="block text-xs font-semibold text-slate-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Paresh Srichandan"
                                    className="mt-2 w-full border-b border-slate-200 pb-3 text-sm font-medium text-slate-900 outline-none focus:border-[#666DFF]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    placeholder="Paresh@pixeto.com"
                                    className="mt-2 w-full border-b border-slate-200 pb-3 text-sm font-medium text-slate-900 outline-none focus:border-[#666DFF]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="For web design work Enquire"
                                    className="mt-2 w-full border-b border-slate-200 pb-3 text-sm font-medium text-slate-900 outline-none focus:border-[#666DFF]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Type your Message"
                                    className="mt-2 w-full resize-none border-b border-slate-200 pb-3 text-sm font-medium text-slate-900 outline-none focus:border-[#666DFF]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-6 inline-flex items-center justify-center bg-[#666DFF] px-8 py-4 text-xs font-bold text-white transition-all hover:bg-blue-700"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>

                    {/* O'ng taraf: Binafsha ma'lumotlar bloki */}
                    <div className="relative bg-[#666DFF] p-8 text-white sm:p-12 lg:col-span-5">
                        {/* Dekorativ rangli chiziqlar */}
                        <div className="absolute -left-3 top-12 h-16 w-3 bg-orange-300" />
                        <div className="absolute -bottom-3 left-0 h-3 w-12 bg-indigo-900" />

                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-medium text-slate-200">
                                    Location
                                </p>
                                <p className="mt-2 text-sm font-bold leading-relaxed">
                                    DLF Cybercity, Bhubaneswar, <br /> India,
                                    &52050
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-slate-200">
                                    Working Hour
                                </p>
                                <p className="mt-2 text-sm font-bold">
                                    Monday To Friday
                                </p>
                                <p className="text-sm font-bold">
                                    9:00 AM to 8:00 PM
                                </p>
                                <p className="mt-1 text-xs text-slate-300">
                                    Our Support Team is available 24Hrs
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-medium text-slate-200">
                                    Contact Us
                                </p>
                                <p className="mt-2 text-sm font-bold">
                                    020 7993 2905
                                </p>
                                <p className="text-xs text-slate-200">
                                    Hello@ether.com
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4 text-white">
                                <a href="#" className="hover:opacity-80">
                                    <FaFacebookF className="h-4 w-4" />
                                </a>
                                <a href="#" className="hover:opacity-80">
                                    <FaTwitter className="h-4 w-4" />
                                </a>
                                <a href="#" className="hover:opacity-80">
                                    <FaInstagram className="h-4 w-4" />
                                </a>
                                <a href="#" className="hover:opacity-80">
                                    <FaLinkedinIn className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Harita Rasmi (Map Image) */}
                <div className="mt-20 overflow-hidden rounded-sm">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                        alt="Location Map"
                        className="h-80 w-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}
