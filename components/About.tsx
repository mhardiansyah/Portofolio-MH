"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CORE_SKILLS = [
  "React Ecosystem",
  "Next.js Expert",
  "Mobile Development",
  "UI/UX Strategy",
];

const TECH_STACK = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React Native", icon: "/icons/react-native.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
];

export default function About() {
  return (
    <section
      id="about"
      className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_1.05fr] lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[3rem] border border-white/10 bg-white/60 p-6 shadow-[0_30px_60px_rgba(14,116,144,0.25)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-fuchsia-500/20 blur-3xl" />
          <div className="relative rounded-[2.2rem] bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-800 p-6 shadow-2xl">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Profile
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                  8+ yrs exp.
                </span>
              </div>
              <Image
                src="/about-profile.svg"
                alt="Hardiansyah collaborative workspace"
                width={520}
                height={520}
                className="w-full"
              />
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Focus</p>
                  <p className="font-semibold">Crafting digital products</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500/60 to-fuchsia-500/60 text-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-6 w-6"
                  >
                    <path d="m12 5 6 3-6 3-6-3 6-3Z" />
                    <path d="m6 11 6 3 6-3" />
                    <path d="m6 15 6 3 6-3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Creating transformative products with empathy and technology.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200">
            With a strong foundation in design systems and full-stack development, I help teams move quickly from idea to polished solution. My workflow blends research, prototyping, and clean engineering to deliver experiences that scale.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {CORE_SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-inner transition hover:border-sky-400/40 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-sky-300"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Tech Stack
          </p>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {TECH_STACK.map((tech) => (
              <motion.li
                key={tech.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/70 p-5 text-center shadow-lg backdrop-blur-lg transition hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-[0_20px_50px_rgba(56,189,248,0.25)] dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-900/80 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition group-hover:scale-105 dark:bg-slate-900/80">
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                </span>
                <span className="text-sm font-semibold text-slate-700 transition group-hover:text-sky-500 dark:text-slate-200 dark:group-hover:text-sky-300">
                  {tech.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
