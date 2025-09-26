import React from "react";
import CustomChart from "../Chart";
import Sidebar from "@/app/components/Sidebar";
import { IoIosTrendingUp } from "react-icons/io";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10 bg-[#f6f7f8]">
        <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-200/80 pb-4 dark:border-gray-700/80 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Reports
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Review your sales trends and performance.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-gray-200/80 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300/80 dark:bg-gray-700/80 dark:text-gray-200 dark:hover:bg-gray-600/80">
              <span className="material-symbols-outlined text-base">
                {" "}
                download{" "}
              </span>
              Export
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90">
              <span className="material-symbols-outlined text-base">
                {" "}
                print{" "}
              </span>
              Print Report
            </button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-white/50 dark:bg-black/20 p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Weekly Sales
                </p>
                <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                  $12,500
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Last 7 Days
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 text-sm font-medium text-green-600 dark:bg-green-900/50 dark:text-green-400">
                <IoIosTrendingUp />
                <span>+15%</span>
              </div>
            </div>
            <div className="mt-6 grid h-48 grid-flow-col items-end justify-items-center gap-4">
              <div className="group flex w-full flex-col items-center">
                <div
                  className="w-full rounded bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"
                  style={{ height: `90%` }}
                ></div>
                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Mon
                </p>
              </div>
              <div className="group flex w-full flex-col items-center">
                <div
                  className="w-full rounded bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"
                  style={{ height: `70%` }}
                ></div>
                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Tue
                </p>
              </div>
              <div className="group flex w-full flex-col items-center">
                <div
                  className="w-full rounded bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"
                  style={{ height: `10%` }}
                ></div>
                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Wed
                </p>
              </div>
              <div className="group flex w-full flex-col items-center">
                <div
                  className="w-full rounded bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"
                  style={{ height: `50%` }}
                ></div>
                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Thu
                </p>
              </div>
              <div className="group flex w-full flex-col items-center">
                <div
                  className="w-full rounded bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"
                  style={{ height: `30%` }}
                ></div>
                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Fri
                </p>
              </div>
              <div className="group flex w-full flex-col items-center">
                <div
                  className="w-full rounded bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"
                  style={{ height: `70%` }}
                ></div>
                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Sat
                </p>
              </div>
              <div className="group flex w-full flex-col items-center">
                <div
                  className="w-full rounded bg-primary/20 transition-all duration-300 group-hover:bg-primary/40"
                  style={{ height: `50%` }}
                ></div>
                <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Sun
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white/50 dark:bg-black/20 p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Monthly Sales
                </p>
                <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                  $55,000
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Last 30 Days
                </p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-green-100/80 px-2 py-1 text-sm font-medium text-green-600 dark:bg-green-900/50 dark:text-green-400">
                <IoIosTrendingUp />
                <span>+8%</span>
              </div>
            </div>
            <CustomChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
