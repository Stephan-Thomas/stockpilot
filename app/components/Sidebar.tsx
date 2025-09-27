"use client";
import React, { useState } from "react";
import HomeSidebar from "./sidebars/Home";
import LoginSidebar from "./sidebars/Login";
import UserSidebar from "./sidebars/User";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <>
      {pathName === "/" && <HomeSidebar />}
      {(pathName === "/auth/login" ||
        pathName === "/auth/signup" ||
        pathName === "/auth/payment") && <LoginSidebar />}
      {(pathName === "/user" ||
        pathName === "/user/inventory" ||
        pathName === "/user/sales" ||
        pathName === "/user/reports" ||
        pathName === "/user/settings") && <UserSidebar />}
    </>
  );
};

export default Sidebar;
