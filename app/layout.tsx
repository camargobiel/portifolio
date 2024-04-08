/* eslint-disable camelcase */

import type { Metadata } from 'next'
import { Alice } from 'next/font/google'
import './globals.css'
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
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
      />
      <body className={font.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
