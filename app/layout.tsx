import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'RGT Rakennuspalvelut - Asbestipurku ja Rakennuspalvelut Helsinki',
  description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Helsingissä ja Uudellamaalla. Asbestipurkulupa voimassa. Nopea aikataulu, kiinteä hinta.',
  openGraph: {
    siteName: 'RGT Rakennuspalvelut',
    locale: 'fi_FI',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
