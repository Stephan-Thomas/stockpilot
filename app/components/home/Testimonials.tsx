import React from "react";

const Testimonials = () => {
  return (
    <section
      className="bg-background-light dark:bg-background-dark py-20 px-4 sm:px-6 lg:px-8"
      id="testimonial"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Hear from business owners who transformed their operations with
            ShopTrack.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg">
            <img
              alt="Sarah from a craft shop"
              className="h-48 w-full object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjkJj523aE0ZqCqIyTEx88d-vJr4cFGZ2LJqBtO8IktHCS5nqlY8TTHRBnGkvya8HPEtdD_verGz6Cf_EmclgU5n3f5lVZAOBwsabeS8y2vibAs4n2IPGkRwpDBppW6DbD8ctS9FPdtPQ-A9wdJGZb-Xstr1xJ13tYR8Tbp4EGpP4vKMDGWZkj1fIq2wCjtcGMyfyMNztgzbiCt408ER6jPJ_Q2hnxUo0uzS4Hov9t0EsuOIqbRut-PimrtlLSG0V59EDeH1cD5oZU"
            />
            <blockquote className="mt-6">
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                "ShopTrack has transformed my business. I can now manage my
                inventory and sales with ease, saving me time and money."
              </p>
            </blockquote>
            <footer className="mt-4">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                Sarah
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Owner of a local craft shop
              </p>
            </footer>
          </div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg">
            <img
              alt="David from a hardware store"
              className="h-48 w-full object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNei4Me4TC12D0whmgGD2c9ezeROmgA6fr9TBGBqPM16F5MW-PfSxDyurigtLKGU6IoIkAOWs5twhtduz02pshtV6Wb_Pby8FTYqdEnvsj9lFGWMIJRblSybbg_iIt615t4Np-sGzvPtyT7FnxphN0sati_wegcFMbMVXHQCMgbhbHo0oMq0OLTWpXa57rzH1SA1EF3OPD3OrETEXwEMENUOMQPqN6VIdOqB_J21H_2V2Li82EtQTSfz7zgU_zvSbFLl5hAp7Ty-T"
            />
            <blockquote className="mt-6">
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                "I love the reporting feature. It gives me valuable insights
                into my business performance, helping me make better decisions."
              </p>
            </blockquote>
            <footer className="mt-4">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                David
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Owner of a hardware store
              </p>
            </footer>
          </div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg">
            <img
              alt="Emily from a boutique"
              className="h-48 w-full object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD1q805cWDBWzb9CPxHQsUNjecujgiLHBi1lYyUJehKruUNdTX8nPfoplyPfqk-vTVqNNu_-H8wd5vFNYWxenzhPxJMWtEOF3cm0H_S74Xv-7mNppi3cy3NPbLw17gPo2X4TqlFPbagKb3fZ2n9GCnwRiWsZfR1n0BAQXTfIWnRTFLgikbVKXpzIwfoO5N-9RVcCNghHiOHT_66puO0BGl9q2yEGiGH4p10gD8UpnOw4R0WF-a3DDvuJCpRKVaH6vX_2qSNLrYMczv"
            />
            <blockquote className="mt-6">
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                "The low stock alerts are a lifesaver. I never miss a sale
                because I always know when to reorder."
              </p>
            </blockquote>
            <footer className="mt-4">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                Emily
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Owner of a clothing boutique
              </p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
