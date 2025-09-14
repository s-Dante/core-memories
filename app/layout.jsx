import { Rubik } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const rubik = Rubik({
  variable: "--font-rubik",
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
        className={`${rubik.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
