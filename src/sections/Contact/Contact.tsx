"use client";
import React from "react";
import grainImage from "@/assets/images/grain.jpg";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div id="contact" className="md:py-24 py-12 lg:py-30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden"
        >
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
                Actively exploring co-op roles for Winter 2026, where I can
                apply my skills and expand them even further.
              </p>
            </div>

            <motion.a
              href="mailto:ikorney@uwaterloo.ca"
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              variants={{
                rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                hover: {
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
                  backgroundColor: "#141626",
                },
                tap: { scale: 0.95 },
              }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 mt-6 md:mt-0 border border-gray-900"
            >
              <span className="font-semibold w-max">Contact Me</span>

              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4 },
                  tap: { x: 2 },
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ExternalLink className="size-4 flex-shrink-0 -mt-1" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
