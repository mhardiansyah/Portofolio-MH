import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative isolate">
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
          <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-3xl animate-aurora" />
          <div className="absolute right-[-15%] top-[25%] h-[28rem] w-[28rem] rounded-full bg-pink-400/25 blur-3xl animate-aurora" />
          <div className="absolute left-[-20%] bottom-[-10%] h-[24rem] w-[24rem] rounded-full bg-indigo-500/20 blur-3xl animate-aurora" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-24 pt-32 sm:px-8 lg:px-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
