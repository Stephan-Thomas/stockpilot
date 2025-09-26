import React from "react";
import Sidebar from "@/app/components/Sidebar";
import { IoAdd } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10 bg-[#f6f7f8]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
            Products
          </h2>
          <button className="bg-[#13a4ec] text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-[#13a4ec]/90 transition-colors">
            <span className="flex justify-center items-center">
              <IoAdd size={30} /> Add Product
            </span>
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-3 min-w-[200px]" scope="col">
                    Product Name
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Category
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Stock Qty
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Buying Price
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Selling Price
                  </th>
                  <th className="px-6 py-3" scope="col">
                    Profit Margin
                  </th>
                  <th className="px-6 py-3 text-right" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#f6f7f8] dark:border-gray-700">
                  <th
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    scope="row"
                  >
                    Organic Apples
                  </th>
                  <td className="px-6 py-4">Produce</td>
                  <td className="px-6 py-4">150</td>
                  <td className="px-6 py-4">$1.50</td>
                  <td className="px-6 py-4">$2.50</td>
                  <td className="px-6 py-4 text-green-500">40%</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-[#13a4ec] dark:hover:text-[#13a4ec] transition-colors">
                        <MdOutlineEdit />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#f6f7f8] dark:border-gray-700">
                  <th
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    scope="row"
                  >
                    Artisan Bread
                  </th>
                  <td className="px-6 py-4">Bakery</td>
                  <td className="px-6 py-4">80</td>
                  <td className="px-6 py-4">$3.00</td>
                  <td className="px-6 py-4">$5.00</td>
                  <td className="px-6 py-4 text-green-500">67%</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-[#13a4ec] dark:hover:text-[#13a4ec] transition-colors">
                        <MdOutlineEdit />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#f6f7f8] dark:border-gray-700">
                  <th
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    scope="row"
                  >
                    Local Honey
                  </th>
                  <td className="px-6 py-4">Pantry</td>
                  <td className="px-6 py-4">50</td>
                  <td className="px-6 py-4">$6.00</td>
                  <td className="px-6 py-4">$10.00</td>
                  <td className="px-6 py-4 text-green-500">67%</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-[#13a4ec] dark:hover:text-[#13a4ec] transition-colors">
                        <MdOutlineEdit />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#f6f7f8] dark:border-gray-700">
                  <th
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    scope="row"
                  >
                    Free-Range Eggs
                  </th>
                  <td className="px-6 py-4">Dairy</td>
                  <td className="px-6 py-4">120</td>
                  <td className="px-6 py-4">$2.00</td>
                  <td className="px-6 py-4">$3.50</td>
                  <td className="px-6 py-4 text-green-500">75%</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-[#13a4ec] dark:hover:text-[#13a4ec] transition-colors">
                        <MdOutlineEdit />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    scope="row"
                  >
                    Craft Beer
                  </th>
                  <td className="px-6 py-4">Beverages</td>
                  <td className="px-6 py-4">200</td>
                  <td className="px-6 py-4">$2.50</td>
                  <td className="px-6 py-4">$4.00</td>
                  <td className="px-6 py-4 text-green-500">60%</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-[#13a4ec] dark:hover:text-[#13a4ec] transition-colors">
                        <MdOutlineEdit />
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition-colors">
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
