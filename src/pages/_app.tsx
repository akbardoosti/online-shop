import '@/styles/globals.css'
import * as React from 'react'
import type {AppProps} from 'next/app'
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next';
import {Inter} from "next/font/google";
import {ThemeProvider} from "@material-tailwind/react";
import {RouterProvider} from "@/app/components/router-provider";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App(
    {
        Component,
        pageProps: {session, ...pageProps},
    }: AppPropsWithLayout) {

    return (
        <RouterProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div dir="rtl" className={`overflow-y-hidden`} style={{position:"relative"}}>
                <ThemeProvider>
                    {/*<Layout>*/}
                        <Component {...pageProps} />
                    {/*</Layout>*/}
                </ThemeProvider>
            </div>
        </RouterProvider>
    )
}
