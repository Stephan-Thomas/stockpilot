import React from "react";
import { PiWarehouse } from "react-icons/pi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { RiListView } from "react-icons/ri";
import { GoBell } from "react-icons/go";

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Our platform offers a range of features to help you manage your shop
            efficiently.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary">
              <PiWarehouse
                size={40}
                className="bg-[#13a4ec]/20 text-[#13a4ec] p-2 rounded-lg"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              Inventory Tracking
            </h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Keep track of your inventory levels in real-time. Know exactly
              what you have in stock and when to reorder.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary">
              <PiNewspaperClippingLight
                size={40}
                className="bg-[#13a4ec]/20 text-[#13a4ec] p-2 rounded-lg"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              Sales Records
            </h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Record every sale with details like product, quantity, and
              customer information. Access your sales history anytime.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary">
              <RiListView
                size={40}
                className="bg-[#13a4ec]/20 text-[#13a4ec] p-2 rounded-lg"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              Reports
            </h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Generate detailed reports on sales performance, inventory levels,
              and more to make informed decisions.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary">
              <GoBell
                size={40}
                className="bg-[#13a4ec]/20 text-[#13a4ec] p-2 rounded-lg"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              Low Stock Alerts
            </h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Receive alerts when your stock levels are low. Never run out of
              your best-selling products again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
