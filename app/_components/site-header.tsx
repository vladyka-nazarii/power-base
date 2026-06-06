import Link from "next/link";
import { mainNavigation } from "@/app/_config/navigation";
import ThemeSwitcher from "@/app/_components/theme-switcher";

export default function SiteHeader() {
  return (
    <header className="flex h-10 items-center justify-between border-b border-black/10 px-5 dark:border-white/10">
      <Link href="/">
        <div>Logo</div>
      </Link>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex items-center gap-3">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
