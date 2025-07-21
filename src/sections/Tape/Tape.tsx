import { TAPE_WORDS } from "@/lib/consts";
import StarIcon from "@/assets/icons/star.svg";
import React from "react";
import { Row } from "@/components/layout/Row";
import { Flex } from "@/components/layout/Flex";

export const Tape = () => {
  return (
    <div className="py-12 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <Row className="mask-fade-x">
          <div className="gap-4 flex flex-none py-3 -translate-x-1/2 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, id) => (
              <div key={id} className="flex items-center gap-6">
                {TAPE_WORDS.map((word) => (
                  <Flex key={word} className="gap-6 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-6" />
                  </Flex>
                ))}
              </div>
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
};
