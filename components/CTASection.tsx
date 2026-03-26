import Link from 'next/link'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export default function CTASection({
  title = 'Pyydä ilmainen tarjous',
  subtitle = 'Ota yhteyttä tänään. Vastaamme nopeasti ja sovimme katselmuksesta tai teemme tarjouksen suoraan.',
}: CTASectionProps) {
  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-[#F5C518]/20 bg-[#0a0a0a] p-12 md:p-16 relative overflow-hidden">
          {/* Yellow glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5C518] opacity-5 rounded-full blur-3xl" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#F5C518] mb-4">Kontakti</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mb-10 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/yhteystiedot"
                className="inline-flex items-center justify-center bg-[#F5C518] text-black font-semibold px-8 py-4 hover:bg-[#e6b800] transition-colors"
              >
                Lähetä viesti
              </Link>
              <a
                href="tel:0505651646"
                className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-4 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
              >
                050 565 1646
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/30">
              <span>Hernepellonkuja 6, 00560 Helsinki</span>
              <span>info@rgt.fi</span>
              <span>Y-tunnus: 3099600-5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
