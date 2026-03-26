import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/data/services'
import { locations } from '@/data/locations'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-3">
              <Image
                src="/rgt-logo.png"
                alt="RGT Rakennuspalvelut"
                width={100}
                height={30}
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Ammattimaiset rakennuspalvelut ja asbestipurku Helsingissä ja Uudellamaalla.
            </p>
            <div className="mt-6 space-y-1 text-sm text-gray-500">
              <p>Hernepellonkuja 6, 00560 Helsinki</p>
              <a href="tel:0505651646" className="block hover:text-amber-600 transition-colors">050 565 1646</a>
              <a href="mailto:info@rgt.fi" className="block hover:text-amber-600 transition-colors">info@rgt.fi</a>
              <p className="text-gray-400 text-xs mt-2">Y-tunnus: 3099600-5</p>
            </div>
          </div>

          {/* Palvelut */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Palvelut</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/palvelut/${s.slug}`}
                    className="text-sm text-gray-500 hover:text-amber-600 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Alueet */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Palvelualueet</h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/alueet/${l.slug}`}
                    className="text-sm text-gray-500 hover:text-amber-600 transition-colors"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Ota yhteyttä</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Pyydä ilmainen tarjous tai soita suoraan. Vastaamme nopeasti.
            </p>
            <Link
              href="/yhteystiedot"
              className="inline-block bg-[#F5C518] text-black text-sm font-semibold px-6 py-3 hover:bg-[#e6b800] transition-colors"
            >
              Pyydä tarjous
            </Link>
            <a
              href="tel:0505651646"
              className="block mt-3 text-sm text-gray-500 hover:text-amber-600 transition-colors"
            >
              050 565 1646
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} RGT Rakennuspalvelut. Kaikki oikeudet pidätetään.
          </p>
          <p className="text-xs text-gray-300">
            Asbestipurkulupa voimassa - Ammattimaiset rakennuspalvelut
          </p>
        </div>
      </div>
    </footer>
  )
}
