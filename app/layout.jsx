import { Rubik, Varela } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import localFont from "next/font/local";

export const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const varien = localFont({
  src: "../assets/fonts/Varien.ttf",
  variable: "--font-varien"
});

export const varela = Varela({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: "400"
});

const bodyClasses = `
  ${varela.className} ${rubik.variable} ${varien.variable}
  antialiased 
  scrollbar
  min-h-screen
  grid grid-templete-rows-[auto-1fr_auto]
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyClasses} >
        <Header />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
