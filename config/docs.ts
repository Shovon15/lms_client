// import { MainNavItem, SidebarNavItem } from "types/nav"
type MainNavItem = {
    title: string;
    href: string;
    external?: boolean,
}

interface Items {
    title: string,
    href: string,
    disabled?: boolean;
    items: Items[],
}

interface SidebarNavItem {
    title: string;
    items: Items[];
}

interface DocsConfig {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs",
        },
        {
            title: "Components",
            href: "/docs/components/accordion",
        },
        {
            title: "Themes",
            href: "/themes",
        },
        {
            title: "Examples",
            href: "/examples",
        },
        {
            title: "Figma",
            href: "/docs/figma",
        },
        {
            title: "GitHub",
            href: "https://github.com/shadcn/ui",
            external: true,
        },
        {
            title: "Twitter",
            href: "https://twitter.com/shadcn",
            external: true,
        },
    ],
    sidebarNav: [
        {
            title: "Students",
            items: [
                {
                    title: "Students",
                    href: "/students",
                    items: [],
                },
                {
                    title: "Applying Student",
                    href: "/students/apply-student",
                    items: [],
                },
                {
                    title: "Summary",
                    href: "/students/summary",
                    items: [],
                },
                {
                    title: "Details",
                    href: "/students/details",
                    disabled: true,
                    items: [],
                },
            ],
        },
        {
            title: "Teachers & Staffs",
            items: [
                {
                    title: "Teachers",
                    href: "/teachers",
                    items: [],
                },
                {
                    title: "Registration",
                    href: "/teachers/teacher-registration",
                    items: [],
                },
                {
                    title: "Staff",
                    href: "/staffs",
                    items: [],
                },
                {
                    title: "Add Staff",
                    href: "/staffs/staff-registration",
                    items: [],
                },
            ],
        },
        {
            title: "Students Attendance",
            items: [
                {
                    title: "Class Attendance",
                    href: "/",
                    disabled: true,
                    items: [],
                },
                {
                    title: "Exam Attendance",
                    href: "/nothing",
                    disabled: true,
                    items: [],
                },
            ],
        },

    ],
}
