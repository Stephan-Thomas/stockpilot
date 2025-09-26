import React from "react";
import Sidebar from "@/app/components/Sidebar";
import { LuDownload } from "react-icons/lu";
import { MdFilterList } from "react-icons/md";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10 bg-[#f6f7f8]">
        <div className="mx-auto max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
              Record Sale
            </h1>
          </header>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="col-span-1 space-y-6 lg:col-span-3">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-background-dark">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                      Product Selection
                    </h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Choose a product from your inventory to record the sale.
                    </p>
                    <div className="mt-4">
                      <select className="w-full rounded-lg border-slate-300 bg-[#f6f7f8] px-4 py-2 text-slate-700 focus:border-[#13a4ec] focus:ring-[#13a4ec]/50 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:focus:border-[#13a4ec]">
                        <option>Select Product</option>
                        <option>Organic Apples</option>
                        <option>Local Honey</option>
                        <option>Artisan Cheese</option>
                        <option>Fresh Eggs</option>
                        <option>Homemade Bread</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="h-40 w-full rounded-lg bg-cover bg-center md:h-auto md:w-40"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWvxDdBE6K3ccaY1O4rALvGLTy4ZVubpTYMkiOrfCVLCGSx_KB6oI2GH7udP_1hMom2mmfmIIRLHAzuAigpNFQL7YMLJK6_dqyIvvy35zQtiJW16VHYYmjs2QfGkhiE91VLlJw4LskR4fro3ZQd1S6NLXjPWvWLym1DBAeFf2W2nOwVyBJaT9yHS9lgUEYEHCOl7boiPYuEppAbp-RjORqtYZh7le1jrwTmkhmqhUtZRqxTkgYuqZ2hbxoagNkCgf45PJpES4hFOuV")`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-background-dark">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-base font-medium text-slate-800 dark:text-white">
                      Quantity
                    </label>
                    <input
                      className="mt-2 w-full rounded-lg border-slate-300 bg-[#f6f7f8] px-4 py-2 text-slate-700 focus:border-[#13a4ec] focus:ring-[#13a4ec]/50 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:placeholder-slate-500"
                      id="quantity"
                      placeholder="Enter quantity"
                      type="number"
                      value="1"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium text-slate-800 dark:text-white">
                      Total
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                      $30.00
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="flex items-center justify-center rounded-lg bg-[#13a4ec] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#13a4ec]/90">
                    Record Sale
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-background-dark lg:col-span-2">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">
                Sales History
              </h2>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                    <MdFilterList />
                  </button>
                  <button className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200">
                    <LuDownload />
                  </button>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-[#13a4ec]/10 px-4 py-2 text-sm font-bold text-[#13a4ec] hover:bg-[#13a4ec]/20 dark:bg-[#13a4ec]/20 dark:hover:bg-[#13a4ec]/30">
                  <LuDownload />
                  <span>Export</span>
                </button>
              </div>
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
                            Product
                          </th>
                          <th
                            className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                            scope="col"
                          >
                            Qty
                          </th>
                          <th
                            className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                            scope="col"
                          >
                            Total
                          </th>
                          <th
                            className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white"
                            scope="col"
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                            Organic Apples
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            10
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            $30.00
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            Jul 26
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                            Local Honey
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            5
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            $50.00
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            Jul 25
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                            Artisan Cheese
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            3
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            $45.00
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            Jul 24
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                            Fresh Eggs
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            12
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            $24.00
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            Jul 23
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-white sm:pl-0">
                            Homemade Bread
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            8
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            $40.00
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                            Jul 22
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
      </main>
    </div>
  );
};

export default page;
