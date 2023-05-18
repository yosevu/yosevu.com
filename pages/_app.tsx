import Script from 'next/script'
import Header from '@/components/header'
import { ThemeProvider } from '@/hooks/use-theme'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Theme from '@/components/theme'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default function App({ Component, pageProps }: AppProps) {
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
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0XRWZ5R5HC"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date())
            gtag('config', 'G-0XRWZ5R5HC')
          }
        `}
      </Script>
      <ThemeProvider>
        <Theme>
          <main
            className={`h-screen bg-slight-brown dark:bg-black dark:text-slight-brown p-8 md:p-16 md:flex md:items-start md:gap-24`}
          >
            <Header />
            <div className="md:gap-8 max-w-screen-sm">
              <Component {...pageProps} />
            </div>
          </main>
        </Theme>
      </ThemeProvider>
    </>
  )
}
