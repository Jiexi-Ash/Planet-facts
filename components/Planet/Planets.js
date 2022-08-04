import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Planet() {
  return (
    <div className="">
      <div className="container max-w-6xl mx-auto h-screen">
        <div className="px-8 text-white border-b border-fadeishGray">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="text-sm uppercase py-4 hover:border-b-4 border-darkishBlue">
                overview
              </a>
            </Link>
            <Link href="/">
              <a className="text-sm uppercase">Structure</a>
            </Link>
            <Link href="/">
              <a className="text-sm uppercase">surface</a>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center pt-40 pb-10">
          <div className="relative h-28 w-28">
            <Image
              src="/images/planet-mercury.svg"
              alt="mercury"
              layout="fill"
            />
          </div>

          <div className="pt-20 pb-6">
            <h2 className="text-center text-white">mercury</h2>
            <div className="max-w-md px-4 text-center py-4">
              <p className="text-white opacity-80 leading-6 font-League-Spartan">
                Mercury is the smallest planet in the Solar System and the
                closest to the Sun. Its orbit around the Sun takes 87.97 Earth
                days, the shortest of all the Suns planets. Mercury is one of
                four terrestrial planets in the Solar System, and is a rocky
                body like Earth.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <p className="text-lg text-fadeishGray">
              Source: <span className="text-white">Wikipedia</span>
            </p>
            <div className="relative h-4 w-4">
              <Image src="/images/icon-source.svg" alt="source" layout="fill" />
            </div>
          </div>
        </div>

        <div className="flex flex-col px-8 space-y-4 pb-10">
          <div className="py-4 px-4 flex justify-between items-center border-2 border-fadeishGray opacity-80">
            <p className="text-sm uppercase text-fadeishGray">rotation time</p>
            <p className="uppercase font-bold text-white text-xl">58.6 days</p>
          </div>
          <div className="py-2 px-4 flex justify-between items-center border-2 border-fadeishGray opacity-80">
            <p className="text-sm uppercase text-fadeishGray">
              revolution time
            </p>
            <p className="uppercase font-bold text-white text-xl">87.97 days</p>
          </div>
          <div className="py-2 px-4 flex justify-between items-center border-2 border-fadeishGray opacity-80">
            <p className="text-sm uppercase text-fadeishGray">radius</p>
            <p className="uppercase font-bold text-white text-xl">2,439,7 km</p>
          </div>
          <div className="py-2 px-4 flex justify-between items-center border-2 border-fadeishGray opacity-80">
            <p className="text-sm uppercase text-fadeishGray">average temp.</p>
            <p className="uppercase font-bold text-white text-xl">430&#8451;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
