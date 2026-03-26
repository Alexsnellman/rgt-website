'use client'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const defaultFAQ: FAQItem[] = [
  { question: 'Onko teilla asbestipurkulupa?', answer: 'Kyllä. RGT Rakennuspalveluilla on voimassa oleva asbestipurkulupa. Kaikki asbestityöt tehdaan lakien ja maaraysten mukaisesti koulutetulla henkilöstölla.' },
  { question: 'Missa toimitte?', answer: 'Toimimme paasiasiassa Helsingissa ja koko Uudenmaan alueella. Tarvittaessa hoidamme kohteita myos laajemmalla alueella - Tampere, Turku, Oulu. Kysy rohkeasti.' },
  { question: 'Kuinka nopeasti voitte aloittaa?', answer: 'Pystymme usein aloittamaan muutaman paivan sisalla yhteydenotosta. Kiireelliset kohteet pyrimme hoitamaan mahdollisimman nopeasti.' },
  { question: 'Teetteko myos pienet urakat?', answer: 'Kyllä. Otamme vastaan urakat kaikista kokoluokista - yksittaisesta kylpyhuoneen purkamisesta suuriin teollisuuskohteisiin.' },
  { question: 'Mika on hinta?', answer: 'Hinta maaraatyy kohteen koosta ja työn laajuudesta. Tarjoamme kiintean hinnan tarjouksen maksutta. Ota yhteyttä ja pyydä tarjous.' },
  { question: 'Hoidatteko jatteiden kuljetuksen?', answer: 'Kyllä. Huolehdimme kaikesta jatteista - myos asbestijatteesta - asianmukaisiin vastaanottopaikkoihin. Hinta sisaltyy urakkaan.' },
]

interface FAQSectionProps {
  items?: FAQItem[]
}

export default function FAQSection({ items = defaultFAQ }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">UKK</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Usein kysyttyä
          </h2>
        </div>

        <div className="border border-white/10 overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className={`border-b border-white/10 last:border-0 ${open === i ? 'bg-[#0a0a0a]' : 'bg-black'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 group"
              >
                <span className="font-medium text-white group-hover:text-[#F5C518] transition-colors">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-white/40 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-8 pb-6 text-white/60 text-sm leading-relaxed">
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
