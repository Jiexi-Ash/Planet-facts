import React from "react";
import Navbar from "components/Navbar";
import { MenuIcon } from "@heroicons/react/solid";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default MainLayout;
