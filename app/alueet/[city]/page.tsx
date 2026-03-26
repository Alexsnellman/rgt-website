import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { locations, getLocation } from '@/data/locations'
import { services } from '@/data/services'
import CTASection from '@/components/CTASection'

interface Props {
  params: { city: string }
}

export async function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLocation(params.city)
  if (!l) return {}
  return {
    title: l.seo.title,
    description: l.seo.description,
    keywords: l.seo.keywords,
  }
}

export default function CityPage({ params }: Props) {
  const location = getLocation(params.city)
  if (!location) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `RGT Rakennuspalvelut - ${location.city}`,
    description: `Ammattimaiset rakennuspalvelut ja asbestipurku ${location.city}ssa.`,
    url: `https://rgt.fi/alueet/${location.slug}`,
    telephone: '+358505651646',
    email: 'info@rgt.fi',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hernepellonkuja 6',
      addressLocality: 'Helsinki',
      postalCode: '00560',
      addressCountry: 'FI',
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5C518]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#F5C518] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Etusivu</Link>
            <span>/</span>
            <span className="text-white/60">Alueet</span>
            <span>/</span>
            <span className="text-white/60">{location.city}</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Palvelualue</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Asbestipurku ja Rakennuspalvelut<br />{location.city}ssa
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-4">
            {location.description}
          </p>
          <p className="text-white/50 mb-10">
            Asbestipurkulupa voimassa. Kiintea hinta. Nopea aikataulu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center justify-center bg-[#F5C518] text-black font-semibold px-8 py-4 hover:bg-[#e6b800] transition-colors"
            >
              Pyydä tarjous {location.city}ssa
            </Link>
            <a
              href="tel:0505651646"
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
            >
              050 565 1646
            </a>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-20 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Palvelut</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Palvelut {location.city}ssa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/palvelut/${s.slug}`}
                className={`group bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors ${s.featured ? 'border-t-2 border-[#F5C518]' : ''}`}
              >
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#F5C518] transition-colors">{s.name}</h3>
                <p className="text-sm text-white/50 mb-4">{s.shortDesc}</p>
                <span className="text-xs text-[#F5C518] flex items-center gap-1">
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

      {/* Why us local */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Luotettava kumppani</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
            Ammattilaiset {location.city}ssa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
            <div className="bg-[#0a0a0a] p-8">
              <p className="text-4xl font-bold text-[#F5C518] mb-2">✓</p>
              <h3 className="font-semibold text-white mb-2">Asbestipurkulupa</h3>
              <p className="text-sm text-white/50">Voimassa oleva lupa kaikelle asbestityölle. Lainmukainen ja turvallinen.</p>
            </div>
            <div className="bg-[#0a0a0a] p-8">
              <p className="text-4xl font-bold text-[#F5C518] mb-2">48h</p>
              <h3 className="font-semibold text-white mb-2">Nopea aloitus</h3>
              <p className="text-sm text-white/50">Pystymme usein aloittamaan 1-2 paivan sisalla yhteydenotosta.</p>
            </div>
            <div className="bg-[#0a0a0a] p-8">
              <p className="text-4xl font-bold text-[#F5C518] mb-2">€</p>
              <h3 className="font-semibold text-white mb-2">Kiintea hinta</h3>
              <p className="text-sm text-white/50">Tarjoamme urakat kiintealla hinnalla. Ei yllatyslaskuja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-20 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Muut alueet</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Toimimme myos</h2>
          <div className="flex flex-wrap gap-3">
            {locations.filter((l) => l.slug !== location.slug).map((l) => (
              <Link
                key={l.slug}
                href={`/alueet/${l.slug}`}
                className="border border-white/20 text-white/60 text-sm px-4 py-2 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
              >
                {l.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Pyydä tarjous ${location.city}ssa`}
        subtitle={`Tata yhteydenottolomaketta tai soita. Palvelemme ${location.city}ssa ja lahialueilla.`}
      />
    </>
  )
}
