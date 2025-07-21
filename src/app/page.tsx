"use client";

import { About } from "@/sections/About/About";
import { Contact } from "@/sections/Contact/Contact";
import { Experience } from "@/sections/Experience/Experience";
import { Footer } from "@/sections/Footer/Footer";
import { Header } from "@/sections/Header/Header";
import { Hero } from "@/sections/Hero/Hero";
import { Projects } from "@/sections/Projects/Projects";
import { Tape } from "@/sections/Tape/Tape";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
