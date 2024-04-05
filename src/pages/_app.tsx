import '@/styles/globals.css'
import * as React from 'react'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next';
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
                              Component,
                              pageProps: { session, ...pageProps },
                            }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
      <div dir="rtl" className={`${inter.className}`}>
          {getLayout(<Component {...pageProps} />)}
      </div>
  )
}
