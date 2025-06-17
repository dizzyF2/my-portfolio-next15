import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";
import StarField from "@/components/Starfield";


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Faris Abdelbagi",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={` ${playfair.className} ${inter.className} antialiased`}
      >
        <StarField />
        <Header />
        <div className="flex flex-col items-center justify-center my-24">
          {children}
        </div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
