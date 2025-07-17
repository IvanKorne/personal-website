"use client";

import { Column } from "@/components/layout/Column";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import React from "react";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      <Header />
      <Column className="gap-10">
        <Hero />
        <Projects />
      </Column>
    </>
  );
}
