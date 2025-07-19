import { EXPERIENCES } from "@/lib/consts";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import grainImage from "@/assets/images/grain.jpg";

export const Experience = () => {
  return (
    <div className="py-16">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center">
          Experiences
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          My coding journey so far...
        </p>
        <div>
          {EXPERIENCES.map((experience) => (
            <div
              key={experience.company_name}
              className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <Image
                src={experience.logo}
                alt={`${experience.company_name} logo`}
              />
              <div>{experience.position}</div>
              <div>{experience.company_name}</div>
              <div>{experience.location}</div>
              <div>{experience.date}</div>
              <ul>
                {experience.results.map((res) => (
                  <li
                    key={res}
                    className="flex gap-2 text-sm md:text-base text-white/50 -z-10"
                  >
                    <Dot className="size-5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
