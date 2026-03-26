import Link from 'next/link'

interface HeroSectionProps {
  city?: string
  service?: string
}

export default function HeroSection({ city, service }: HeroSectionProps) {
  const headline = service
    ? `${service} - Ammattilaiset paikalle nopeasti`
    : city
    ? `Asbestipurku ja Rakennuspalvelut ${city}ssa`
    : 'Asbestipurku ja Rakennuspalvelut Helsingissa'

  const sub = city
    ? `RGT Rakennuspalvelut tarjoaa ammattimaiset rakennuspalvelut ${city}ssa. Asbestipurkulupa voimassa. Nopea aikataulu, siisti tyo.`
    : 'Voimassa oleva asbestipurkulupa. Purku-urakat, keittiöremontit, saneeraukset ja loppusiivous - kaikki saman katon alta.'

  return (
    <section className="pt-16 min-h-[85vh] flex items-center bg-white relative overflow-hidden">
      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C518]" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Asbestipurkulupa voimassa
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10">
            {sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center justify-center bg-[#F5C518] text-black font-semibold px-8 py-4 hover:bg-[#e6b800] transition-colors text-base"
            >
              Pyydä ilmainen tarjous
            </Link>
            <Link
              href="/palvelut/asbestipurku"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium px-8 py-4 hover:border-[#F5C518] hover:text-amber-600 transition-colors text-base"
            >
              Asbestipurku
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick trust row */}
          <div className="mt-14 flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Asbestipurkulupa
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Y: 3099600-5
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Helsinki-pohjainen
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#F5C518]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Nopea aikataulu
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
