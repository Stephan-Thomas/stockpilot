"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDatabase } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { GrCube } from "react-icons/gr";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CgLoadbarSound } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

const UserSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/user", label: "Home", icon: <FiHome size={30} /> },
    { href: "/user/inventory", label: "Inventory", icon: <GrCube size={30} /> },
    {
      href: "/user/order",
      label: "Order",
      icon: <LiaClipboardListSolid size={30} />,
    },
    {
      href: "/user/reports",
      label: "Reports",
      icon: <CgLoadbarSound size={30} />,
    },
    {
      href: "/user/settings",
      label: "Settings",
      icon: <IoSettingsOutline size={30} />,
    },
  ];

  return (
    <aside className="w-72 bg-[#f6f7f8] dark:bg-[#101c22] border-r border-slate-200 dark:border-slate-800 flex flex-col items-start py-6 px-5 space-y-8 sticky top-0 h-screen">
      <nav className="flex flex-col items-start space-y-8">
        <div className="text-primary flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md">
          <FaDatabase size={30} />
        </div>

        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <button
                className={`flex justify-start items-center gap-2 pl-5 py-1 w-48 rounded-md ${
                  isActive
                    ? "text-[#13a4ec] bg-[#13a4ec]/20"
                    : "text-black hover:text-[#13a4ec]"
                }`}
              >
                {item.icon}
                <p>{item.label}</p>
              </button>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default UserSidebar;
