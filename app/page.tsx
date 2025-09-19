'use client';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      if (window.scrollY > 20) {
        navbar.classList.add("shadow-md");
      } else {
        navbar.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio | M. Hardiansyah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <nav className="navbar fixed top-0 w-full bg-white z-50 transition duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-kaushan text-main-color">
            <a href="#home">M<span className="text-black">Hardi</span></a>
          </div>
          <ul className="hidden md:flex gap-6 font-medium text-gray-700">
            <li><a href="#home" className="hover:text-main-color">Home</a></li>
            <li><a href="#about" className="hover:text-main-color">About</a></li>
            <li><a href="#portfolio" className="hover:text-main-color">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-main-color">Contact</a></li>
          </ul>
          <div className="md:hidden text-2xl cursor-pointer">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-28 pb-12 bg-gray-50 relative">
        {/* Social Icons */}
        <ul className="flex gap-4 absolute top-4 right-4 z-10">
          <li><a href="#"><i className="fab fa-facebook-f text-xl text-gray-600 hover:text-main-color"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter text-xl text-gray-600 hover:text-main-color"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram text-xl text-gray-600 hover:text-main-color"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin text-xl text-gray-600 hover:text-main-color"></i></a></li>
        </ul>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h4 className="text-lg text-main-color mb-2">Hello</h4>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">everyone</h1>
            <span className="block text-xl font-semibold mb-4 text-gray-800">
              junior Freelancer Web Developer
            </span>
            <p className="text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
              My name is M. Hardiansyah. I am a student in web development.
              I have expertise in various fields such as UI/UX design, web
              design, HTML/CSS, and JavaScript.
            </p>
            <a
              href="#contact"
              className="inline-block bg-main-color hover:bg-main-hover text-white px-6 py-2 rounded-full transition"
            >
              Call now
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/Lovepik_com-380101510-programmer-supplies-books-daily-work-illustration-mobile-workspace.png"
              alt="hero-image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </>
  );
}
