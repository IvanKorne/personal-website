"use client";

import { Column } from "@/components/layout/Column";
import { Spacer } from "@/components/layout/Spacer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import React from "react";

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      <Header />
      <Spacer height={isMobile ? 50 : 150} />
      <Column className="gap-10">
        <Hero />
      </Column>
    </>
  );
}
