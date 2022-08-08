import React from "react";

function PlanetStat({ title, stat }) {
  return (
    <div className="flex justify-between w-full items-center  border border-divideGray px-4 py-2 md:flex-col md:w-1/4 md:max-w-sm space-y-4 md:py-6 md:items-start">
      <p className="text-fadeishGray uppercase ">{title}</p>
      <p className="text-white text-[20px]">{stat}</p>
    </div>
  );
}

export default PlanetStat;
