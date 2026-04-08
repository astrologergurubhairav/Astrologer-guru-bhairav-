import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Astrologer Guru Bhairav | Best Psychic & Astrology Services in USA',
  description: 'Astrologer Guru Bhairav offers expert psychic readings, palm reading, love problem solutions, black magic removal, and spiritual guidance. Trusted astrologer serving clients across the USA with 25+ years of experience.',
  keywords: 'astrologer, psychic reading, palm reading, love problem solution, black magic removal, spiritual healer, USA astrologer, Indian astrologer, relationship problems, marriage problems, family problems, job problems, negative energy removal',
  authors: [{ name: 'Astrologer Guru Bhairav' }],
  creator: 'Astrologer Guru Bhairav',
  publisher: 'Astrologer Guru Bhairav',
  robots: 'index, follow',
  openGraph: {
    title: 'Astrologer Guru Bhairav | Best Psychic & Astrology Services in USA',
    description: 'Expert psychic readings, palm reading, love problem solutions, and spiritual guidance. Trusted astrologer serving the USA.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Astrologer Guru Bhairav',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrologer Guru Bhairav | Best Psychic & Astrology Services',
    description: 'Expert psychic readings and spiritual guidance in the USA.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d4a853',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
