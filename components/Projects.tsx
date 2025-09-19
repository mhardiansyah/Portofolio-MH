"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    demo: string;
    github: string;
  };
};

const PROJECTS: Project[] = [
  {
    title: "NeuraSpace Platform",
    description:
      "AI-driven dashboard for monitoring space-tech projects with real-time collaboration and design system integration.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "/projects/neuraverse.svg",
    links: {
      demo: "https://example.com/neuraspace",
      github: "https://github.com/example/neuraspace",
    },
  },
  {
    title: "Pulse Mobile Banking",
    description:
      "Hybrid mobile application delivering frictionless financial journeys with biometric security and motion design.",
    tech: ["React Native", "Expo", "Reanimated", "Figma"],
    image: "/projects/pulse-app.svg",
    links: {
      demo: "https://example.com/pulse-app",
      github: "https://github.com/example/pulse-app",
    },
  },
  {
    title: "Aether Portfolio Builder",
    description:
      "Composable portfolio generator for creatives featuring drag & drop layouts, theme engine, and analytics.",
    tech: ["Next.js", "GraphQL", "Framer", "PlanetScale"],
    image: "/projects/aether-ui.svg",
    links: {
      demo: "https://example.com/aether",
      github: "https://github.com/example/aether",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Selected Projects
          </h2>
          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Exploring cutting-edge interfaces, future-ready mobile experiences, and polished digital products for ambitious brands.
          </p>
        </div>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:border-sky-400/40 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
        >
          Start a project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4"
          >
            <path d="m5 5 14 14" />
            <path d="M19 5v14H5" />
          </svg>
        </Link>
      </motion.div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/70 shadow-[0_25px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl transition hover:-translate-y-3 hover:border-sky-400/40 hover:shadow-[0_40px_90px_rgba(14,165,233,0.25)] dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-sky-500/10 to-fuchsia-500/20 opacity-0 transition duration-500 group-hover:opacity-100" />
              <Image
                src={project.image}
                alt={project.title}
                width={580}
                height={380}
                className="w-full transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6 p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                <Link
                  href={project.links.demo}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                  >
                    <path d="m7 17 9-9" />
                    <path d="M8 7h8v8" />
                  </svg>
                </Link>
                <Link
                  href={project.links.github}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:-translate-y-1 hover:border-sky-400/40 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-4 w-4"
                  >
                    <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77S17.91 1.65 15 3.5a13.38 13.38 0 0 0-6 0C6.09 1.65 4.09 2 4.09 2a5.07 5.07 0 0 0-.09 3.77 5.44 5.44 0 0 0-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 17.13V21" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
