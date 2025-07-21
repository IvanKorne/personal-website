import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { IStar } from "@/lib/types";
import { Orbit } from "@/components/Orbit";

export const Stars = () => {
  return (
    <>
      <Star
        size={750}
        rotation={-75}
        starSize={112}
        orbitDuration={15}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={20}
      />
      <Star
        size={550}
        rotation={20}
        starSize={48}
        orbitDuration={8}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Star
        size={590}
        rotation={100}
        starSize={32}
        orbitDuration={12}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={25}
      />
      <Star
        size={600}
        rotation={-10}
        starSize={88}
        orbitDuration={18}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Star
        size={620}
        rotation={-135}
        starSize={56}
        orbitDuration={10}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={18}
      />
      <Star
        size={480}
        rotation={165}
        starSize={40}
        orbitDuration={6}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Sparkle
        size={430}
        rotation={-15}
        starSize={32}
        orbitDuration={14}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={22}
      />
      <Sparkle
        size={440}
        rotation={90}
        starSize={20}
        orbitDuration={7}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Sparkle
        size={530}
        rotation={180}
        starSize={40}
        orbitDuration={16}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={28}
      />
      <Sparkle
        size={710}
        rotation={140}
        starSize={56}
        orbitDuration={20}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Sparkle
        size={380}
        rotation={60}
        starSize={28}
        orbitDuration={9}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={15}
      />
      <Sparkle
        size={600}
        rotation={-45}
        starSize={24}
        orbitDuration={11}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Sparkle
        size={760}
        rotation={210}
        starSize={44}
        orbitDuration={17}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={30}
      />
      <Sparkle
        size={500}
        rotation={-90}
        starSize={36}
        orbitDuration={13}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Circle
        size={720}
        rotation={85}
        starSize={12}
        orbitDuration={19}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={16}
      />
      <Circle
        size={520}
        rotation={-40}
        starSize={12}
        orbitDuration={5}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Circle
        size={650}
        rotation={-10}
        starSize={8}
        orbitDuration={8}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={24}
      />
      <Circle
        size={580}
        rotation={120}
        starSize={10}
        orbitDuration={14}
        shouldOrbit={true}
        shouldSpin={false}
      />
      <Circle
        size={700}
        rotation={-120}
        starSize={14}
        orbitDuration={11}
        shouldOrbit={true}
        shouldSpin={true}
        spinDuration={19}
      />
      <Circle
        size={460}
        rotation={200}
        starSize={6}
        orbitDuration={7}
        shouldOrbit={true}
        shouldSpin={false}
      />
    </>
  );
};

const Star = ({
  starSize,
  size,
  rotation,
  orbitDuration,
  shouldOrbit,
  shouldSpin,
  spinDuration,
}: IStar) => {
  return (
    <Orbit
      size={size}
      rotation={rotation}
      orbitDuration={orbitDuration}
      shouldOrbit={shouldOrbit}
      shouldSpin={shouldSpin}
      spinDuration={spinDuration}
    >
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

const Sparkle = ({
  starSize,
  size,
  rotation,
  orbitDuration,
  shouldOrbit,
  shouldSpin,
  spinDuration,
}: IStar) => {
  return (
    <Orbit
      size={size}
      rotation={rotation}
      orbitDuration={orbitDuration}
      shouldOrbit={shouldOrbit}
      shouldSpin={shouldSpin}
      spinDuration={spinDuration}
    >
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

const Circle = ({
  starSize,
  size,
  rotation,
  orbitDuration,
  shouldOrbit,
  shouldSpin,
  spinDuration,
}: IStar) => {
  return (
    <Orbit
      size={size}
      rotation={rotation}
      orbitDuration={orbitDuration}
      shouldOrbit={shouldOrbit}
      shouldSpin={shouldSpin}
      spinDuration={spinDuration}
    >
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
