export type DockApp = {
    id: string;
    name: string;
    icon: string;
    canOpen: boolean;
};

const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps: DockApp[] = [
    {
        id: "finder",
        name: "Portfolio",
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles",
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery",
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact",
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills",
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive",
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Angular", "Redux Toolkit", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Material UI", "Bootstrap", "Sass", "SCSS", "Prime NG"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express"],
    },
    {
        category: "Design",
        items: ["Figma", "Adobe Photoshop", "UI Design"],
    },
    {
        category: "Tools & Methods",
        items: ["Git", "GitHub", "Agile", "User-Centered Design"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/KRISH826",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/krishnendu-panja-40a2a4198/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/KrishnenduKP16",
    },
    {
        id: 4,
        text: "Email",
        icon: "/icons/email.svg",
        bg: "#ea4335",
        link: "mailto:krishnendupanja98@gmail.com",
    },
    {
        id: 5,
        text: "Phone",
        icon: "/icons/call.svg",
        bg: "#34a853",
        link: "tel:6291697588",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "ClassPoint.App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Project Details.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Led UI/UX design and development for ClassPoint.app, an EdTech learning platform for educators and students.",
                        "Designed and developed a highly engaging, animated learning interface using React, Material UI, and custom SCSS frameworks.",
                        "Implemented dynamic, real-time interaction features, reducing new educator onboarding time by 25%.",
                    ],
                },
                {
                    id: 2,
                    name: "classpoint.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://classpoint.app",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/classpoint.png",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "FCA.ORG.UK",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Project Details.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Directed UI/UX design and frontend development for high-traffic, mission-critical sections of the Financial Conduct Authority’s public website.",
                        "Ensured full WCAG 2.1 accessibility compliance, exceptional clarity, and alignment with stringent public sector design and technical standards.",
                        "Engineered custom frontend framework using SCSS within Angular, streamlining development workflows and improving maintainability.",
                    ],
                },
                {
                    id: 2,
                    name: "fca.org.uk",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://www.fca.org.uk",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/fca-project.png",
                }
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Finreg-E.com",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Project Details.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Oversaw comprehensive, platform-wide UI/UX redesign and UI development for Finreg-e.com, a leading financial regulatory compliance platform.",
                        "Engineered sophisticated RIG module using Angular, Material UI, and SCSS, significantly improving user efficiency and complex data navigation capabilities.",
                        "Implemented component-based architecture enabling scalable frontend development.",
                        "Enhanced data visualization and reporting features for compliance professionals.",
                    ],
                },
                {
                    id: 2,
                    name: "finreg-e.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://finreg-e.com",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/finreg-e.png",
                }
            ],
        },
        // project 4
        {
            id: 8,
            name: "Studio Pod",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Project Details.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A professional web application for creating corporate headshots, built with React, Material UI, SCSS, and Redux for a seamless user experience.",
                        "Developed responsive and interactive user interfaces using React, Material UI, and SCSS, ensuring consistency across devices.",
                        "Implemented state management with Redux to handle dynamic photo sessions and booking workflows efficiently.",
                        "Built reusable components and design systems to maintain scalability and speed up development.",
                        "Enhanced performance and UX through optimized rendering, dynamic previews, and smooth interactive features.",
                    ],
                },
                {
                    id: 2,
                    name: "studio-pod.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://www.thestudiopod.com/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/studio-pod.png",
                }
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/adrian.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/adrian-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/adrian-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "UI Developer & Frontend Engineer",
            image: "/images/adrian.jpg",
            description: [
                "UI Developer and Frontend Engineer with 5+ years of experience designing high-performance, scalable interfaces using React, Angular, and Next.js.",
                "Skilled in TypeScript and CSS frameworks such as Tailwind CSS and Material UI, with expertise in component-driven architecture and responsive design.",
                "Proven ability to optimize user experiences, streamline development cycles, and collaborate effectively with cross-functional teams to deliver robust frontend solutions.",
                ""
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // href: "/resume.pdf", 
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export interface LocationItem {
    id: number;
    type?: string;
    name: string;
    icon: string;
    kind: string;
    children?: LocationItem[];
    position?: string;
    windowPosition?: string;
    fileType?: string;
    href?: string;
    imageUrl?: string;
    image?: string;
    subtitle?: string;
    description?: string[];
}

export const locations: Record<string, LocationItem> = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };