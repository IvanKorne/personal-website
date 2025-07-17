import React from "react";
import Image from "next/image";
import Headshot from "@/assets/images/headshot.jpeg";
import { ArrowDown } from "lucide-react";
import { Column } from "@/components/layout/Column";
import grainImage from "@/assets/images/grain.jpg";
import { Rings } from "./Rings";
import { Stars } from "./Stars";

export const Hero = () => {
  return (
    <div className="py-12 md:py-32 lg:py-40 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src}` }}
        ></div>
        <Rings />
        <Stars />
      </div>
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
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif mt-6 text-3xl md:text-5xl text-center tracking-wide">
            Ivan Korneychuk
          </h1>
          <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl">
            Computer engineering student at the University of Waterloo.
            Full-stack developer, previously interned at <span>Faire</span> and
            <span> Blaise Transit</span>. Always looking for opportunities to
            grow!
          </p>
        </div>
        <div className="items-center gap-4 mt-8 flex flex-col md:flex-row justify-center">
          <button className="inline-flex items-center gap-4 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my page!</span>
            <ArrowDown />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            👋 <span className="font-semibold"> Let&#39;s connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
