import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/portfolio`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Recent Work</h2>
        <p className="text-blue-200 text-center mt-3 max-w-2xl mx-auto">A taste of our platform-ready food visuals crafted for higher clicks and orders.</p>

        {loading ? (
          <p className="text-blue-200 text-center mt-10">Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {items.map((it, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img src={it.image} alt={it.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">
                  {it.title}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
