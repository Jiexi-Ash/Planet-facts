import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function PlanetInfo({ info, link }) {
  const router = useRouter();
  return (
    <>
      <div className="max-w-sm px-3 mx-auto pt-4 md:px-0">
        <p className="text-white text-sm  text-center  opacity-80 leading-6 font-League-Spartan md:text-left lg:text-lg">
          {info}
        </p>
      </div>
      <div
        className="flex justify-center space-x-1 w-full pt-10 items-center md:justify-start"
        onClick={() => router.push(link)}
      >
        <p className="text-divideGray text-lg">
          Source :{" "}
          <span className="font-bold text-white opacity-40 underline">
            Wikipedia
          </span>
        </p>
        <div className="relative h-4 w-4">
          <Image src="/images/icon-source.svg" alt="Icon" layout="fill" />
        </div>
      </div>
    </>
  );
}

export default PlanetInfo;
