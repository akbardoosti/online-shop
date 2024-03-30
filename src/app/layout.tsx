import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Link from "next/link";
import dynamic from "next/dynamic";
// import HeaderCarousel from "./layouts/header-carousel";
const HeaderCarousel = dynamic(() => import('./layouts/header-carousel'), { ssr: true });
import headerClasses from './styles/header.module.css';
import { useState } from "react";
import Header from "./layouts/header";
=======

>>>>>>> caddb2f800e226cd00c8f6193c7a788e13bbb9f8
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} rtl`}>
        <div>
          <header className="bg-white shadow-md">
            <div className={`flex ${headerClasses.headerBackground}`}>
              <div className={headerClasses.maxWidth}>
                <HeaderCarousel />
              </div>
            </div>
            <div className="container mx-auto flex justify-between items-center py-4">
              <Header />
            </div>
          </header>
          <main style={{width: 'calc(100% - 40px)'}} className="mx-auto">{children}</main>
        </div>
      </body>
=======
      <body className={inter.className}>{children}</body>
>>>>>>> caddb2f800e226cd00c8f6193c7a788e13bbb9f8
    </html>
  );
}
