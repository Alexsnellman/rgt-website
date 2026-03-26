import Image from 'next/image'

const reasons = [
  {
    title: 'Lupa-asiat kunnossa',
    description: 'Meillä on voimassa oleva asbestipurkulupa. Toimimme aina lakien ja määräysten mukaisesti. Et ota riskejä.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Kokenut tiimi',
    description: 'Yli 10 vuoden kokemus rakennusalalta. Tiimimme on koulutettu ja motivoitunut. Työ tehdään huolella.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Nopea ja siisti',
    description: 'Pystymme aloittamaan nopealla aikataululla. Jätämme työmaan siistinä - ei ylimääräistä sotkua.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Kiinteä hinta',
    description: 'Tarjoamme myös urakat kiinteällä hinnalla - ei yllätyslaskuja. Tarjous on sitova ja selkeä.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Helsinki-pohjainen',
    description: 'Toimistomme on Helsingissä. Pääkaupunkiseudun kohteet hoidamme nopeasti ja kustannustehokkaasti.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Jätteet pois',
    description: 'Hoidamme jätteiden lajittelun ja kuljetuksen asianmukaisiin vastaanottopaikkoihin - myös asbestijätteen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative h-80 lg:h-full lg:min-h-[500px] overflow-hidden border border-gray-200">
            <Image
              src="/images/roof-workers.jpg"
              alt="RGT rakennustiimi työssä"
              fill
              className="object-cover"
              quality={80}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <p className="text-white font-semibold text-sm">Ammattitaitoinen tiimimme</p>
            </div>
          </div>

          {/* Reasons */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">Miksi RGT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Miksi valita meidät
            </h2>

            <div className="space-y-6">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{r.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
