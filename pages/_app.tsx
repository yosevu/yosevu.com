import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen items-center justify-between m-8 p-8">
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
