"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  const neonRing =
    "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-sky-500 before:via-cyan-400 before:to-fuchsia-500 before:opacity-80 before:blur-xl";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`navbar fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 shadow-lg backdrop-blur-xl dark:bg-slate-900/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="#home" className="group relative inline-flex items-center gap-2">
          <span
            className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 font-semibold text-slate-100 shadow-lg dark:bg-slate-100/10 ${neonRing}`}
          >
            MH
          </span>
          <span className="text-lg font-semibold tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-sky-400 dark:text-slate-100">
            Hardiansyah
          </span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-slate-700 transition-colors dark:text-slate-200">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-1 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-sky-400 after:to-fuchsia-500 after:transition-all after:duration-300 hover:text-sky-400 hover:after:w-full dark:hover:text-sky-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/60 text-slate-900 shadow-inner transition hover:scale-105 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="M12 18a6 6 0 0 0 0-12v0a6 6 0 1 1 0 12v0Z" />
                <path d="m5 3 1.4 1.4" />
                <path d="M4 12h2" />
                <path d="m5 21 1.4-1.4" />
                <path d="M12 20v2" />
                <path d="m18 19-1.4-1.4" />
                <path d="M20 12h-2" />
                <path d="m19 5-1.4 1.4" />
                <path d="M12 4V2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="M12 3a9 9 0 0 0 9 9c0 5-4 9-9 9a9 9 0 0 1 0-18Z" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/60 text-slate-900 shadow-inner transition hover:scale-105 hover:bg-white dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="M12 18a6 6 0 0 0 0-12v0a6 6 0 1 1 0 12v0Z" />
                <path d="m5 3 1.4 1.4" />
                <path d="M4 12h2" />
                <path d="m5 21 1.4-1.4" />
                <path d="M12 20v2" />
                <path d="m18 19-1.4-1.4" />
                <path d="M20 12h-2" />
                <path d="m19 5-1.4 1.4" />
                <path d="M12 4V2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
              >
                <path d="M12 3a9 9 0 0 0 9 9c0 5-4 9-9 9a9 9 0 0 1 0-18Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-100 shadow-lg transition hover:scale-105 dark:bg-slate-100/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-5 w-5"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden"
        >
          <div className="mx-6 mb-6 rounded-3xl border border-white/10 bg-white/70 p-4 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
            <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-widest text-slate-700 dark:text-slate-200">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-slate-900 shadow-inner transition hover:bg-sky-100/70 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-sky-500/10"
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : null}
    </motion.nav>
  );
}
