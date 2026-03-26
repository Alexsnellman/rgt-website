'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { activeLocations } from '@/data/locations'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [alueetOpen, setAlueetOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/rgt-logo.png"
            alt="RGT Rakennuspalvelut"
            width={180}
            height={54}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Palvelut dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              Palvelut
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-white border border-gray-200 shadow-lg py-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/palvelut/${s.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                    >
                      {s.name}
                      {s.featured && <span className="ml-2 w-1.5 h-1.5 bg-[#F5C518] rounded-full inline-block align-middle" />}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Alueet dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAlueetOpen(true)}
            onMouseLeave={() => setAlueetOpen(false)}
          >
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
              Alueet
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {alueetOpen && (
              <div className="absolute top-full left-0 pt-2 w-48">
                <div className="bg-white border border-gray-200 shadow-lg py-2">
                  {activeLocations.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/alueet/${l.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-amber-600 hover:bg-gray-50 transition-colors"
                    >
                      {l.city}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/yhteystiedot" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Yhteystiedot
          </Link>
        </nav>

        {/* CTA + phone */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:0505651646" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">
            050 565 1646
          </a>
          <Link
            href="/yhteystiedot"
            className="bg-[#F5C518] text-black text-sm font-semibold px-5 py-2 hover:bg-[#e6b800] transition-colors"
          >
            Pyydä tarjous
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-900 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Valikko"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Palvelut</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/palvelut/${s.slug}`}
                className="block py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-3" />
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Alueet</p>
            {activeLocations.map((l) => (
              <Link
                key={l.slug}
                href={`/alueet/${l.slug}`}
                className="block py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.city}
              </Link>
            ))}
            <div className="border-t border-gray-200 my-3" />
            <Link
              href="/yhteystiedot"
              className="block py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Yhteystiedot
            </Link>
            <a
              href="tel:0505651646"
              className="block py-2 text-sm text-[#F5C518] font-semibold"
            >
              Soita: 050 565 1646
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
