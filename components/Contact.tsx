"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hardiansyah",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-5 w-5"
      >
        <path d="M8 11v8" />
        <path d="M8 7v.01" />
        <path d="M12 16v-5" />
        <path d="M16 19v-6a3 3 0 0 0-6 0" />
        <path d="M4 12v8" />
        <path d="M20 12v8" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/hardiansyah",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-5 w-5"
      >
        <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77S17.91 1.65 15 3.5a13.38 13.38 0 0 0-6 0C6.09 1.65 4.09 2 4.09 2a5.07 5.07 0 0 0-.09 3.77 5.44 5.44 0 0 0-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 17.13V21" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/hardiansyah",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m6.6 5.3 10.8 13.4" />
        <path d="M5.1 12.9c4.7-1.7 8.2-1.6 13.8-.8" />
        <path d="M7 17c4.2-5.2 5.4-8.6 7.7-13.7" />
      </svg>
    ),
  },
];

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Errors = {};

    if (!formValues.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formValues.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/u.test(formValues.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formValues.message.trim()) {
      nextErrors.message = "Share a short brief about your project.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStatus("Thank you! Your message is on its way.");
      setFormValues({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="grid gap-12 lg:grid-cols-[1fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
          Let’s craft your next breakthrough experience.
        </h2>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          I partner with forward-thinking teams to build impactful products. Share your vision and I’ll respond within 24 hours with a tailored proposal.
        </p>
        <div className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Connect
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-transparent bg-slate-900/90 px-4 py-2 text-sm font-medium text-white shadow-[0_0_25px_rgba(129,140,248,0.25)] transition hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.65)] dark:bg-slate-800"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white shadow-lg transition group-hover:scale-105">
                  {social.icon}
                </span>
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="glass-panel rounded-3xl p-8"
      >
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, name: event.target.value }))
              }
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-300/70 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
              placeholder="Your name"
              required
            />
            {errors.name ? (
              <p className="mt-1 text-xs text-pink-400">{errors.name}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, email: event.target.value }))
              }
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-300/70 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
              placeholder="you@mail.com"
              required
            />
            {errors.email ? (
              <p className="mt-1 text-xs text-pink-400">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={(event) =>
                setFormValues((prev) => ({ ...prev, message: event.target.value }))
              }
              className="mt-2 h-36 w-full resize-none rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-300/70 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
              placeholder="Tell me about your timeline, goals, and expectations."
              required
            />
            {errors.message ? (
              <p className="mt-1 text-xs text-pink-400">{errors.message}</p>
            ) : null}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-fuchsia-500 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition hover:scale-105"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-4 w-4"
            >
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4Z" />
            </svg>
          </button>
          {status ? (
            <p className="text-xs text-slate-600 dark:text-slate-300">{status}</p>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              I respect your inbox — no spam, ever.
            </p>
          )}
        </div>
      </motion.form>
    </section>
  );
}
