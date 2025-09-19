import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hardiansyah" },
  { label: "GitHub", href: "https://github.com/hardiansyah" },
  { label: "Dribbble", href: "https://dribbble.com/hardiansyah" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-white/60 py-10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 dark:text-slate-400">
        <p>© {year} M. Hardiansyah. Built with passion and precision.</p>
        <div className="flex flex-wrap items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.3em] text-slate-500 transition hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
