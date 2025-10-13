"use client"; // Necesario para usar el estado (useState)

import Link from "next/link";
import { rubik } from "../../app/layout";
import "../GeneralComponents/Header.css";
import { useState } from "react";

const headerClasses = `
    ${rubik.className} header
    fixed inset-x-0 top-0 z-50
    bg-gradient-to-b from-black/80 via-black/50 to-transparent
    backdrop-blur-sm 
    px-6 sm:px-10 lg:px-15 py-4
    flex items-center justify-between
    text-zinc-200 font-bold
`;

const logoLinkClasses = `
    flex items-center gap-3 z-10
`;

const logoImgsClasses = `
    h-20 w-auto
`;

const logoTextClasses = `
    text-4xl leading-8 uppercase hidden sm:inline-block
    w-[70%]
`;

const linkClasses = ` 
    hover:scale-105 
    transition-transform
    nav-link
    uppercase
    text-3xl
`;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={headerClasses}>
            <Link href="/" className={logoLinkClasses}>
                {/* ⚠️ RECUERDA: El archivo SVG está vacío. Debes agregarle contenido para que se vea el logo. */}
                <img
                    src="/resources/svg/CM-Logo.svg"
                    alt="Core Memories Logo"
                    className={logoImgsClasses}
                />
                <p className={logoTextClasses}>Core Memories</p>
            </Link>

            {/* Navegación para Escritorio */}
            <nav className="hidden lg:flex items-center space-x-10">
                <Link href="/games" className={linkClasses}>Games</Link>
                <Link href="/about" className={linkClasses}>About</Link>
                <Link href="/blogs" className={linkClasses}>Blog</Link>
                <Link href="/merch" className={linkClasses}>Merch</Link>
                <Link href="/jobs" className={linkClasses}>Jobs</Link>
            </nav>

            {/* Botón de Menú Móvil */}
            <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative">
                    <svg className="w-15 h-15 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Panel de Menú Móvil */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center">
                    <nav className="flex flex-col items-center gap-8">
                        <Link href="/games" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Games</Link>
                        <Link href="/about" className={linkClasses} onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/blogs" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        <Link href="/merch" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Merch</Link>
                        <Link href="/jobs" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Jobs</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}





// "use client"; // Necesario para usar hooks como useState y useEffect

// import Link from "next/link";
// import { rubik } from "../../app/layout";
// import "../GeneralComponents/Header.css";
// import { useState, useEffect } from "react";

// // Clases base del header
// const baseHeaderClasses = `
//     ${rubik.className} header
//     fixed inset-x-0 top-0 z-50
//     px-6 sm:px-10 lg:px-15 py-4
//     flex items-center justify-between
//     text-zinc-200 font-bold
//     transition-colors duration-300 // Añadimos una transición suave
// `;

// // Clases cuando se hace scroll
// const scrolledHeaderClasses = `
//     bg-gradient-to-b from-black/80 via-black/50 to-transparent
//     backdrop-blur-sm 
// `;

// const logoLinkClasses = `
//     flex items-center gap-3 z-10
// `;

// const logoImgsClasses = `
//     h-20 w-auto
// `;

// const logoTextClasses = `
//     text-4xl leading-8 uppercase hidden sm:inline-block
//     w-[70%]
// `;

// const linkClasses = ` 
//     hover:scale-105 
//     transition-transform
//     nav-link
//     uppercase
//     text-3xl
// `;

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             // Si el scroll vertical es mayor a 10px, activamos el estado
//             if (window.scrollY > 10) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         // Añadimos el listener cuando el componente se monta
//         window.addEventListener('scroll', handleScroll);

//         // Limpiamos el listener cuando el componente se desmonta para evitar fugas de memoria
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     // Combinamos las clases dinámicamente
//     const headerClasses = `${baseHeaderClasses} ${isScrolled ? scrolledHeaderClasses : ''}`;

//     return (
//         <header className={headerClasses}>
//             <Link href="/" className={logoLinkClasses}>
//                 <img
//                     src="/resources/svg/CM-Logo.svg"
//                     alt="Core Memories Logo"
//                     className={logoImgsClasses}
//                 />
//                 <p className={logoTextClasses}>Core Memories</p>
//             </Link>

//             {/* Navegación para Escritorio */}
//             <nav className="hidden lg:flex items-center space-x-10 text-4xl">
//                 <Link href="/games" className={linkClasses}>Games</Link>
//                 <Link href="/about" className={linkClasses}>About</Link>
//                 <Link href="/blogs" className={linkClasses}>Blog</Link>
//                 <Link href="/merch" className={linkClasses}>Merch</Link>
//                 <Link href="/jobs" className={linkClasses}>Jobs</Link>
//             </nav>

//             {/* Botón de Menú Móvil */}
//             <div className="lg:hidden">
//                 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative">
//                     <svg className="w-15 h-15 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         {isMenuOpen ? (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         ) : (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                         )}
//                     </svg>
//                 </button>
//             </div>

//             {/* Panel de Menú Móvil */}
//             {isMenuOpen && (
//                 <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center">
//                     <nav className="flex flex-col items-center gap-8">
//                         <Link href="/games" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Games</Link>
//                         <Link href="/about" className={linkClasses} onClick={() => setIsMenuOpen(false)}>About</Link>
//                         <Link href="/blogs" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Blog</Link>
//                         <Link href="/merch" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Merch</Link>
//                         <Link href="/jobs" className={linkClasses} onClick={() => setIsMenuOpen(false)}>Jobs</Link>
//                     </nav>
//                 </div>
//             )}
//         </header>
//     );
// }