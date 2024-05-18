"use client";
import React, { useState } from "react";
import OverlayNavbar from "./OverlayNavbar";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCloseSquare } from "react-icons/ai";
interface OverlayState {
  isEnabled: Boolean;
}
const Navbar: React.FC = () => {
  const [navbarData, setNavbar] = useState<OverlayState>({
    isEnabled: false,
  });
  return (
    <nav>
      <div className="flex w-full justify-between px-6 md:px-16 py-3 md:py-6 items-center ">
        <IoReorderThreeOutline size="3em" className="hidden md:block" />
        <h1 className="bold font-mono text-3xl md:text-5xl">Blogs</h1>
        {navbarData.isEnabled ? (
          <AiOutlineCloseSquare
            size="3em"
            className="CloseMenuForMobile md:hidden"
            onClick={() =>
              setNavbar({
                isEnabled: !navbarData.isEnabled,
              })
            }
          />
        ) : (
          <IoReorderThreeOutline
            size="3em"
            className="MenuForMobile md:hidden"
            onClick={() =>
              setNavbar({
                isEnabled: !navbarData.isEnabled,
              })
            }
          />
        )}
        <CiSearch size="2em" className="hidden md:block" />
      </div>
      <hr />
      <ul className="hidden md:flex md:gap-8  md:justify-center md:py-5">
        <li>HOME</li>
        <li>CATEGORIES</li>
        <li>CONTACT</li>
      </ul>
      {navbarData.isEnabled && <OverlayNavbar />}
    </nav>
  );
};

export default Navbar;
