import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './section/Header'

const inter = localFont({
  src: './fonts/InterVF.ttf',
  variable: '--font-inter',
  weight: '100 200 300 400 500 700 800 900',
})

const spaceGrotesk = localFont({
  src: './fonts/SpaceGroteskVF.ttf',
  variable: '--font-space-grotesk',
  weight: '300 400 500 700',
})

export const metadata: Metadata = {
  title: 'WEBO',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en suppressHydrationWarning">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
