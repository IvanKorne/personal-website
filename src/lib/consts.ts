import { HeaderTab, SocialIcon } from "./types";
import { Github, Linkedin, Mail } from "lucide-react";

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
