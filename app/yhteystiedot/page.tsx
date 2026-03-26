import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Yhteystiedot | RGT Rakennuspalvelut - Pyydä tarjous',
  description: 'Ota yhteyttä RGT Rakennuspalveluihin. Pyydä ilmainen tarjous asbestipurulle tai rakennuspalveluille. Nopea vastaus.',
}

export default function YhteystiedotPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5C518]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Kontakti</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ota yhteyttä
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Tayita lomake tai soita suoraan. Vastaamme nopeasti ja annamme ilmaisen tarjouksen.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Pyydä tarjous</h2>
              <p className="text-white/50 text-sm mb-8">Tayita lomake ja otamme yhteyttä mahdollisimman pian.</p>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Yhteystiedot</h2>

              <div className="space-y-6">
                <div className="border border-white/10 bg-[#0a0a0a] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Puhelin</p>
                  <a href="tel:0505651646" className="text-2xl font-bold text-white hover:text-[#F5C518] transition-colors">
                    050 565 1646
                  </a>
                  <p className="text-white/40 text-sm mt-1">Ma-Pe 07:00-18:00</p>
                </div>

                <div className="border border-white/10 bg-[#0a0a0a] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Sahköposti</p>
                  <a href="mailto:info@rgt.fi" className="text-lg font-medium text-white hover:text-[#F5C518] transition-colors">
                    info@rgt.fi
                  </a>
                </div>

                <div className="border border-white/10 bg-[#0a0a0a] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Osoite</p>
                  <p className="text-white">Hernepellonkuja 6</p>
                  <p className="text-white/60">00560 Helsinki</p>
                </div>

                <div className="border border-white/10 bg-[#0a0a0a] p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Yritystiedot</p>
                  <p className="text-white/60 text-sm">RGT Henkilöpalvelut Oy</p>
                  <p className="text-white/60 text-sm">Y-tunnus: 3099600-5</p>
                </div>
              </div>

              <div className="mt-8 border border-[#F5C518]/20 bg-[#F5C518]/5 p-6">
                <p className="text-[#F5C518] font-semibold text-sm mb-1">Nopea palvelu</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Pyrimme vastaamaan kaikkiin yhteydenottoihin saman paivan sisalla. Kiireellisissä tapauksissa soita suoraan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
