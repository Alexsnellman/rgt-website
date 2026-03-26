'use client'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const defaultFAQ: FAQItem[] = [
  { question: 'Onko teillä asbestipurkulupa?', answer: 'Kyllä. RGT Rakennuspalveluilla on voimassa oleva asbestipurkulupa. Kaikki asbestityöt tehdään lakien ja määräysten mukaisesti koulutetulla henkilöstöllä.' },
  { question: 'Missä toimitte?', answer: 'Toimimme pääasiassa Helsingissä ja koko Uudenmaan alueella. Tarvittaessa hoidamme kohteita myös laajemmalla alueella - Tampere, Turku, Oulu. Kysy rohkeasti.' },
  { question: 'Kuinka nopeasti voitte aloittaa?', answer: 'Pystymme usein aloittamaan muutaman päivän sisällä yhteydenotosta. Kiireelliset kohteet pyrimme hoitamaan mahdollisimman nopeasti.' },
  { question: 'Teettekö myös pienet urakat?', answer: 'Kyllä. Otamme vastaan urakat kaikista kokoluokista - yksittäisestä kylpyhuoneen purkamisesta suuriin teollisuuskohteisiin.' },
  { question: 'Mikä on hinta?', answer: 'Hinta määräytyy kohteen koosta ja työn laajuudesta. Tarjoamme kiinteän hinnan tarjouksen maksutta. Ota yhteyttä ja pyydä tarjous.' },
  { question: 'Hoidatteko jätteiden kuljetuksen?', answer: 'Kyllä. Huolehdimme kaikista jätteistä - myös asbestijätteestä - asianmukaisiin vastaanottopaikkoihin. Hinta sisältyy urakkaan.' },
]

interface FAQSectionProps {
  items?: FAQItem[]
}

export default function FAQSection({ items = defaultFAQ }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">UKK</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Usein kysyttyä
          </h2>
        </div>

        <div className="border border-gray-200 overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className={`border-b border-gray-200 last:border-0 ${open === i ? 'bg-gray-50' : 'bg-white'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 group"
              >
                <span className="font-medium text-gray-900 group-hover:text-amber-600 transition-colors">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-8 pb-6 text-gray-500 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
