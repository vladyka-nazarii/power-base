import Link from "next/link";

export default function Header() {
    return (
        <header className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
            <Link href="/"><div>Logo</div></Link>
            <nav>
                <ul className="flex items-center gap-3">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/power-banks">Power Banks</Link>
                    </li>
                    <li>
                        <Link href="/power-stations">Power Stations</Link>
                    </li>
                    <li>
                        <Link href="/batteries">Batteries</Link>
                    </li>
                    <li>
                        <Link href="/inverters">Inverters</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}