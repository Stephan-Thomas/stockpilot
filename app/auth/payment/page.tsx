import React from "react";
import Sidebar from "@/app/components/Sidebar";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="mx-auto w-full max-w-4xl grow px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="mb-8 text-center text-3xl font-extrabold sm:text-4xl">
            Choose Your Plan
          </h2>
          <div className="mb-12 w-full max-w-3xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-[#13a4ec]/20 bg-[#f6f7f8] dark:bg-background-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold">7 Days Free Trial</h3>
                <p className="mt-2 text-4xl font-extrabold">Free</p>
                <button className="mt-6 w-full rounded bg-[#13a4ec]/20 dark:bg-[#13a4ec]/30 py-2 text-sm font-semibold text-gray-800 dark:text-white hover:bg-[#13a4ec]/30 dark:hover:bg-[#13a4ec]/40">
                  Select Plan
                </button>
                <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-[#13a4ec]"
                      fill="currentColor"
                      height="20px"
                      viewBox="0 0 256 256"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    <span>Basic features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-[#13a4ec]"
                      fill="currentColor"
                      height="20px"
                      viewBox="0 0 256 256"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    <span>Limited inventory tracking</span>
                  </li>
                </ul>
              </div>
              <div className="relative flex flex-col rounded-lg border-2 border-[#13a4ec] bg-[#f6f7f8] dark:bg-background-dark p-6 shadow-lg">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#13a4ec] px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
                <h3 className="text-lg font-bold">Monthly Plan</h3>
                <p className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">₦3,000</span>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    / month
                  </span>
                </p>
                <button className="mt-6 w-full rounded bg-[#13a4ec] py-2 text-sm font-semibold text-white hover:opacity-90">
                  Select Plan
                </button>
                <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-[#13a4ec]"
                      fill="currentColor"
                      height="20px"
                      viewBox="0 0 256 256"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    <span>Full access to all features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-[#13a4ec]"
                      fill="currentColor"
                      height="20px"
                      viewBox="0 0 256 256"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    <span>Advanced sales reports</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col rounded-lg border border-[#13a4ec]/20 bg-[#f6f7f8] dark:bg-background-dark p-6 shadow-sm">
                <h3 className="text-lg font-bold">Yearly Plan</h3>
                <p className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">₦30,000</span>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    / year
                  </span>
                </p>
                <button className="mt-6 w-full rounded bg-[#13a4ec]/20 dark:bg-[#13a4ec]/30 py-2 text-sm font-semibold text-gray-800 dark:text-white hover:bg-[#13a4ec]/30 dark:hover:bg-[#13a4ec]/40">
                  Select Plan
                </button>
                <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-[#13a4ec]"
                      fill="currentColor"
                      height="20px"
                      viewBox="0 0 256 256"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    <span>Everything in Monthly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-[#13a4ec]"
                      fill="currentColor"
                      height="20px"
                      viewBox="0 0 256 256"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    <span>Save 15% with annual billing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg rounded-lg border border-[#13a4ec]/20 bg-[#f6f7f8] dark:bg-background-dark p-6 shadow-sm">
            <h3 className="mb-4 text-center text-lg font-bold">
              Payment Method
            </h3>
            <div className="mb-6 flex justify-center gap-4">
              <img
                alt="Paystack logo"
                className="h-8 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjpK5lKijRCxUEq2WF3EntCW0vYGK71Wr4U7HahNmk5OI5sqtYzngUK_GW1mRs44TkPWDRXmbZTuSQyx8d_htP3AMwI6Hoaw4DdmryE-ipFk6BrYHOq-2mRPxShzajnBofd8jzfvFNb122PUtana-tQr5T_GoFkCPDTL3W-2ZjLy16mOaCaRzydF_ulaKuKuLY2iYZtrsxSEkA5pwZOodx5a1gWxQWz5QcEPWf5OPak4MZ8WoGDJPENk8JlUP9Kdyef1VL9iiZD-WU"
              />
              <img
                alt="Flutterwave logo"
                className="h-8 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcMT65dDlZ3-1riL6k4XTKYXae3GQGE6-Zq2amRlnjr5PiXpbtrL8t3B8mwyeliBPAeWEhKFdevgj82W5hOZWIHsTL1gPg9zGl1vFPk1yVwRqgxWqfNi9-m1g_HnIsAkv4eNKs2v-neiAS6b8TuqBPAy1ogojKhCcIX3_9GV4-_qGb-u5YfcCry_YXN-aMNHA71pbp0STyF6XiedHSN-4UQz9gyoVB87--xqRfh8rgIK1i9hyS1h2iT6Q3kV7qnsuOGOkvV563y15W"
              />
            </div>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center rounded border border-[#13a4ec]/20 dark:border-[#13a4ec]/30 p-4 has-[:checked]:border-[#13a4ec] has-[:checked]:ring-2 has-[:checked]:ring-[#13a4ec]">
                <input
                  // checked=""
                  className="h-4 w-4 border-gray-300 text-[#13a4ec] focus:ring-[#13a4ec]"
                  name="payment_method"
                  type="radio"
                />
                <span className="ml-3 text-sm font-medium">Pay with Card</span>
              </label>
              <label className="flex cursor-pointer items-center rounded border border-[#13a4ec]/20 dark:border-[#13a4ec]/30 p-4 has-[:checked]:border-[#13a4ec] has-[:checked]:ring-2 has-[:checked]:ring-[#13a4ec]">
                <input
                  className="h-4 w-4 border-gray-300 text-[#13a4ec] focus:ring-[#13a4ec]"
                  name="payment_method"
                  type="radio"
                />
                <span className="ml-3 text-sm font-medium">
                  Pay with Bank Transfer
                </span>
              </label>
              <label className="flex cursor-pointer items-center rounded border border-[#13a4ec]/20 dark:border-[#13a4ec]/30 p-4 has-[:checked]:border-[#13a4ec] has-[:checked]:ring-2 has-[:checked]:ring-[#13a4ec]">
                <input
                  className="h-4 w-4 border-gray-300 text-[#13a4ec] focus:ring-[#13a4ec]"
                  name="payment_method"
                  type="radio"
                />
                <span className="ml-3 text-sm font-medium">Pay with USSD</span>
              </label>
            </div>
            <div className="mt-8 mb-6 rounded-lg bg-[#13a4ec]/10 dark:bg-[#13a4ec]/20 p-4">
              <h4 className="font-bold text-gray-800 dark:text-white">
                Order Summary
              </h4>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Monthly Plan
                  </span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    ₦3,000.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    VAT (7.5%)
                  </span>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    ₦225.00
                  </span>
                </div>
                <div className="flex justify-between pt-2 text-base font-bold border-t border-[#13a4ec]/20 dark:border-[#13a4ec]/30">
                  <span className="text-gray-800 dark:text-white">Total</span>
                  <span className="text-[#13a4ec]">₦3,225.00</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <button className="w-full rounded bg-[#13a4ec] py-2.5 text-sm font-semibold text-white hover:opacity-90">
                Proceed to Checkout
              </button>
              <a
                className="text-sm font-semibold text-[#13a4ec] hover:underline"
                href="#"
              >
                Continue with Free Trial
              </a>
            </div>
          </div>
          <div className="mt-8 flex w-full max-w-lg items-center justify-center gap-3 rounded bg-[#13a4ec]/10 dark:bg-[#13a4ec]/20 p-4 text-sm text-gray-600 dark:text-gray-300">
            <svg
              className="h-6 w-6 shrink-0"
              fill="currentColor"
              height="24px"
              viewBox="0 0 256 256"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path>
            </svg>
            <p>
              Secure payments powered by industry-leading providers.{" "}
              <a
                className="font-semibold text-[#13a4ec] hover:underline"
                href="#"
              >
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
