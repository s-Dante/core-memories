import { Rubik, Varela } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

export const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const varela = Varela({
  variable: "--font-varela",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Core Memories",
  description: "Empresa de videojuegos independiente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${varela.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
