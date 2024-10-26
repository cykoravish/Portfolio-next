import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Image Compressor",
    href: "/projects",
    tags: ["Node.js", "Express.js", "Sharp", "Multer", "Render", "MongoDB"],
    image: {
      LIGHT: "/images/projects/imageFront.webp",
      DARK: "/images/projects/imageFront.webp",
    },
  },
  {
    index: 2,
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
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Image Compressor",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/imageFront.webp"],
    description:
      "Developed a high-performance asynchronous image processing pipeline which can handle up 1000+ images per day. Architected the robust system using Node.js, Express.js & MongoDB ensuring 99.9% uptime with built-in Retry and Error-handling mechanisms.  Reduced image storage costs by 50% by implementing real-time image compression using Sharp, integrating withCloudinary for scalable storage. Optimized CSV data processing, achieving a 70% improvement in processing speed throughconcurrent workers and parallel execution.Deployed the system on AWS , ensuring scalability and high availability, leading to a 30% increase in processing capacity",
    sourceCodeHref: "https://github.com/awesome-pro/node-backend",
    liveWebsiteHref:
      "https://www.postman.com/abhinandan-verma/workspace/pro-developers/request/31971900-e113e5e6-4550-45c1-a85e-9fae331cbba1",
  },
  {
    name: "Impakter",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/impakter.webp"],
    description:
      "Developed  the front-end of sustainablilty Index platform using Next.js, Tailwind CSS, Slider, TypeScript and Framer Motion. Implemented the design system using Tailwind CSS, achieving a 50% reduction in CSS code. Integrated the platform with the backend using REST APIs, ensuring real-time data updates. Optimized the platform for mobile devices, achieving a 90% improvement in performance. Deployed the platform on Vercel, ensuring scalability and high availability, leading to a 30% increase in user engagement.",
    sourceCodeHref: "https://github.com/awesome-pro/impakter",
  },
  {
    name: "Aayush",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/aayush.webp"],
    description:
      "Developed an OPD Queue Management system for a hospital using Next.js, Tailwind CSS, Shadcn-UI, Redis & RabbitMQ. Implemented the system for 100+ users, ensuring real-time updates and high availability. Optimized the system for mobile devices, achieving a 90% improvement in performance. Deployed the system on Vercel AWS, ensuring scalability and high availability, leading to a 30% increase in user engagement.",
    sourceCodeHref: "https://github.com/awesome-pro/aayush/blob/main/README.md",
    liveWebsiteHref:
      "https://github.com/awesome-pro/aayush/blob/main/README.md",
  },
  {
    name: "SBI Finance",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/financeHero.webp",
      "/images/projects/financeSignIn.webp",
      "/images/projects/financeTrans.png",
      "/images/projects/financeGraph.webp",
    ],
    description:
      "A finance management app where user can add, delete, update and view their transactions. It also has a feature to view the summary of all transactions. It uses Nextjs, Tailwindcss, PostgreSQL, HonoJS, Vercel and Drizzle.",
    sourceCodeHref: "https://github.com/awesome-pro/finance",
    liveWebsiteHref: "https://finance-eight-self.vercel.app/",
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
    sourceCodeHref: "https://github.com/awesome-pro/aarogya_ai",
    liveWebsiteHref: "https://github.com/awesome-pro/aarogya_ai",
  },
  {
    name: "Emailer AI",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/comingSoon.png"],
    description:
      "Gmail API integration to send emails to multiple users. It uses Node.js with TypeScript &  Gmail API.",
    sourceCodeHref: "https://github.com/awesome-pro/emailer",
    liveWebsiteHref: "https://github.com/awesome-pro/emailer",
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
