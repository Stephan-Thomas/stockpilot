"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaDatabase } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { PiSquaresFour } from "react-icons/pi";
import { CiUser, CiMail } from "react-icons/ci";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const handleClick = (menu: string) => {
    setActive(menu);
  };
  return (
    <aside className="w-20 bg-background-light dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 flex flex-col items-center py-6 space-y-8 sticky top-0 h-screen">
      <div className="text-primary">
        <FaDatabase size={30} />
      </div>
      <nav className="flex flex-col items-center space-y-6">
        <Link href={"/"} onClick={() => handleClick("home")}>
          <FiHome
            size={30}
            className={`${active === "home" ? "text-[#13a4ec]" : "text-black"}`}
          />
        </Link>

        <Link href={"#features"} onClick={() => handleClick("features")}>
          <PiSquaresFour
            size={30}
            className={`${
              active === "features" ? "text-[#13a4ec]" : "text-black"
            }`}
          />
        </Link>

        <Link href={"#testimonial"} onClick={() => handleClick("testimonial")}>
          <CiUser
            size={30}
            className={`${
              active === "testimonial" ? "text-[#13a4ec]" : "text-black"
            }`}
          />
        </Link>

        <Link href={"#testimonial"} onClick={() => handleClick("testimonial")}>
          <CiMail
            size={30}
            className={`${
              active === "testimonial" ? "text-[#13a4ec]" : "text-black"
            }`}
          />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
