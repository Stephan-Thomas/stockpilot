import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800"
      id="contact"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Ready to take your shop to the next level?
          </h2>
          <div className="mt-8 flex justify-center">
            <Link href={"/auth/signup"}>
              <button className="bg-[#13a4ec] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#13a4ec]/90 transition-colors">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-slate-500 dark:text-slate-400 md:order-1">
            © 2024 ShopTrack. All rights reserved.
          </p>
          <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
            <a
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              href="#"
            >
              <FaFacebook />
            </a>
            <a
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              href="#"
            >
              <FaInstagramSquare />
            </a>
            <a
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              href="#"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
