"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid gap-14 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="flex flex-col gap-8"
      >
        <span className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/20 bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-sky-100">
          Available for new projects · 2025
        </span>
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I’m <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">Hardiansyah</span> — Web &amp; Mobile Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-200"
          >
            I design and build immersive digital experiences focused on performance, accessibility, and delightful interactions. Specialised in crafting modern web and mobile applications with a human touch.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/hardiansyah-cv.pdf"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition-transform duration-300 hover:scale-105"
            download
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-4 w-4"
            >
              <path d="m12 5 0 14" />
              <path d="m6 13 6 6 6-6" />
              <path d="M5 19h14" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-900/10 bg-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-inner transition hover:-translate-y-1 hover:border-sky-400/40 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-4 w-4"
            >
              <path d="m5 12 14-7-7 14-2-5-5-2Z" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative flex items-center justify-center"
      >
        <div className="relative h-[340px] w-[340px] max-w-full rounded-[3rem] border border-white/10 bg-white/60 p-6 shadow-[0_30px_80px_rgba(59,130,246,0.25)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-fuchsia-500/20 blur-2xl" />
          <div className="relative flex h-full flex-col items-center justify-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-800 p-8 text-center text-slate-100 shadow-2xl dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-800">
            <div className="relative">
              <span className="absolute inset-0 -z-10 animate-aurora rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-fuchsia-400 opacity-60 blur-xl" />
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-slate-100/20 bg-slate-900/70 shadow-[0_0_40px_rgba(14,165,233,0.35)] dark:bg-slate-900/70">
                <Image
                  src="/profile-aurora.svg"
                  alt="Hardiansyah avatar"
                  width={180}
                  height={180}
                  priority
                  className="h-28 w-28 animate-float"
                />
              </div>
            </div>
            <p className="max-w-xs text-sm text-slate-300">
              Building interfaces that feel alive, intuitive, and future-ready.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
