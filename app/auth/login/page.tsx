import React from "react";
import Sidebar from "@/app/components/Sidebar";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-[#f6f7f8] dark:bg-[#101c22] font-display text-[#1f2937] dark:text-[#f9fafb] flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="bg-[#ffffff] dark:bg-[#1a2831] p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1f2937] dark:text-[#f9fafb]">
                Welcome Back
              </h1>
              <p className="text-[#9ca3af] dark:text-[#6b7280] mt-2">
                Log in to manage your vendor inventory and sales.
              </p>
            </div>
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-[#e5e7eb] dark:bg-[#374151] text-[#1f2937] dark:text-[#f9fafb] placeholder-[#9ca3af] dark:placeholder-#6b7280 border-transparent focus:ring-2 focus:ring-[#13a4ec] focus:border-transparent"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-[#e5e7eb] dark:bg-[#374151] text-[#1f2937] dark:text-[#f9fafb] placeholder-[#9ca3af] dark:placeholder-#6b7280 border-transparent focus:ring-2 focus:ring-[#13a4ec] focus:border-transparent"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <a
                    className="font-medium text-[#13a4ec] hover:text-[#13a4ec]/80"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#13a4ec] hover:bg-[#13a4ec]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13a4ec]"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-[#9ca3af] dark:text-#6b7280">
                Don't have an account?
                <a
                  className="font-medium text-[#13a4ec] hover:text-[#13a4ec]/80"
                  href="/auth/signup"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
