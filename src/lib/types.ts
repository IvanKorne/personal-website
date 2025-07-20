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

export type Expereince = {
  company_name: string;
  position: string;
  location: string;
  date: string;
  logo: StaticImageData;
  results: string[];
};

export type Tool = {
  title: string;
  icon: React.ElementType;
};

export type Interest = {
  name: string;
  icon: string;
  alignment: {
    left: string;
    top: string;
  };
};

export interface ICardHeader {
  title: string;
  description: string;
  className?: string;
}

export interface IGradientText {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}
