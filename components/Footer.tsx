import Link from 'next/link'
import { services } from '@/data/services'
import { locations } from '@/data/locations'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-white font-bold text-lg tracking-tight hover:text-[#F5C518] transition-colors">
              RGT Rakennuspalvelut
            </Link>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Ammattimaiset rakennuspalvelut ja asbestipurku Helsingissä ja Uudellamaalla.
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/50">
              <p>Hernepellonkuja 6, 00560 Helsinki</p>
              <a href="tel:0505651646" className="block hover:text-[#F5C518] transition-colors">050 565 1646</a>
              <a href="mailto:info@rgt.fi" className="block hover:text-[#F5C518] transition-colors">info@rgt.fi</a>
              <p className="text-white/30 text-xs mt-2">Y-tunnus: 3099600-5</p>
            </div>
          </div>

          {/* Palvelut */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Palvelut</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/palvelut/${s.slug}`}
                    className="text-sm text-white/60 hover:text-[#F5C518] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Alueet */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Palvelualueet</h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/alueet/${l.slug}`}
                    className="text-sm text-white/60 hover:text-[#F5C518] transition-colors"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Ota yhteyttä</h3>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
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
              className="block mt-3 text-sm text-white/60 hover:text-[#F5C518] transition-colors"
            >
              050 565 1646
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} RGT Rakennuspalvelut. Kaikki oikeudet pidatetaan.
          </p>
          <p className="text-xs text-white/20">
            Asbestipurkulupa voimassa - Ammattimaiset rakennuspalvelut
          </p>
        </div>
      </div>
    </footer>
  )
}
