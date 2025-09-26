"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaDatabase } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const LoginSidebar = () => {
  const [active, setActive] = useState("signup");
  const handleClick = (menu: string) => {
    setActive(menu);
  };
  return (
    <aside className="w-20 bg-[#f6f7f8] dark:bg-[#101c22] border-r border-slate-200 dark:border-slate-800 flex flex-col items-center py-6 space-y-8 sticky top-0 h-screen">
      <div className="text-primary">
        <FaDatabase size={30} />
      </div>
      <nav className="flex flex-col items-center space-y-6">
        <Link href={"/"} onClick={() => handleClick("home")}>
          <FiHome
            size={30}
            className={`${
              active === "home"
                ? "text-[#13a4ec]"
                : "text-black hover:text-[#13a4ec]"
            }`}
          />
        </Link>
        <Link href={"/auth/signup"} onClick={() => handleClick("signup")}>
          <FiLogIn
            size={30}
            className={`${
              active === "signup"
                ? "text-[#13a4ec]"
                : "text-black hover:text-[#13a4ec]"
            }`}
          />
        </Link>

        <Link href={"/settings"} onClick={() => handleClick("settings")}>
          <IoSettingsOutline
            size={30}
            className={`${
              active === "settings"
                ? "text-[#13a4ec]"
                : "text-black hover:text-[#13a4ec]"
            }`}
          />
        </Link>
      </nav>
    </aside>
  );
};

export default LoginSidebar;
