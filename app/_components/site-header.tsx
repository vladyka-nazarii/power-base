import Link from "next/link";
import { mainNavigation } from "@/app/_config/navigation";

export default function SiteHeader() {
  return (
    <header className='border-black/10 border-b h-10 flex items-center justify-between px-5'>
      <Link href='/'>
        <div>Logo</div>
      </Link>
      <nav>
        <ul className='flex items-center gap-3'>
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
