import { HeaderTab, Project, SocialIcon } from "./types";
import { Github, Linkedin, Mail } from "lucide-react";
import PDFChatImage from "@/assets/images/pdf-chat.png";
import EngioImage from "@/assets/images/engio.png";
import QuickBiteImage from "@/assets/images/quickbite.png";
import WealthWiseImage from "@/assets/images/wealthwise.png";

export const HEADER_TABS: HeaderTab[] = [
  {
    link: "#",
    title: "Home",
  },
  {
    link: "#about",
    title: "About",
  },
  {
    link: "#projects",
    title: "Projects",
  },
  {
    link: "#experience",
    title: "Experience",
  },
  {
    link: "#contact",
    title: "Contact",
  },
];

export const SOCIAL_ICONS: SocialIcon[] = [
  { link: "https://github.com/IvanKorne", icon: Github },
  { link: "https://www.linkedin.com/in/ivan-korneychuk/", icon: Linkedin },
  { link: "mailto:ikorney@uwaterloo.ca", icon: Mail },
];

export const PROJECTS: Project[] = [
  {
    date: "Feb 2024 - Mar 2024",
    title: "AI PDF Summarizer",
    link: "https://pdf-chat-ruby.vercel.app/",
    image: PDFChatImage,
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "DrizzleORM",
      "OpenAI API",
      "Clerk",
    ],
    results: [
      "Utilized OpenAI API to allow users to summarize and ask questions about selected PDFs.",
      "Implemented authentication with Clerk for multi-account support and PDF management.",
      "Integrated DrizzleORM for efficient SQL query and mutation development.",
    ],
  },
  {
    date: "Mar 2024 - Apr 2024",
    title: "NoteVault Saas",
    link: "https://engio.vercel.app/",
    image: EngioImage,
    techStack: [
      "React",
      "TypeScript",
      "Stripe",
      "Supabase",
      "Prisma",
      "Kinde",
      "ShadCn",
      "ContextAPI",
    ],
    results: [
      "Utilized Supabase and Prisma to handle note querying and mutations with scalable data management.",
      "Integrated Stripe for subscription-based payments, including webhook handling for real-time updates.",
      "Implemented Kinde Authentication to support personalized multi-account logins.",
      "Used ContextAPI for theme management and global state handling across components.",
    ],
  },
  {
    date: "Sep 2024 - Oct 2024",
    title: "QuickBite Food Ordering Platform",
    link: "https://github.com/IvanKorne/quick-bite/blob/main/README.md",
    image: QuickBiteImage,
    techStack: [
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Stripe",
      "React Query",
      "Zod",
      "react-router-dom",
    ],
    results: [
      "Developed Express.js API endpoints to interact with MongoDB for order management.",
      "Integrated Stripe payment processing and webhooks for real-time transaction tracking.",
      "Implemented backend filtering, pagination, and sorting with React Query for data retrieval.",
      "Set up Zod schema validation and dynamic routing using react-router-dom.",
    ],
  },
  {
    date: "Oct 2024 - Nov 2024",
    title: "Personal Investment Portfolio",
    link: "https://github.com/IvanKorne/wealth-wise-server",
    image: WealthWiseImage,
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "C#",
      "ASP.NET",
      "JWT",
      "Axios",
    ],
    results: [
      "Optimized data handling in ASP.NET APIs using an interface-repository pattern for scalability.",
      "Implemented JWT-based authorization in C# backend to support multiple clients securely.",
      "Connected to financial modeling APIs via Axios to retrieve real-time stock data.",
    ],
  },
];
