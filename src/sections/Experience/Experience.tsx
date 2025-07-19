import { EXPERIENCES } from "@/lib/consts";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/Card";

export const Experience = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center">
          Experiences
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          My coding journey so far...
        </p>
        <div className="mt-12 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {EXPERIENCES.map((experience) => (
              <Card
                key={experience.company_name}
                className="max-w-sm md:max-w-2xl md:p-8"
              >
                <div className="gap-6 items-center flex">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company_name} logo`}
                    className="rounded-full size-14"
                  />
                  <div className="md:justify-between flex w-full flex-col md:flex-row gap-2">
                    <div>
                      <p className="font-semibold text-xl">
                        {experience.position}
                      </p>
                      <p className="font-medium text-lg">
                        {experience.company_name}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-base">
                        {experience.location}
                      </p>
                      <p className=" text-white/40 text-base">
                        {experience.date}
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mt-6">
                  {experience.results.map((res) => (
                    <li
                      key={res}
                      className="flex gap-2 text-sm md:text-base text-white/50 -z-10 mt-2 items-center"
                    >
                      <Dot className="size-8" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
