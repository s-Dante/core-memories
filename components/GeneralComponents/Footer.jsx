import Link from "next/link";
import { socialLinks } from '@/config';

export default function Footer() {
    return (
        <footer>
            <h2>For the love of games</h2>
            <img src="/resources/svg/CM-Logo.svg" alt="Logotipo de Core Memories" />
            <div>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href={`mailto:${socialLinks.email}`} target="_blank" rel="noopener noreferrer">Email us</a>
            </div>

            <nav>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/faq">FAQ</Link>
            </nav>

            <p>© 2025 Core Memories. All rights reserved.</p>
        </footer>
    );
}