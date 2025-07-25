"use client";

import { Row } from "@/components/layout/Row";
import { useHash } from "@/hooks/useHash";
import { HEADER_TABS } from "@/lib/consts";
import { HeaderTab } from "@/lib/types";
import React from "react";
import styled from "styled-components";

export const DesktopHeader = () => {
  const hash = useHash();
  return (
    <Row className="justify-center items-center fixed top-3 w-full z-30 ">
      <Row className="gap-1 p-1 border border-white/15 border-full bg-white/15 backdrop-blur rounded-full">
        {HEADER_TABS.map((tab: HeaderTab) => (
          <HeaderItem
            key={tab.title}
            href={tab.link}
            className={` transition duration-300 rounded-full  ${
              hash === tab.link
                ? "bg-white text-gray-900"
                : "hover:bg-white/10 text-white/70 hover:text-white"
            }`}
          >
            {tab.title}
          </HeaderItem>
        ))}
      </Row>
    </Row>
  );
};

const HeaderItem = styled.a`
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 600;
`;
