const reasons = [
  {
    title: 'Lupa-asiat kunnossa',
    description: 'Meilla on voimassa oleva asbestipurkulupa. Toimimme aina lakien ja maaraysten mukaisesti. Et ota riskeja.',
    icon: '📋',
  },
  {
    title: 'Kokenut tiimi',
    description: 'Yli 10 vuoden kokemus rakennusalalta. Tiimimme on koulutettu ja motivoitunut. Työ tehdaan huolella.',
    icon: '👷',
  },
  {
    title: 'Nopea ja siisti',
    description: 'Pystymme aloittamaan nopealla aikataululla. Jätämme työmaan siistina - ei ylimaaraista sotkua tai hässäkkää.',
    icon: '⚡',
  },
  {
    title: 'Kiintea hinta',
    description: 'Tarjoamme myös urakat kiintealla hinnalla - ei yllatyslaskuja. Tarjous on sitova ja selkea.',
    icon: '💰',
  },
  {
    title: 'Helsinki-pohjainen',
    description: 'Toimistomme on Helsingissa. Pääkaupunkiseudun kohteet hoidamme nopeasti ja kustannustehokkaasti.',
    icon: '📍',
  },
  {
    title: 'Jatteet pois',
    description: 'Hoidamme jatteiden lajittelun ja kuljetuksen asianmukaisiin vastaanottopaikkoihin - myos asbestijatteen.',
    icon: '♻️',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Miksi RGT</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Miksi valita meida
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {reasons.map((r) => (
            <div key={r.title} className="bg-[#0a0a0a] p-8">
              <span className="text-3xl mb-4 block">{r.icon}</span>
              <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
