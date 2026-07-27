export interface JobOpening {
    slug: string;
    title: string;
    location: string;
    type: string;
    salary: string;
    extra: string;
}

export const jobOpenings: JobOpening[] = [
    {
        slug: "full-stack-developer",
        title: "Full Stack Developer",
        location: "Bengaluru",
        type: "Full Time",
        salary: "$10K - $18K",
        extra: "No equity",
    },
    {
        slug: "testing-engineer",
        title: "Testing Engineer",
        location: "Remote",
        type: "Full Time",
        salary: "$08K - $10K",
        extra: "No equity",
    },
    {
        slug: "hr-manager",
        title: "Hr Manager",
        location: "Mumbai",
        type: "Fultime",
        salary: "$08K - $10K",
        extra: "4 to 5 Yrs Exp",
    },
    {
        slug: "product-designer",
        title: "Product Designer",
        location: "Mumbai",
        type: "Fultime",
        salary: "$08K - $10K",
        extra: "4 to 5 Yrs Exp",
    },
    {
        slug: "wordpress-developer",
        title: "Wordpress Developer",
        location: "Mumbai",
        type: "Full Time",
        salary: "$08K - $10K",
        extra: "4 to 5 Yrs Exp",
    },
    {
        slug: "jr-qa-tester",
        title: "Jr. QA Tester",
        location: "California, USA",
        type: "Full Time",
        salary: "$14K - $23K",
        extra: "No equity",
    },
    {
        slug: "sr-ux-designer",
        title: "Sr. UX Designer",
        location: "California, USA",
        type: "Full Time",
        salary: "$14K - $23K",
        extra: "No equity",
    },
    {
        slug: "social-media-manager",
        title: "Social Media Manager",
        location: "Kolkata, India",
        type: "Fultime",
        salary: "$5K - $6K",
        extra: "Fresher",
    },
    {
        slug: "golang-developer",
        title: "Golang Developer",
        location: "Mumbai",
        type: "Fultime",
        salary: "$08K - $10K",
        extra: "4 to 5 Yrs Exp",
    },
];

export interface BlogSection {
    type: "paragraph" | "steps";
    heading: string;
    body?: string;
    steps?: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    authorAvatar: string;
    date: string;
    image: string;
    sections: BlogSection[];
}

const genericParagraph =
    'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To create this the code for the UX copies, we at Deta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and catagorised with a voice and tone variation ranging from plain, casual to playful. The intension to build this Figma plugin originated from our Medium blog post, "Designing voice and tone for error messages."';

export const blogPosts: BlogPost[] = [
    {
        slug: "breaking-the-code-figma-plugin",
        title: "Breaking the code How did we build our Figma plugin",
        excerpt:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized, We aim to attain the greatest satisfaction for our clients",
        author: "Andrew Jenson",
        authorAvatar: "/images/avatar-1.jpg",
        date: "Posted on 27th January 2021",
        image: "/images/blog-hero-1.jpg",
        sections: [
            {
                type: "paragraph",
                heading:
                    "Transform Your Idea into Reality with Ether a Leading Digital Agency",
                body: genericParagraph,
            },
            {
                type: "steps",
                heading:
                    "Transform Your Idea into Reality with Ether a Leading Digital Agency",
                steps: [
                    "Download the plugin from Figma community, watch Ghost UXWriter",
                    "Open the plugin on your artboard",
                    "Select the your copy or scroll through the different categories of the copies",
                    "Select the type of error you are looking for. You will get three different copies for each voice",
                    "Tap on the cards to insert text in your format",
                ],
            },
            {
                type: "paragraph",
                heading:
                    "Transform Your Idea into Reality with Ether a Leading Digital Agency",
                body: genericParagraph,
            },
        ],
    },
    {
        slug: "design-trends-2025",
        title: "Today's best design trends for digital products",
        excerpt:
            "A look at the visual and interaction patterns shaping digital products this year.",
        author: "Andrew Jenson",
        authorAvatar: "/images/avatar-1.jpg",
        date: "Posted on 19th January 2021",
        image: "/images/blog-1.jpg",
        sections: [
            {
                type: "paragraph",
                heading: "What's changed this year",
                body: genericParagraph,
            },
        ],
    },
    {
        slug: "brand-strategy-guide",
        title: "A practical guide to building brand strategy",
        excerpt:
            "Practical, step-by-step guidance for teams building a brand strategy from scratch.",
        author: "Andrew Jenson",
        authorAvatar: "/images/avatar-1.jpg",
        date: "Posted on 19th January 2021",
        image: "/images/blog-2.jpg",
        sections: [
            {
                type: "paragraph",
                heading: "Start with the fundamentals",
                body: genericParagraph,
            },
        ],
    },
];