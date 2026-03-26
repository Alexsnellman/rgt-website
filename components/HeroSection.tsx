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
    ? `RGT Rakennuspalvelut tarjoaa ammattimaiset rakennuspalvelut ${city}ssa. Asbestipurkulupa voimassa. Nopea aikataulu, siisti työ.`
    : 'Voimassa oleva asbestipurkulupa. Purku-urakat, keittiöremontit, saneeraukset ja loppusiivous - kaikki saman katon alta.'

  return (
    <section className="pt-16 min-h-[85vh] flex items-center bg-black relative overflow-hidden">
      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5C518]" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Yellow glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#F5C518] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F5C518]">
              Asbestipurkulupa voimassa
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
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
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors text-base"
            >
              Asbestipurku
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick trust row */}
          <div className="mt-14 flex flex-wrap gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <span className="text-[#F5C518]">✓</span> Asbestipurkulupa
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#F5C518]">✓</span> Y: 3099600-5
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#F5C518]">✓</span> Helsinki-pohjainen
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#F5C518]">✓</span> Nopea aikataulu
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
