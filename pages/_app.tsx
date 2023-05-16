import Script from 'next/script'
import Header from '@/components/header'
import useTheme, { ThemeProvider } from '@/hooks/use-theme'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useTheme()

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
