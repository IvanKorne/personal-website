import { LucideProps } from "lucide-react";
import { FC } from "react";

export type HeaderTab = {
  link: string;
  title: string;
};

export type SocialIcon = {
  link: string;
  icon: FC<LucideProps>;
};
