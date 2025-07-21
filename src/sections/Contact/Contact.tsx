import React from "react";
import grainImage from "@/assets/images/grain.jpg";
import { ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <div id="contact" className="md:py-24 py-12 lg:py-30">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row md:gap-24 md:items-center">
            <div>
              <h2 className="text-serif text-2xl font-bold md:text-3xl">
                Let&apos;s Connect
              </h2>
              <p className="text-base mt-2 font-semibold">
                Actively exploring co-op roles for Fall 2025, where I can apply
                my skills and expand them even further.
              </p>
            </div>
            <a
              href="mailto:ikorney@uwaterloo.ca"
              className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 mt-6 md:mt-0 border border-gray-900"
            >
              <span className="font-semibold w-max">Contact Me</span>
              <ExternalLink className="size-4 flex-shrink-0 -mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
