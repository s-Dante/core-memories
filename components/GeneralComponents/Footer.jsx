// components/GeneralComponents/Footer.jsx
import Link from "next/link";
import { socialLinks } from '@/config';
import { varien, rubik, varela } from '@/app/layout';

const currentYear = new Date().getFullYear();

const footerClasses = `
    bg-zinc-950 
    text-zinc-200
    px-4 sm:px-8 py-12
    z-20
    text-center sm:text-left
`;

const textClasses = `
    ${varien.className}
    text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] // Ajustado para ser responsivo
    leading-none
    tracking-tighter
    mb-10
`;

const socialLinkNav = `
    ${rubik.className}
    font-bold
    text-2xl sm:text-3xl lg:text-4xl
    flex flex-wrap justify-center sm:justify-start
    gap-x-8 sm:gap-x-12 gap-y-4
    uppercase
`;

const socialLink = `
    hover:scale-105 
    transition-transform inline-block
    nav-link
`;

const footerNavClasses = `
    flex flex-wrap justify-center gap-4 sm:gap-6
    text-sm
    mt-10
`;

const footerRights = `
    ${varien.className}
    text-sm
    mt-8
    text-center
    opacity-70
`;

export default function Footer() {
    return (
        <footer className={footerClasses}>
            <h2 className={textClasses}>For the love of games</h2>
            
            <div className={socialLinkNav}>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={socialLink}>Instagram</a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={socialLink}>Facebook</a>
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className={socialLink}>TikTok</a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className={socialLink}>YouTube</a>
                <a href={`mailto:${socialLinks.email}`} target="_blank" rel="noopener noreferrer" className={socialLink}>Email us</a>
            </div>

            {/* Pregunta: Estos links estaban ocultos con style={{display: "none"}}. 
              ¿Quieres mostrarlos? Si no, puedes eliminar este <nav>. 
              Los he dejado visibles por ahora.
            */}
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