"use client";

import { HEADER_TABS } from "@/lib/consts";
import { HeaderTab } from "@/lib/types";
import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 ">
      <nav className="flex gap-1 p-1 border border-white/15 border-full bg-white/10 backdrop-blur rounded-full">
        {HEADER_TABS.map((tab: HeaderTab) => (
          <HeaderItem
            key={tab.title}
            href={tab.link}
            className="hover:bg-white/10 hover:text-white transition duration-300 rounded-full text-white/70"
          >
            {tab.title}
          </HeaderItem>
        ))}
      </nav>
    </div>
  );
};

const HeaderItem = styled.a`
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 600;
`;
