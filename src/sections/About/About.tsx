"use client";

import { Card } from "@/components/Card/Card";
import React, { useRef } from "react";
import { INTERESTS } from "@/lib/consts";
import { CardHeader } from "@/components/Card/CardHeader";
import { ToolkitItems } from "./ToolkitItems";
import { Column } from "@/components/layout/Column";
import { GradientText } from "@/components/GradientText";
import { Grid } from "@/components/layout/Grid";
import { motion } from "framer-motion";

export const About = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-12">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-5xl text-center">
          About Me
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          A look into my skills and passions
        </p>
        <Column className="mt-16 gap-6">
          <Card className="h-[320px]">
            <CardHeader
              title="My Toolkit"
              description="Explore the languages, frameworks, and libraries that I use!"
            />
            <ToolkitItems innerClassName="animate-move-left [animation-duration:50s]" />
            <ToolkitItems
              className="mt-6"
              innerClassName="-translate-x-1/2 animate-move-right [animation-duration:50s]"
            />
          </Card>
          <Grid className="grid-cols-1 md:grid-cols-2 gap-8 ">
            <Card className="h-[450px] flex flex-col md:col-span-1">
              <CardHeader
                title="My Interests"
                description="These are my interests in and outside of the coding space!"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {INTERESTS.map((interest) => (
                  <motion.div
                    drag={true}
                    key={interest.name}
                    className="gap-2 z-30 inline-flex px-5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute items-center cursor-grab active:cursor-grabbing"
                    style={{
                      left: interest.alignment.left,
                      top: interest.alignment.top,
                    }}
                    dragConstraints={constraintRef}
                  >
                    <span className="text-base text-gray-950 pointer-events-none">
                      {interest.name}
                    </span>
                    <span className="pointer-events-none">{interest.icon}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[480px] md:h-[450px] md:col-span-1">
              <CardHeader title="Who I Am" description="Learn more about me!" />
              <Column className="gap-2 px-6">
                <motion.p
                  className="font-semibold text-base"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  I&apos;m 20 years old, studying Computer Engineering at the{" "}
                  <GradientText>University of Waterloo</GradientText>.
                </motion.p>
                <motion.p
                  className="font-semibold text-base"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  I&apos;m currently working at{" "}
                  <GradientText>Faire</GradientText> as a Frontend Engineering
                  intern.
                </motion.p>
                <motion.p
                  className="font-semibold text-base"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  My main focus right now is deepening my understanding of{" "}
                  <GradientText>System Architecture</GradientText> and exploring
                  backend-oriented Java frameworks such as{" "}
                  <GradientText>SpringBoot</GradientText> and{" "}
                  <GradientText>Kotlin</GradientText>.
                </motion.p>
                <motion.p
                  className="font-semibold text-base"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  My motto is always to try to improve yourself with each
                  passing day 😊!
                </motion.p>
              </Column>
            </Card>
          </Grid>
        </Column>
      </div>
    </div>
  );
};
