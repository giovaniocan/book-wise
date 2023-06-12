/* eslint-disable camelcase */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({ subsets: ['latin'] })

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
