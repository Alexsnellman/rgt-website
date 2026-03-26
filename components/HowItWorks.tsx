const steps = [
  {
    number: '01',
    title: 'Ota yhteyttä',
    description: 'Tata yhteydenottolomaketta tai soita suoraan. Vastaamme nopeasti ja sovitaan katselmuksesta tai tarjouksesta.',
  },
  {
    number: '02',
    title: 'Kartoitus ja tarjous',
    description: 'Tulemme tarvittaessa paikan paalle katsomaan kohteen. Annamme kiintean tarjouksen ilman yllatyslaskuja.',
  },
  {
    number: '03',
    title: 'Työ valmis',
    description: 'Tiimimme hoitaa työn sovitulla aikataululla. Jätämme työmaan siistina ja toimitamme tarvittavat dokumentit.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-3">Naain se toimii</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Kolme vaihetta valmiiseen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {steps.map((step, i) => (
            <div key={step.number} className="bg-[#0a0a0a] p-8 relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-white/20 text-lg">
                  →
                </div>
              )}
              <p className="text-5xl font-bold text-[#F5C518]/20 mb-4 leading-none">{step.number}</p>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
