import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    restaurant_name: '',
    contact_name: '',
    phone: '',
    email: '',
    city: '',
    platform: 'Both',
    shoot_type: '',
    budget_range: '',
    heard_from: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('Thanks! We will reach out shortly.')
      setForm({
        restaurant_name: '', contact_name: '', phone: '', email: '', city: '', platform: 'Both', shoot_type: '', budget_range: '', heard_from: '', message: ''
      })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Get a Quote</h2>
        <p className="text-blue-200 text-center mt-3 max-w-2xl mx-auto">Tell us about your restaurant and we’ll share a tailored package for Zomato/Swiggy.</p>

        <form onSubmit={onSubmit} className="mt-10 grid md:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-xl text-blue-100">
          <input name="restaurant_name" value={form.restaurant_name} onChange={onChange} placeholder="Restaurant name" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="contact_name" value={form.contact_name} onChange={onChange} placeholder="Contact person" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input name="email" value={form.email} onChange={onChange} placeholder="Email (optional)" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="city" value={form.city} onChange={onChange} placeholder="City" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <select name="platform" value={form.platform} onChange={onChange} className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Zomato</option>
            <option>Swiggy</option>
            <option>Both</option>
            <option>Other</option>
          </select>
          <input name="shoot_type" value={form.shoot_type} onChange={onChange} placeholder="Shoot type (Menu/Ambience/Video)" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
          <input name="budget_range" value={form.budget_range} onChange={onChange} placeholder="Budget range" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="heard_from" value={form.heard_from} onChange={onChange} placeholder="How did you hear about us?" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Anything else we should know?" className="px-3 py-2 rounded bg-slate-900/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" rows={4} />
          <button type="submit" className="md:col-span-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium">Submit Inquiry</button>
          {status && <p className="md:col-span-2 text-blue-200">{status}</p>}
        </form>
      </div>
    </section>
  )
}
