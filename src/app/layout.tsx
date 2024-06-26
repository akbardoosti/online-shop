import type { Metadata } from "next";
import { Inter } from "next/font/google";

import dynamic from "next/dynamic";
const HeaderCarousel = dynamic(() => import('./layouts/header-carousel'), { ssr: true });
import headerClasses from './styles/header.module.css';
import Header from "./layouts/header";
import "../styles/globals.css";
import {useRouter} from "next/router";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "فروشگاه آنلاین",
  description: "به منظور فروش لوازم آرایشی بهداشتی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} rtl`}>
        <div>
          <header className="bg-white shadow-md">
            <div className={`flex ${headerClasses.headerBackground}`}>
              <div className={headerClasses.maxWidth}>
                <HeaderCarousel />
              </div>
            </div>
            <div className="mx-auto flex justify-between items-center py-4">
              <Header />
            </div>
          </header>
          <main style={{width: 'calc(100% - 40px)'}} className="mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
