import Link from "next/link";
import { rubik } from "../../app/layout";
import "../GeneralComponents/Header.css";


const headerClasses = `
    ${rubik.className} font-bold text-zinc-200 header
    bg-gradient-to-b from-black/80 via-black/50 to-transparent
    backdrop-blur-sm sticky top-0 z-50 px-15 py-4
    flex justify-between items-center
`;

const logoLinkClasses = `
    justify-center items-center flex
`;

const logoImgsClasses = `
    h-20 w-auto inline-block mr-3
`;

const logoTextClasses = `
    text-4xl w-50 leading-8 inline-block uppercase
`;

const linkClasses = ` 
    hover:scale-105 
    transition-transform inline-block
    nav-link
    uppercase
    text-2xl
`;

export default function Header() {
    return (
        <header className={headerClasses}>
            <Link href="/" className={logoLinkClasses}>
                <img
                    src="/resources/svg/CM-Logo.svg"
                    alt="Core Memories Logo"
                    className={logoImgsClasses}
                />
                <p className={logoTextClasses}>Core Memories</p>
            </Link>

            <nav className="space-x-10 text-2xl">
                <Link href="/games" className={linkClasses}>Games</Link>
                <Link href="/about" className={linkClasses}>About</Link>
                <Link href="/blogs" className={linkClasses}>Blog</Link>
                <Link href="/merch" className={linkClasses}>Merch</Link>
                <Link href="/jobs" className={linkClasses}>Jobs</Link>
            </nav>
        </header>
    );
}