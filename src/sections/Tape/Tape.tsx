import { TAPE_WORDS } from "@/lib/consts";
import StarIcon from "@/assets/icons/star.svg";
import React from "react";
import { Row } from "@/components/layout/Row";
import { Flex } from "@/components/layout/Flex";

export const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <Row className="mask-fade-x">
          <Row className="gap-4 flex-none py-3">
            {TAPE_WORDS.map((word) => (
              <Flex key={word} className="gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-6" />
              </Flex>
            ))}
          </Row>
        </Row>
      </div>
    </div>
  );
};
