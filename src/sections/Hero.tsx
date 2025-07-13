import React from "react";
import Image from "next/image";
import Headshot from "@/assets/images/headshot.jpeg";
import { ArrowDown } from "lucide-react";
import { Column } from "@/components/layout/Column";

export const Hero = () => {
  return (
    <div className="py-16 md:py-48">
      <div className="container">
        <Column className="items-center">
          <Image
            src={Headshot}
            className="rounded-md"
            alt="Picture of Ivan Korneychuk"
            width={200}
            height={200}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg -mt-4">
            <div className="bg-green-500 size-3 rounded-full"></div>
            <p className="font-medium text-sm">
              Searching for Winter 2026 Co-ops
            </p>
          </div>
        </Column>
        <h1 className="font-serif mt-6 text-3xl md:text-5xl text-center tracking-wide">
          Ivan Korneychuk
        </h1>
        <p className="text-center text-white/60 px-12 mt-4">
          Computer engineering student at the University of Waterloo. Full-stack
          developer, previously interned at <span>Faire</span> and
          <span> Blaise Transit</span>. Always looking for opportunities to
          grow!
        </p>
        <Column className="items-center gap-4 mt-8">
          <button className="inline-flex items-center gap-4 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my page!</span>
            <ArrowDown />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            👋 <span className="font-semibold"> Let&#39;s connect</span>
          </button>
        </Column>
      </div>
    </div>
  );
};
