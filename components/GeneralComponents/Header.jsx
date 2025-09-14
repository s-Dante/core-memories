// components/Header.jsx
import Link from "next/link";
import { rubik } from "@/app/layout";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 py-2 px-8 z-50 bg-black/0 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6 sm:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/resources/svg/CM-Logo.svg"
            alt="Core Memories logo"
            className="h-18 w-auto"
          />
          <span className={`uppercase ${rubik.className} text-3xl font-bold leading-none`}>Core<br/>Memories</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 sm:gap-10 text-2xl font-bold uppercase tracking-wide">
          <Link className="hover:text-white/80 transition" href="/games">Games</Link>
          <Link className="hover:text-white/80 transition" href="/about">About</Link>
          <Link className="hover:text-white/80 transition" href="/blogs">Blog</Link>
          <Link className="hover:text-white/80 transition" href="/merch">Merch</Link>
          <Link className="hover:text-white/80 transition" href="/jobs">Jobs</Link>
        </nav>
      </div>
    </header>
  );
}
