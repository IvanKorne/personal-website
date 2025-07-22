"use client";

import { Column } from "@/components/layout/Column";
import { PROJECTS } from "@/lib/consts";
import { CheckCircle } from "lucide-react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card } from "@/components/Card/Card";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="py-16" id="projects">
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
          {PROJECTS.map((project, i) => (
            <Card
              className="px-8 pt-8 md:px-12 md:pt-12 lg:pt-16 lg:px-16 pb-0 sticky"
              key={project.title}
              style={{
                top: `calc(64px + ${i * 10}px`,
              }}
            >
              <h3 className="font-serif text-3xl md:text-4xl ">
                {project.title}
              </h3>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <Column className="gap-1 mt-3 bg-gradient-to-r from-emerald-300 to-sky-400  font-bold text-sm tracking-widest text-transparent bg-clip-text">
                    <span>{project.date}</span>
                    <span>{project.techStack.join(" | ")}</span>
                  </Column>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((res) => (
                      <li
                        key={res}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircle className="size-5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white md:w-auto px-4 text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 relative z-50"
                  >
                    View Project
                    <ExternalLink className="size-5 -mt-1" />
                  </motion.a>
                </div>
                <div className="relative z-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:bottom-0 lg:h-3/4 lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </Column>
      </div>
    </div>
  );
};
