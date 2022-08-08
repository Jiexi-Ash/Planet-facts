import { useEffect, useState } from "react";
import Image from "next/image";
import PlanetImage from "./PlanetImage";

function PlanetImageGeo({ image, name, size, geoImage }) {
  const [leftTopPosition, setLeftTopPosition] = useState({});

  const setPosition = (name) => {
    switch (name.toLowerCase()) {
      case "mercury":
        setLeftTopPosition({
          lg: "lg:left-14 lg:top-72",
          md: "md:md:left-11  md:top-52",
          sm: "sm:sm:left-2  sm:top-36",
        });
        break;

      case "venus":
        setLeftTopPosition({
          lg: "lg:top-80 lg:left-[112px]",
          md: "md:top-72 md:left-20",
          sm: "sm:sm:left-7  sm:top-44",
        });
        break;

      case "earth":
        setLeftTopPosition({
          lg: "lg:top-96 lg:left-[140px]",
          md: "md:top-80 md:left-[95px]",
          sm: "sm:left-9  sm:top-52",
        });
        break;
      case "mars":
        setLeftTopPosition({
          lg: "lg:top-80 lg:left-[80px]",
          md: "md:top-60 md:left-14",
          sm: "sm:left-4  sm:top-44",
        });
        break;
      case "jupiter":
        setLeftTopPosition({
          lg: "lg:left-52 lg:top-[450px]",
          md: "md:top-80 md:left-[135px]",
          sm: "sm:left-16  sm:top-60",
        });
        break;
      case "saturn":
        setLeftTopPosition({
          lg: "lg:left-[245px] lg:top-[450px]",
          md: "md:top-[350px] md:left-[165px]",
          sm: "sm:left-20  sm:top-60",
        });
        break;
      case "uranus":
        setLeftTopPosition({
          lg: "lg:left-[140px] lg:top-96",
          md: "md:top-80 md:left-[100px]",
          sm: "sm:left-10  sm:top-52",
        });
        break;
      case "neptune":
        setLeftTopPosition({
          lg: "lg:left-[135px] lg:top-96",
          md: "md:top-80 md:left-[95px]",
          sm: "sm:left-10  sm:top-52",
        });

        break;

      default:
        return "top-48 left-16";
    }
  };

  useEffect(() => {
    setPosition(name);
  }, [name]);

  return (
    <div className="relative">
      <PlanetImage name={name} image={image} size={size} />

      <div
        className={`absolute lg:w-44 lg:h-48 sm:w-24 sm:h-24 ${leftTopPosition.lg} ${leftTopPosition.md} ${leftTopPosition.sm}   `}
      >
        <Image src={geoImage} alt={name} layout="fill" />
      </div>
    </div>
  );
}

export default PlanetImageGeo;
