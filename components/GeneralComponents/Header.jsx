import Link from "next/link";

export default function Header() {
    return (
        <header >
            <Link href="/" >
                <img src="/resources/svg/CM-Logo.svg" alt="Core Memories Logo" />
                <span>Core Memories</span>
            </Link>

            <nav>
                <Link href="/games">Games</Link>
                <Link href="/about">About</Link>
                <Link href="/blogs">Blog</Link>
                <Link href="/merch">Merch</Link>
                <Link href="/jobs">Jobs</Link>
            </nav>
        </header>
    );
}