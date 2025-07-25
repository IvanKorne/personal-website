import { EXPERIENCES } from "@/lib/consts";
import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/Card/Card";
import { Row } from "@/components/layout/Row";

export const Experience = () => {
  return (
    <div className="py-12 md:py-24" id="experience">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center">
          Experiences
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          My coding journey so far
        </p>
        <Row className="mt-12 overflow-x-clip mask-fade-x py-4 -my-4">
          <Row className="gap-8 flex-none pr-8 animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, arrayIndex) => (
              <React.Fragment key={arrayIndex}>
                {EXPERIENCES.map((experience, expIndex) => (
                  <Card
                    key={`${arrayIndex}-${experience.company_name}-${expIndex}`}
                    className="max-w-sm md:max-w-2xl p-6 md:p-8 hover:-rotate-3 transition duration-300 flex-shrink-0"
                  >
                    <Row className="gap-6 items-center">
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
                    </Row>
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
              </React.Fragment>
            ))}
          </Row>
        </Row>
      </div>
    </div>
  );
};
