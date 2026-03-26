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
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C518]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Kontakti</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ota yhteyttä
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Tayita lomake tai soita suoraan. Vastaamme nopeasti ja annamme ilmaisen tarjouksen.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pyydä tarjous</h2>
              <p className="text-gray-500 text-sm mb-8">Tayita lomake ja otamme yhteyttä mahdollisimman pian.</p>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Yhteystiedot</h2>

              <div className="space-y-6">
                <div className="border border-gray-200 bg-gray-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Puhelin</p>
                  <a href="tel:0505651646" className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                    050 565 1646
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Ma-Pe 07:00-18:00</p>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Sahkoposti</p>
                  <a href="mailto:info@rgt.fi" className="text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors">
                    info@rgt.fi
                  </a>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Osoite</p>
                  <p className="text-gray-900">Hernepellonkuja 6</p>
                  <p className="text-gray-500">00560 Helsinki</p>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-6">
                  <p className="text-xs font-semibond uppercase tracking-widest text-amber-600 mb-3">Yritystiedot</p>
                  <p className="text-gray-500 text-sm">RGT Henkilopalvelut Oy</p>
                  <p className="text-gray-500 text-sm">Y-tunnus: 3099600-5</p>
                </div>
              </div>

              <div className="mt-8 border border-[#F5C518]/40 bg-amber-50 p-6">
                <p className="text-amber-700 font-semibold text-sm mb-1">Nopea palvelu</p>
                <p className="text-amber-600/80 text-sm leading-relaxed">
                  Pyrimme vastaamaan kaikkiin yhteydenottoihin saman paivan sisalla. Kiireellisissa tapauksissa soita suoraan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
