'use client'
import { useState } from 'react'
import { services } from '@/data/services'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Virhe')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Jokin meni pieleen')
    }
  }

  const inputClass = 'w-full bg-white border border-gray-300 text-gray-900 placeholder-gray-400 px-4 py-3 text-sm focus:outline-none focus:border-[#F5C518] transition-colors'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Nimi *</label>
          <input
            type="text"
            required
            placeholder="Matti Meikalainen"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Puhelin *</label>
          <input
            type="tel"
            required
            placeholder="050 123 4567"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Sähköposti</label>
        <input
          type="email"
          placeholder="matti@esimerkki.fi"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Palvelu</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Valitse palvelu...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Muu">Muu</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Viesti *</label>
        <textarea
          required
          rows={5}
          placeholder="Kerro kohteesta - sijainti, laajuus, toivottu aikataulu..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">{errorMsg || 'Jokin meni pieleen. Yritä uudelleen.'}</p>
      )}

      {status === 'success' ? (
        <div className="bg-amber-50 border border-amber-200 px-6 py-4 text-amber-700 text-sm font-medium">
          Viesti lähetetty! Otamme yhteyttä pian.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#F5C518] text-black font-semibold py-4 hover:bg-[#e6b800] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Lähetetään...' : 'Lähetä viesti'}
        </button>
      )}
    </form>
  )
}
