"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Header } from "@/sections/Header/Header";
import { Hero } from "@/sections/Hero/Hero";
import { Projects } from "@/sections/Projects";
import { Tape } from "@/sections/Tape";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Tape />
    </>
  );
}
