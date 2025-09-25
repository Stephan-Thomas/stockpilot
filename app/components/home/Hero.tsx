import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[560px] flex items-center justify-center text-center text-white rounded-xl m-4 overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAylFDFCTHmulPYmphdsRJdNyVU_ja5tkob6eJhDNB1f_qHB8k602eCqjAjXbcEpz-_GZjK8YBDmsKm8z-nCtiXo5ZDxo15tOhbVxvXyhSbVjWoXlKOyiS7Aq2Nilwg_UJUAflaOFyaI9ek1ZcABxnexQBt975LD9mBnp-GCsW5U-dT_CPy35mzqGUstqPrZxbdh4Uk_qMw59UC6NsxKL8ro2YwcSLGLRR-eARASyRIjmVWCZAyXc7d4JmWDQMlxZeycdoPIP5MCKuf")`,
      }}
    >
      <div className="gradient-overlay"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Track Your Shop’s Sales &amp; Inventory Easily
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-200">
          Simplify your shop management with our intuitive platform. Track
          sales, manage inventory, and gain insights to grow your business.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-[#13a4ec] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#13a4ec]/90 transition-colors">
            Get Started
          </button>
          <button className="bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-lg hover:bg-white/30 dark:hover:bg-white/20 transition-colors">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
