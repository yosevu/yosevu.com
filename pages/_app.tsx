import { createContext, useContext, useState } from 'react'
import Header from '@/components/header'
import useTheme, { ThemeContextType, ThemeProvider } from '@/hooks/use-theme'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <Head>
        <title>Yosevu Kilonzo</title>
        <meta property="og:title" content="Yosevu Kilonzo" key="title" />

        <meta name="description" content="Yosevu Kilonzo's personal website." />
        <meta
          property="og:description"
          content="Yosevu Kilonzo's personal website."
        />
      </Head>
      <ThemeProvider value={[theme, toggleTheme]}>
        <div className={theme}>
          <main
            className={`bg-slight-brown dark:bg-black dark:text-slight-brown px-16 py-16 md:flex md:items-start md:gap-24`}
          >
            <Header />
            <div className="md:gap-8 min-h-screen max-w-screen-sm">
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}
