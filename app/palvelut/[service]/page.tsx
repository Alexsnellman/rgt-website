import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services, getService } from '@/data/services'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

interface Props {
  params: { service: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService(params.service)
  if (!s) return {}
  return {
    title: s.seo.title,
    description: s.seo.description,
    keywords: s.seo.keywords,
  }
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.service)
  if (!service) notFound()

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const jsonLd = service.featured
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'LocalBusiness',
          name: 'RGT Rakennuspalvelut',
          telephone: '+358505651646',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hernepellonkuja 6',
            addressLocality: 'Helsinki',
            postalCode: '00560',
            addressCountry: 'FI',
          },
        },
      }
    : null

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C518]" />
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-700 transition-colors">Etusivu</Link>
            <span>/</span>
            <Link href="/" className="hover:text-gray-700 transition-colors">Palvelut</Link>
            <span>/</span>
            <span className="text-gray-600">{service.name}</span>
          </nav>

          {service.featured && (
            <div className="mb-6">
              <span className="text-xs font-semibold text-amber-600 border border-amber-200 bg-amber-50 px-2 py-0.5">
                Pääpalvelu
              </span>
            </div>
          )}

          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Palvelu</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {service.name}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-10">
            {service.description}
          </p>
          <Link
            href="/yhteystiedot"
            className="inline-flex items-center bg-[#F5C518] text-black font-semibold px-8 py-4 hover:bg-[#e6b800] transition-colors"
          >
            Pyydä tarjous
          </Link>
        </div>
      </section>

      {/* Service image */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Sisältää</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Mitä palvelu sisältää</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
            {service.features.map((f) => (
              <div key={f} className="bg-white px-6 py-5 flex items-start gap-3">
                <svg className="w-4 h-4 text-[#F5C518] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Käyttökohteet</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Tyypilliset kohteet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
            {service.useCases.map((uc) => (
              <div key={uc.title} className="bg-white p-8">
                <h3 className="font-semibold text-gray-900 mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={service.faq} />

      {/* Related services */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Katso myös</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Muut palvelut</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/palvelut/${s.slug}`}
                className="group bg-white p-8 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
