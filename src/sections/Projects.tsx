import { Column } from "@/components/layout/Column";
import grainImage from "@/assets/images/grain.jpg";
import { PROJECTS } from "@/lib/consts";
import { CheckCircle } from "lucide-react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Projects = () => {
  return (
    <div className="pb-16 ">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          To look at some more of my projects, come check out my{" "}
          <a
            href="https://github.com/IvanKorne"
            className="text-emerald-300 underline"
          >
            Github.
          </a>
        </p>
        <Column className="mt-10 md:mt-20 gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.link}
              className="bg-gray-800 px-8 pt-8 md:px-12 md:pt-12 lg:pt-16 lg:px-16 rounded-3xl relative z-0 overflow-hidden after:z-10 after:outline-2 after:outline after:rounded-3xl after:outline-white/20 after:-outline-offset-2 after:content-[''] after:absolute after:inset-0 "
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <h3 className="font-serif text-3xl md:text-4xl ">
                {project.title}
              </h3>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <Column className="gap-1 mt-3 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold text-sm tracking-widest text-transparent bg-clip-text">
                    <span>{project.date}</span>
                    <span>{project.techStack.join(" | ")}</span>
                  </Column>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((res) => (
                      <li
                        key={res}
                        className="flex gap-2 text-sm md:text-base text-white/50 -z-10"
                      >
                        <CheckCircle className="size-5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white md:w-auto px-4 text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      View Project
                      <ExternalLink className="size-5" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:bottom-0 lg:h-3/4 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </Column>
      </div>
    </div>
  );
};
