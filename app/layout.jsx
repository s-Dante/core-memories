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

export const metadata = {
  title: "Core Memories",
  description: "Empresa de videojuegos independiente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${varela.className} ${rubik.variable} ${varien.variable} 
        antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
