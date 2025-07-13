import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { IStar } from "@/lib/types";
import { Orbit } from "@/components/Orbit";

export const Stars = () => {
  return (
    <>
      <Star orbitSize={750} rotation={-75} starSize={112} />
      <Star orbitSize={550} rotation={20} starSize={48} />
      <Star orbitSize={590} rotation={100} starSize={32} />
      <Sparkle orbitSize={430} rotation={-15} starSize={32} />
      <Sparkle orbitSize={440} rotation={90} starSize={20} />
      <Sparkle orbitSize={530} rotation={180} starSize={40} />
      <Sparkle orbitSize={710} rotation={140} starSize={56} />
      <Circle orbitSize={720} rotation={85} starSize={12} />
      <Circle orbitSize={520} rotation={-40} starSize={12} />
      <Circle orbitSize={650} rotation={-10} starSize={8} />
    </>
  );
};

const Star = ({ starSize, orbitSize, rotation }: IStar) => {
  return (
    <Orbit size={orbitSize} rotation={rotation}>
      <StarIcon
        className="text-emerald-300"
        style={{
          height: `${starSize}px`,
          width: `${starSize}px`,
        }}
      />
    </Orbit>
  );
};

const Sparkle = ({ starSize, orbitSize, rotation }: IStar) => {
  return (
    <Orbit size={orbitSize} rotation={rotation}>
      <SparkleIcon
        className="text-emerald-300/20"
        style={{
          height: `${starSize}px`,
          width: `${starSize}px`,
        }}
      />
    </Orbit>
  );
};

const Circle = ({ starSize, orbitSize, rotation }: IStar) => {
  return (
    <Orbit size={orbitSize} rotation={rotation}>
      <div
        className="bg-emerald-300/20 rounded-full"
        style={{
          height: `${starSize}px`,
          width: `${starSize}px`,
        }}
      ></div>
    </Orbit>
  );
};
