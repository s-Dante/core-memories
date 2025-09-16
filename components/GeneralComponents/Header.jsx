import Link from "next/link";
import { rubik } from "../../app/layout";

const linkclasses = "hover:underline hover:underline-offset-8 transition-all wiggle-underline";

export default function Header() {
    return (
        <header className={
            `${rubik.className} font-bold header
            bg-gradient-to-b from-black/80 via-black/50 to-transparent
            backdrop-blur-sm sticky top-0 z-50 px-15 py-4
            flex justify-between items-center`
        }>
            <Link href="/" >
                <img src="/resources/svg/CM-Logo.svg" alt="Core Memories Logo"
                    className="h-22 w-auto inline-block mr-3"
                />
                <span className="text-3xl w-50">Core Memories</span>
            </Link>

            <nav className="space-x-10 text-2xl">
                <Link href="/games" className={linkclasses}>Games</Link>
                <Link href="/about" className={linkclasses}>About</Link>
                <Link href="/blogs" className={linkclasses}>Blog</Link>
                <Link href="/merch" className={linkclasses}>Merch</Link>
                <Link href="/jobs" className={linkclasses}>Jobs</Link>
            </nav>
        </header>
    );
}