import Link from 'next/link'
import { services } from '@/data/services'

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Palvelut</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Kaikki rakennuspalvelut
          </h2>
          <p className="mt-4 text-white/50 max-w-xl text-lg">
            Ammattimaiset rakennuspalvelut yhdelta tiimilta - nopeasti ja huolella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/palvelut/${s.slug}`}
              className={`group block bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors ${
                s.featured ? 'border-t-2 border-[#F5C518]' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{s.icon}</span>
                {s.featured && (
                  <span className="text-xs font-semibold text-[#F5C518] border border-[#F5C518]/30 px-2 py-0.5">
                    Paaapalvelu
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#F5C518] transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{s.shortDesc}</p>
              <span className="text-xs font-medium text-[#F5C518] flex items-center gap-1">
                Lue lisaa
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
