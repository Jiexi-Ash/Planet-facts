import React from "react";
import { MenuIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <header className="py-6 px-8 border-b border-fadeishGray">
      <div className="flex justify-between items-center">
        <div className="text-[20px] tracking-[-1.05px] uppercase font-bold text-white cursor-pointer">
          the planets
        </div>
        <MenuIcon className="text-white h-8 cursor-pointer" />
      </div>
    </header>
  );
}

export default Navbar;
