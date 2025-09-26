import React from "react";
import Sidebar from "../components/Sidebar";
import CustomChart from "./Chart";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 bg-[#f6f7f8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Today's Sales
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                $2,345
              </p>
              <p className="mt-1 text-sm font-medium text-green-500">+10%</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Low Stock Alerts
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                5 Items
              </p>
              <p className="mt-1 text-sm font-medium text-red-500">-2%</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Profit Summary
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                $1,200
              </p>
              <p className="mt-1 text-sm font-medium text-green-500">+5%</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Sales
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                $15,000
              </p>
              <p className="mt-1 text-sm font-medium text-green-500">+8%</p>
            </div>
          </div>
          <div className="mt-8 bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Sales Overview
            </h3>
            <div className="mt-4">
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    $15,000
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      Last 30 Days
                    </span>
                    <span className="text-green-500 font-medium">+8%</span>
                  </div>
                </div>
              </div>
              <CustomChart />
              <div className="flex justify-around text-xs text-gray-500 dark:text-gray-400 mt-2">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
