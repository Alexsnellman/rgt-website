import Link from 'next/link'
import { services } from '@/data/services'

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Palvelut</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Kaikki rakennuspalvelut
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl text-lg">
            Ammattimaiset rakennuspalvelut yhdeltä tiimiltä - nopeasti ja huolella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/palvelut/${s.slug}`}
              className={`group block bg-white p-8 hover:bg-gray-50 transition-colors ${
                s.featured ? 'border-t-2 border-[#F5C518]' : ''
              }`}
            >
              {s.featured && (
                <div className="mb-4">
                  <span className="text-xs font-semibold text-amber-600 border border-amber-200 bg-amber-50 px-2 py-0.5">
                    Pääpalvelu
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.shortDesc}</p>
              <span className="text-xs font-medium text-amber-600 flex items-center gap-1">
                Lue lisää
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
