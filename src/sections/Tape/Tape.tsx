import { TAPE_WORDS } from "@/lib/consts";
import StarIcon from "@/assets/icons/star.svg";
import React from "react";
import { Row } from "@/components/layout/Row";

export const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <Row className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Row className="gap-4 flex-none py-3">
            {TAPE_WORDS.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-6" />
              </div>
            ))}
          </Row>
        </Row>
      </div>
    </div>
  );
};
