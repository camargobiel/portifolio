/* eslint-disable camelcase */

import type { Metadata } from 'next'
import { Alice } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/navbar'
import { ScrollToTop } from './components/scroll-to-top'

const font = Alice({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Portfólio Gabriel Camargo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={font.className}>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
