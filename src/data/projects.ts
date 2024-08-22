import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "SBI Finance",
    href: "/projects",
    tags: [
      "Nextjs",
      "Tailwindcss",
      "PostgreSQL",
      "HonoJS",
      "Vercel",
      "Drizzle",
    ],
    image: {
      LIGHT: "/images/projects/financeHero.webp",
      DARK: "/images/projects/financeHero.webp",
    },
  },
  {
    index: 1,
    title: "Aarogya AI",
    href: "/projects",
    tags: [
      "Next.js",
      "Tailwindcss",
      "MongoDB",
      "mongoose",
      "Vercel",
      "Tensorflow",
      "Python",
      "Flask",
      "Docker",
    ],
    image: {
      LIGHT: "/images/projects/aarogyaFront.webp",
      DARK: "/images/projects/aarogyaFront.webp",
    },
  },
  {
    index: 2,
    title: "AI Emailer",
    href: "/projects",
    tags: [
      "Next.js",
      "Tailwindcss",
      "TypeScript",
      "MySQL",
      "Vercel",
      "Redis",
      "BullMQ",
      "Nodemailer",
      "Gmail API",
      "Node.js",
    ],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "SBI Finance",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/financeHero.webp",
      "/images/projects/financeSignIn.webp",
      "/images/projects/financeTrans.png",
      "/images/projects/financeGraph.webp",
    ],
    description:
      "A finance management app where user can add, delete, update and view their transactions. It also has a feature to view the summary of all transactions. It uses Nextjs, Tailwindcss, PostgreSQL, HonoJS, Vercel and Drizzle.",
    sourceCodeHref: "https://github.com/awesome-pro/finance",
    liveWebsiteHref: "https://finance-seven-psi.vercel.app/",
  },
  {
    name: "Aarogya AI",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/aarogyaFront.webp",
      "/images/projects/aarogyaSignIn.webp",
      "/images/projects/aarogyaApp.webp",
      "/images/projects/aarogyaChat.webp",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/awesome-pro/kanban",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    name: "Emailer AI",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/comingSoon.png"],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/awesome-pro/ManyGames",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portDark.png",
      "/images/projects/portLight.png",
      "/images/projects/portAbout.png",
      "/images/projects/portContact.png",
    ],
    description:
      "My personal portfolio website made using Nextjs 13, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/awesome-pro/port",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
