import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function NavbarItem({ name, color, handleRoute }) {
  return (
    <li
      className="flex justify-between items-center py-6 cursor-pointer group"
      onClick={() => handleRoute(name)}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`h-6 w-6 rounded-full ${color} group-hover:border-2 group-hover:border-white`}
        ></div>
        <p className="text-white font-bold uppercase font-League-Spartan tracking-[1.6px] text-xl">
          {name}
        </p>
      </div>
      <div className="relative h-3 w-3">
        <Image src="/images/icon-chevron.svg" alt="Icon" layout="fill" />
      </div>
    </li>
  );
}

export default NavbarItem;
