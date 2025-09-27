import React from "react";
import Sidebar from "@/app/components/Sidebar";
import { IoArrowForward } from "react-icons/io5";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-6 lg:p-8 bg-[#f6f7f8]">
        <div className="mx-auto max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              Settings
            </h1>
          </header>
          <div className="space-y-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-background-dark">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                Business Profile
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Update your business details and logo.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="md:col-span-1">
                  <label className="block text-base font-medium text-slate-800 dark:text-white">
                    Logo
                  </label>
                  <div className="mt-2 flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 p-6 dark:border-slate-700">
                    <div className="text-center">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                        <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">
                          {" "}
                          image{" "}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-[#13a4ec]">
                          Upload a file
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 md:col-span-2">
                  <div>
                    <label className="block text-base font-medium text-slate-800 dark:text-white">
                      Business Name
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border-slate-300 bg-background-light px-4 py-2 text-slate-700 focus:border-[#13a4ec] focus:ring-[#13a4ec]/50 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:placeholder-slate-500"
                      id="business-name"
                      placeholder="Enter business name"
                      type="text"
                      value="Green Valley Organics"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-slate-800 dark:text-white">
                      Email Address
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border-slate-300 bg-background-light px-4 py-2 text-slate-700 focus:border-[#13a4ec] focus:ring-[#13a4ec]/50 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:placeholder-slate-500"
                      id="business-email"
                      placeholder="Enter email address"
                      type="email"
                      value="contact@greenvalley.com"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium text-slate-800 dark:text-white">
                      Phone Number
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border-slate-300 bg-background-light px-4 py-2 text-slate-700 focus:border-[#13a4ec] focus:ring-[#13a4ec]/50 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:placeholder-slate-500"
                      id="business-phone"
                      placeholder="Enter phone number"
                      type="tel"
                      value="(123) 456-7890"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="flex items-center justify-center rounded-lg bg-[#13a4ec] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#13a4ec]/90">
                  Save Changes
                </button>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-background-dark">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                Subscription &amp; Payment
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Manage your subscription and payment details.
              </p>
              <div className="mt-6">
                <div className="rounded-lg border border-slate-200 bg-background-light p-4 dark:border-slate-700 dark:bg-slate-900/50">
                  <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <div>
                      <p className="text-base font-semibold text-slate-800 dark:text-white">
                        Current Plan
                      </p>
                      <p className="text-3xl font-bold text-[#13a4ec]">
                        Pro Plan
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Renews on July 26, 2024
                      </p>
                    </div>
                    <button className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#13a4ec]/10 px-4 py-2 text-sm font-bold text-[#13a4ec] hover:bg-[#13a4ec]/20 dark:bg-[#13a4ec]/20 dark:hover:bg-[#13a4ec]/30 sm:mt-0">
                      <span>Change Plan</span>
                      <IoArrowForward />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  Payment Method
                </h3>
                <div className="mt-4 rounded-lg border border-slate-200 bg-background-light p-4 dark:border-slate-700 dark:bg-slate-900/50">
                  <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Visa"
                        className="h-8"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr0v8gPYurZwKFjxUxzGAKC_o8GsWwjB7cN7-moSARfoi5iaGORhxILSe0j-gQuX5QClPQZ3p_HqIickrhzmWxpSdjdOZuym6GZXnHu2BnomVQGyZ8fESnW3ZDwmRE1NUQvmA8K0UN_h5To8gOEZCGO5BSnNBgHtSwmE-qamoso3Xg_pzb8XQVLouRFoUsXWlQIBOZxnl5oHs4roHol2oogEfzre3tTfvFEc1rN18eja9YXF5N_XkaMJQ71iJvz2gvEIKRxjSkayDK"
                      />
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-white">
                          Visa ending in 1234
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Expires 12/2025
                        </p>
                      </div>
                    </div>
                    <button className="mt-4 text-sm font-bold text-[#13a4ec] hover:underline sm:mt-0">
                      Update
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                  Billing History
                </h3>
                <div className="mt-4 flow-root">
                  <div className="-mx-6 -my-2 overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6">
                      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                        <thead>
                          <tr>
                            <th
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-0"
                              scope="col"
                            >
                              Date
                            </th>
                            <th
                              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                              scope="col"
                            >
                              Description
                            </th>
                            <th
                              className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                              scope="col"
                            >
                              Amount
                            </th>
                            <th
                              className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                              scope="col"
                            >
                              <span className="sr-only">Download</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                              July 26, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                              Pro Plan - Monthly
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                              $49.00
                            </td>
                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <a
                                className="text-[#13a4ec] hover:text-[#13a4ec]/80"
                                href="#"
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                              June 26, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                              Pro Plan - Monthly
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                              $49.00
                            </td>
                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <a
                                className="text-[#13a4ec] hover:text-[#13a4ec]/80"
                                href="#"
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                              May 26, 2023
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                              Pro Plan - Monthly
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                              $49.00
                            </td>
                            <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <a
                                className="text-[#13a4ec] hover:text-[#13a4ec]/80"
                                href="#"
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
