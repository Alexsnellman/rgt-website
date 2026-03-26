import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { locations, activeLocations, getLocation } from '@/data/locations'
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
    description: `Ammattimaiset rakennuspalvelut ja asbestipurku ${location.cityInessive}.`,
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
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C518]" />
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-700 transition-colors">Etusivu</Link>
            <span>/</span>
            <span className="text-gray-600">Alueet</span>
            <span>/</span>
            <span className="text-gray-600">{location.city}</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Palvelualue</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Asbestipurku ja Rakennuspalvelut<br />{location.cityInessive}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-4">
            {location.description}
          </p>
          <p className="text-gray-400 mb-10">
            Asbestipurkulupa voimassa. Kiinteä hinta. Nopea aikataulu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center justify-center bg-[#F5C518] text-black font-semibold px-8 py-4 hover:bg-[#e6b800] transition-colors"
            >
              Pyydä tarjous {location.cityInessive}
            </Link>
            <a
              href="tel:0505651646"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium px-8 py-4 hover:border-[#F5C518] hover:text-amber-600 transition-colors"
            >
              050 565 1646
            </a>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Palvelut</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Palvelut {location.cityInessive}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/palvelut/${s.slug}`}
                className={`group bg-white p-8 hover:bg-gray-50 transition-colors ${s.featured ? 'border-t-2 border-[#F5C518]' : ''}`}
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{s.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.shortDesc}</p>
                <span className="text-xs text-amber-600 flex items-center gap-1">
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

      {/* Why us local */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Luotettava kumppani</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Ammattilaiset {location.cityInessive}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
            <div className="bg-white p-8">
              <p className="text-4xl font-bold text-[#F5C518] mb-2">Lupa</p>
              <h3 className="font-semibold text-gray-900 mb-2">Asbestipurkulupa</h3>
              <p className="text-sm text-gray-500">Voimassa oleva lupa kaikelle asbestityölle. Lainmukainen ja turvallinen.</p>
            </div>
            <div className="bg-white p-8">
              <p className="text-4xl font-bold text-[#F5C518] mb-2">48h</p>
              <h3 className="font-semibold text-gray-900 mb-2">Nopea aloitus</h3>
              <p className="text-sm text-gray-500">Pystymme usein aloittamaan 1-2 päivän sisällä yhteydenotosta.</p>
            </div>
            <div className="bg-white p-8">
              <p className="text-4xl font-bold text-[#F5C518] mb-2">Kiinteä</p>
              <h3 className="font-semibold text-gray-900 mb-2">Kiinteä hinta</h3>
              <p className="text-sm text-gray-500">Tarjoamme urakat kiinteällä hinnalla. Ei yllätyslaskuja.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Muut alueet</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Toimimme myös</h2>
          <div className="flex flex-wrap gap-3">
            {activeLocations.filter((l) => l.slug !== location.slug).map((l) => (
              <Link
                key={l.slug}
                href={`/alueet/${l.slug}`}
                className="border border-gray-300 text-gray-600 text-sm px-4 py-2 hover:border-[#F5C518] hover:text-amber-600 transition-colors"
              >
                {l.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Pyydä tarjous ${location.cityInessive}`}
        subtitle={`Täytä yhteydenottolomake tai soita. Palvelemme ${location.cityInessive} ja lähialueilla.`}
      />
    </>
  )
}
