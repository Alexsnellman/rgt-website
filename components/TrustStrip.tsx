const stats = [
  { value: '10+', label: 'Vuotta kokemusta' },
  { value: '500+', label: 'Kohdetta hoidettu' },
  { value: '24h', label: 'Vastausaika' },
  { value: '100%', label: 'Luvallinen toiminta' },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#F5C518] mb-1">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
