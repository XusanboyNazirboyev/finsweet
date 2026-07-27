export function PrivacyPolicy() {
    return (
        <div>
            <section className="container py-16">
                <h1 className="text-5xl font-extrabold text-navy sm:text-6xl">
                    Privacy Policy
                </h1>

                <p className="mt-4 text-lg text-muted-foreground">
                    Last Updated on 27th January 2024
                </p>
                <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-mint p-8 sm:p-16 ">
                    <h2 className="text-4xl font-extrabold leading-tight text-navy">
                        Transform Your Idea Into Reality with Either a Leading
                        Digital Agency
                    </h2>
                    {[
                        "Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right words. To crack the code for the UX copies, we want to build a Figma plugin for the larger design community.",
                        "We collect information that you provide directly to us when you contact our team, subscribe to updates or use our services. We use this information to provide, understand and improve our services.",
                        "We may share information with trusted service providers who help us operate our business. We do not sell your personal information to third parties.",
                        "We disclose your information in the following manner: business partners, suppliers and sub-contractors may use this information to help provide, understand and improve our services.",
                        "You can contact us at any time to access, update or delete your personal information. We take reasonable measures to protect the information entrusted to us.",
                    ].map((text, i) =>
                        i === 3 ? (
                            <h3
                                key={text}
                                className="mt-10 text-3xl font-bold text-navy"
                            >
                                We disclose your information in the following
                                manner:
                            </h3>
                        ) : (
                            <p
                                key={text}
                                className="mt-6 text-lg leading-9 text-muted-foreground"
                            >
                                {text}
                            </p>
                        ),
                    )}
                </div>
            </section>
        </div>
    );
}
