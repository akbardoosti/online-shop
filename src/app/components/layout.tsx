"use client";

import React from 'react';
import HeaderCarousel from "@/app/layouts/header-carousel";
import Header from "@/app/layouts/header";
// import Header from "@/app/layouts/header";
// import HeaderCarousel from "@/app/layouts/header-carousel";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header className="bg-white shadow-md">
                <div className={`flex`}>
                    <div>
                        {/*<HeaderCarousel/>*/}
                    </div>
                </div>
                <div className="mx-auto flex justify-between items-center py-4">
                    <Header/>
                </div>
            </header>
            <main style={{width: 'calc(100% - 40px)'}} className="mx-auto">{children}</main>
        </div>
    );
}