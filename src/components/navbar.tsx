import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/about">Sobre</Link>
                </li>
                <li>
                <Link href="/contact">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}