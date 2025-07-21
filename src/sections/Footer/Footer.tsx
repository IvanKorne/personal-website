import { FOOTER_LINKS } from "@/lib/consts";
import { ExternalLink } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip pt-8">
      <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <p className="text-white/40">
            &copy; 2025 | Created By Ivan Korneychuk
          </p>
          <nav className="flex flex-col md:flex-row gap-8 items-center">
            {FOOTER_LINKS.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ExternalLink className="size-4 -mt-1" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
