import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yosevu Kilonzo</title>
        <meta property="og:title" content="Yosevu Kilonzo" key="title" />

        <meta name="description" content="Yosevu Kilonzo's personal website." />
        <meta property="og:description" content="Yosevu Kilonzo's personal website." />
      </Head>
      <main className="min-h-screen max-w-screen-md items-center justify-between m-8 p-8 md:flex md:items-start md:gap-24">
        <Header />
        <div className="md:gap-8">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}
