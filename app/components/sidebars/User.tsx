"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaDatabase } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GrCube } from "react-icons/gr";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CgLoadbarSound } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

const UserSidebar = () => {
  const [active, setActive] = useState("home");
  const handleClick = (menu: string) => {
    setActive(menu);
  };
  return (
    <aside className="w-72 bg-[#f6f7f8] dark:bg-[#101c22] border-r border-slate-200 dark:border-slate-800 flex flex-col items-start py-6 px-5 space-y-8 sticky top-0 h-screen">
      <nav className="flex flex-col items-start space-y-8">
        <div className="text-primary flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md">
          <FaDatabase size={30} />
        </div>
        <Link href={"/user"} onClick={() => handleClick("home")}>
          <button
            className={`flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md ${
              active === "home"
                ? "text-[#13a4ec] bg-[#13a4ec]/20"
                : "text-black hover:text-[#13a4ec]"
            }`}
          >
            <FiHome size={30} />
            <p>Home</p>
          </button>
        </Link>

        <Link href={"/user/inventory"} onClick={() => handleClick("inventory")}>
          <button
            className={`flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md ${
              active === "inventory"
                ? "text-[#13a4ec]"
                : "text-black hover:text-[#13a4ec]"
            }`}
          >
            <GrCube size={30} />
            <p>Inventory</p>
          </button>
        </Link>

        <Link href={"/user/order"} onClick={() => handleClick("order")}>
          <button
            className={`flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md ${
              active === "order"
                ? "text-[#13a4ec]"
                : "text-black hover:text-[#13a4ec]"
            }`}
          >
            <LiaClipboardListSolid size={30} />
            <p>Order</p>
          </button>
        </Link>

        <Link href={"/user/reports"} onClick={() => handleClick("reports")}>
          <button
            className={`flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md ${
              active === "reports"
                ? "text-[#13a4ec]"
                : "text-black hover:text-[#13a4ec]"
            }`}
          >
            <CgLoadbarSound size={30} />
            <p>Reports</p>
          </button>
        </Link>
        <Link href={"/user/settings"} onClick={() => handleClick("settings")}>
          <button
            className={`flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md ${
              active === "settings"
                ? "text-[#13a4ec]"
                : "text-black hover:text-[#13a4ec]"
            }`}
          >
            <IoSettingsOutline size={30} />
            <p>Settings</p>
          </button>
        </Link>
      </nav>
    </aside>
  );
};

export default UserSidebar;
