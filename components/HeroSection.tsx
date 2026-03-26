import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  cityInessive?: string
  service?: string
  image?: string
}

export default function HeroSection({ cityInessive, service, image }: HeroSectionProps) {
  const headline = service
    ? `${service} - Ammattilaiset paikalle nopeasti`
    : cityInessive
    ? `Asbestipurku ja Rakennuspalvelut ${cityInessive}`
    : 'Asbestipurku ja Rakennuspalvelut Helsingissä'

  const sub = cityInessive
    ? `RGT Rakennuspalvelut tarjoaa ammattimaiset rakennuspalvelut ${cityInessive}. Asbestipurkulupa voimassa. Nopea aikataulu, siisti työ.`
    : 'Voimassa oleva asbestipurkulupa. Purku-urakat, keittiöremontit, saneeraukset ja loppusiivous - kaikki saman katon alta.'

  const heroImage = image || '/images/hero.avif'

  return (
    <section className="pt-16 min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Rakennustyömaa"
        fill
        className="object-cover"
        priority
        quality={85}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C518] z-10" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Asbestipurkulupa voimassa
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
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
              className="inline-flex items-center justify-center border border-white/30 text-white font-medium px-8 py-4 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors text-base"
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
