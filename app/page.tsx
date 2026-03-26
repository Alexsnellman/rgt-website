import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import TrustStrip from '@/components/TrustStrip'
import ServicesGrid from '@/components/ServicesGrid'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'RGT Rakennuspalvelut - Asbestipurku ja Rakennuspalvelut Helsinki',
  description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Helsingissa ja Uudellamaalla. Asbestipurkulupa voimassa. Nopea aikataulu, kiintea hinta. Y: 3099600-5.',
  keywords: ['asbestipurku', 'rakennuspalvelut helsinki', 'asbestipurku helsinki', 'purku-urakka', 'keittiöremontti helsinki'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RGT Rakennuspalvelut',
  description: 'Ammattimaiset rakennuspalvelut ja asbestipurku Helsingissa ja Uudellamaalla.',
  url: 'https://rgt.fi',
  telephone: '+358505651646',
  email: 'info@rgt.fi',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hernepellonkuja 6',
    addressLocality: 'Helsinki',
    postalCode: '00560',
    addressCountry: 'FI',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.2141,
    longitude: 25.0124,
  },
  areaServed: ['Helsinki', 'Espoo', 'Vantaa', 'Tampere', 'Turku', 'Oulu'],
  priceRange: '$$',
  openingHours: 'Mo-Fr 07:00-18:00',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Onko teilla asbestipurkulupa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kyllä. RGT Rakennuspalveluilla on voimassa oleva asbestipurkulupa. Kaikki asbestityöt tehdaan lakien ja maaraysten mukaisesti koulutetulla henkilöstölla.',
      },
    },
    {
      '@type': 'Question',
      name: 'Missa toimitte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Toimimme paasiasiassa Helsingissa ja koko Uudenmaan alueella. Tarvittaessa hoidamme kohteita myos laajemmalla alueella - Tampere, Turku, Oulu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kuinka nopeasti voitte aloittaa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pystymme usein aloittamaan muutaman paivan sisalla yhteydenotosta. Kiireelliset kohteet pyrimme hoitamaan mahdollisimman nopeasti.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <WhyUs />
      <HowItWorks />
      <FAQSection />
      <CTASection />
    </>
  )
}
