import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
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
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5C518]" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F5C518] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Etusivu</Link>
            <span>/</span>
            <Link href="/" className="hover:text-white transition-colors">Palvelut</Link>
            <span>/</span>
            <span className="text-white/60">{service.name}</span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">{service.icon}</span>
            {service.featured && (
              <span className="mt-2 text-xs font-semibold text-[#F5C518] border border-[#F5C518]/30 px-2 py-0.5">
                Paaapalvelu
              </span>
            )}
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Palvelu</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {service.name}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-10">
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

      {/* Features */}
      <section className="py-20 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Sisaltaa</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Mita palvelu sisaltaa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
            {service.features.map((f) => (
              <div key={f} className="bg-[#0a0a0a] px-6 py-5 flex items-start gap-3">
                <span className="text-[#F5C518] mt-0.5">✓</span>
                <span className="text-white/80 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Kayttokohteet</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Tyypilliset kohteet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
            {service.useCases.map((uc) => (
              <div key={uc.title} className="bg-[#0a0a0a] p-8">
                <h3 className="font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={service.faq} />

      {/* Related services */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Katso myos</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Muut palvelut</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/palvelut/${s.slug}`}
                className="group bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors"
              >
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[#F5C518] transition-colors">{s.name}</h3>
                <p className="text-sm text-white/50">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
