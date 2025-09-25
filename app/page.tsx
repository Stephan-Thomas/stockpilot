import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
