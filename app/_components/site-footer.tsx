import type { SVGProps } from "react";

import type { getDictionary } from "@/lib/i18n";

type SiteFooterProps = {
  dictionary: ReturnType<typeof getDictionary>;
};

type Technology = {
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode;
};

const repositoryUrl = "https://github.com/vladyka-nazarii/power-base";

const technologies: Technology[] = [
  { name: "Next.js", Icon: NextIcon },
  { name: "Bun", Icon: BunIcon },
  { name: "PostgreSQL", Icon: PostgresIcon },
  { name: "Drizzle ORM", Icon: DrizzleIcon },
  { name: "Redis", Icon: RedisIcon },
  { name: "Docker", Icon: DockerIcon },
];

function NextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8.5 16V8l7 8V8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function BunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.25 8.25c-.7-2.1.1-3.85 1.5-4.75.8 1.15 1.05 2.35.76 3.59M16.75 8.25c.7-2.1-.1-3.85-1.5-4.75-.8 1.15-1.05 2.35-.76 3.59"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 13.5c0-3.59 3.36-6.5 7.5-6.5s7.5 2.91 7.5 6.5S16.14 20 12 20s-7.5-2.91-7.5-6.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 13h.01M15 13h.01M10 16c1.15.72 2.85.72 4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PostgresIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 7c0-1.66 2.69-3 6-3s6 1.34 6 3v10c0 1.66-2.69 3-6 3s-6-1.34-6-3V7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 7c0 1.66-2.69 3-6 3S6 8.66 6 7M18 12c0 1.66-2.69 3-6 3s-6-1.34-6-3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function DrizzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.5 13.5h8.75a3.25 3.25 0 0 0 .65-6.43A5.75 5.75 0 0 0 6.02 8.8 2.4 2.4 0 0 0 7.5 13.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m8 18 1-2M12 20l1-3M16 18l1-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function RedisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function DockerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 13h15.5c-.53 3.95-3.47 6-8 6H9c-2.76 0-5-2.24-5-5v-1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M7 10h3v3H7zM10 10h3v3h-3zM13 10h3v3h-3zM10 7h3v3h-3zM13 7h3v3h-3zM18.5 11.5h2"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.06c.98 0 1.94.13 2.86.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.79 1.07.79 2.16v3.14c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-black/10 px-5 py-6 text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-normal text-zinc-400 uppercase dark:text-zinc-500">
            {dictionary.common.footerProjectLabel}
          </p>
          <p className="font-medium text-zinc-700 dark:text-zinc-200">
            {dictionary.common.footer}
          </p>
          <a
            href={repositoryUrl}
            className="focus-visible:ring-ring/50 inline-flex items-center gap-2 rounded-md text-zinc-600 transition hover:text-black focus-visible:ring-3 focus-visible:outline-none dark:text-zinc-300 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="size-4" />
            <span>{dictionary.common.footerSourceLabel}</span>
            <span className="text-zinc-400 dark:text-zinc-500">
              vladyka-nazarii/power-base
            </span>
          </a>
        </div>
        <div className="space-y-2 md:text-right">
          <p className="text-xs font-medium tracking-normal text-zinc-400 uppercase dark:text-zinc-500">
            {dictionary.common.footerStackLabel}
          </p>
          <ul className="flex max-w-3xl flex-wrap gap-2 md:justify-end">
            {technologies.map(({ name, Icon }) => (
              <li key={name}>
                <span className="inline-flex h-8 items-center gap-2 rounded-md border border-black/10 bg-zinc-50 px-2.5 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200">
                  <Icon className="size-3.5" aria-hidden="true" />
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
