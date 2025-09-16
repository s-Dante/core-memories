import Link from "next/link";
import { socialLinks } from '@/config';
import {varien, rubik, varela} from '@/app/layout';

const currentYear = new Date().getFullYear();

const footerClasses = `
    bg-zinc-950 
    text-zinc-200
    px-4 py-2
`;

const textClasses = `
    ${varien.className}
    text-[15rem]
    leading-50
    tracking-tighter
    w-[90%]
    inline-block
`;

const imgClasses = `
    h-50
    w-auto
    inline-block
    relative
    top-[-14%]
    right-[25%]
`;

const socialLinkNav = `
    ${rubik.className}
    font-bold
    text-4xl
    flex
    flex-row
    space-x-30
    uppercase
`;

const socialLink = `
    hover:scale-105 
    transition-transform inline-block
    nav-link
`;

const footerNavClasses = `
    ${varela.className}
    flex
    gap-4
    text-lg
    text-xs
    justify-self-center
    mt-10
    mb-none
`;

const footerRights = `
    ${varien.className}
    text-sm
    mt-4
    text-center
`;

export default function Footer() {
    return (
        <footer className={footerClasses}>
            <h2 className={textClasses}>For the love of games</h2>
            <img 
                src="/resources/svg/CM-Logo.svg" 
                alt="Logotipo de Core Memories"
                className={imgClasses} 
            />
            <div className={socialLinkNav}>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={socialLink}>Instagram</a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={socialLink}>Facebook</a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className={socialLink}>TikTok</a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className={socialLink}>YouTube</a>
                <a href={`mailto:${socialLinks.email}`} target="_blank" rel="noopener noreferrer" className={socialLink}>Email us</a>
            </div>

            <nav className={footerNavClasses}>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/faq">FAQ</Link>
            </nav>

            <p className={footerRights}>© {currentYear} Core Memories. All rights reserved.</p>
        </footer>
    );
}