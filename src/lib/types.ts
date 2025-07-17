import { LucideProps } from "lucide-react";
import { StaticImageData } from "next/image";
import { FC } from "react";

export type HeaderTab = {
  link: string;
  title: string;
};

export type SocialIcon = {
  link: string;
  icon: FC<LucideProps>;
};

export interface IStar {
  starSize: number;
  orbitSize: number;
  rotation: number;
}

export type Project = {
  date: string;
  title: string;
  results: string[];
  techStack: string[];
  link: string;
  image: StaticImageData;
};
