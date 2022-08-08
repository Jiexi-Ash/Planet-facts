import { useState, useEffect } from "react";

import PlanetInfo from "./PlanetInfo";
import PlanetStat from "./PlanetStat";
import PlanetImage from "./PlanetImage";
import PlanetImageGeo from "./PlanetImageGeo";
import Button from "components/UI/Button";

function Planet({ planet }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  return (
    <div className="bg-stars">
      <div className="lg:container lg:max-w-8xl lg:flex lg:mx-auto lg:justify-center">
        <div className="flex justify-between items-center border-b border-divideGray px-8 md:hidden">
          <div
            onClick={() => handleClick(0)}
            className={`text-sm uppercase  py-4 ${
              selectedIndex === 0 ? "border-b-4 border-darkishBlue" : ""
            }`}
          >
            <p className="text-sm uppercase text-white">overview</p>
          </div>

          <div
            onClick={() => handleClick(1)}
            className={`text-sm uppercase  py-4 cursor-pointer ${
              selectedIndex === 1 ? "border-b-4 border-darkishBlue" : ""
            }`}
          >
            <p className="text-sm uppercase text-white">structure</p>
          </div>
          <div
            onClick={() => handleClick(2)}
            className={`text-sm uppercase  py-4 ${
              selectedIndex === 2 ? "border-b-4 border-darkishBlue" : ""
            }`}
          >
            <p className="text-sm uppercase text-white">surface</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:pt-28  lg:flex-1">
          {selectedIndex === 0 && (
            <PlanetImage
              image={planet.images.planet}
              name={planet.name}
              size={planet.imageSize}
            />
          )}
          {selectedIndex === 1 && (
            <PlanetImage
              image={planet.images.internal}
              name={planet.name}
              size={planet.imageSize}
            />
          )}
          {selectedIndex === 2 && (
            <PlanetImageGeo
              image={planet.images.planet}
              name={planet.name}
              size={planet.imageSize}
              geoImage={planet.images.geology}
            />
          )}
        </div>

        <div className="flex flex-col justify-center md:flex-row md:justify-between pt-16 pb-4 px-8  md:space-x-8  lg:flex-col lg:space-x-0 lg:pt-40">
          <div className="">
            <h2 className="text-white text-center md:text-left">
              {planet.name}
            </h2>
            {selectedIndex === 0 && (
              <PlanetInfo
                info={planet.overview.content}
                link={planet.overview.source}
              />
            )}
            {selectedIndex === 1 && (
              <PlanetInfo
                info={planet.structure.content}
                link={planet.structure.source}
              />
            )}
            {selectedIndex === 2 && (
              <PlanetInfo
                info={planet.geology.content}
                link={planet.geology.source}
              />
            )}
          </div>

          <div className="hidden md:flex flex-col space-y-3 md:flex-1 md:pt-12">
            <Button
              text="Overview"
              count="01"
              name={planet.name}
              index={0}
              selectedIndex={selectedIndex}
              onClickHandler={handleClick}
            />
            <Button
              text="internal structure"
              count="02"
              name={planet.name}
              index={1}
              selectedIndex={selectedIndex}
              onClickHandler={handleClick}
            />
            <Button
              text="Surface Geology"
              count="03"
              name={planet.name}
              index={2}
              selectedIndex={selectedIndex}
              onClickHandler={handleClick}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col  pt-4 px-8 py-6 space-y-2 md:flex-row  md:justify-between md:items-center md:space-y-0 md:space-x-4 lg:pt-16">
        <PlanetStat title="rotation" stat={planet.rotation} />
        <PlanetStat title="revolution" stat={planet.revolution} />
        <PlanetStat title="radius" stat={planet.radius} />
        <PlanetStat title="temperature" stat={planet.temperature} />
      </div>
    </div>
  );
}

export default Planet;
