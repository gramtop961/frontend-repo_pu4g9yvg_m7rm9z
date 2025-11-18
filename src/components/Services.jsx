export default function Services() {
  const items = [
    {
      title: 'Menu Photography',
      desc: 'Crisp, consistent menu photos that meet Zomato/Swiggy specs and drive conversions.',
      points: ['Lighting & styling', 'Color accurate', 'Background cleanup'],
      icon: '🍽️'
    },
    {
      title: 'Hero Banners & Carousels',
      desc: 'High-impact creatives for app banners, ads, and storefront highlights.',
      points: ['Concept & moodboards', 'Props & plating', 'Retouching'],
      icon: '🎯'
    },
    {
      title: 'Ambience & Team',
      desc: 'Showcase your space, hygiene, and team to build trust with customers.',
      points: ['Candid & posed', 'Wide & detail shots', 'Brand tone aligned'],
      icon: '🏢'
    },
    {
      title: 'Video Reels',
      desc: 'Short-form, scroll-stopping videos for social and in-app promotions.',
      points: ['Scripting', 'Editing', 'Captions & hooks'],
      icon: '🎥'
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What We Do</h2>
        <p className="text-blue-200 text-center mt-3 max-w-2xl mx-auto">Specialized food visuals designed to increase impressions, clicks, and orders on delivery apps.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map((it) => (
            <div key={it.title} className="bg-white/5 border border-white/10 rounded-xl p-6 text-blue-100 hover:bg-white/10 transition">
              <div className="text-3xl mb-3">{it.icon}</div>
              <h3 className="text-white font-semibold text-lg">{it.title}</h3>
              <p className="text-sm mt-2 opacity-90">{it.desc}</p>
              <ul className="mt-3 space-y-1 text-sm list-disc list-inside opacity-90">
                {it.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
