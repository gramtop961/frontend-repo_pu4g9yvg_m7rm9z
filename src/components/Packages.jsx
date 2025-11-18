export default function Packages() {
  const plans = [
    {
      name: 'Starter',
      price: '₹8,999',
      best: false,
      features: ['20 dishes', 'Basic styling', 'Color correction', '2-day delivery']
    },
    {
      name: 'Growth',
      price: '₹14,999',
      best: true,
      features: ['35 dishes', 'Advanced styling', 'Retouching', '48-hour delivery', 'Free banner']
    },
    {
      name: 'Premium',
      price: '₹24,999',
      best: false,
      features: ['60 dishes', 'Props & plating', 'Hero shots + banners', 'Priority delivery']
    }
  ]

  return (
    <section id="packages" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Packages</h2>
        <p className="text-blue-200 text-center mt-3 max-w-2xl mx-auto">Transparent, results-focused pricing tailored for delivery platforms.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {plans.map(p => (
            <div key={p.name} className={`relative rounded-xl p-6 border ${p.best ? 'bg-blue-600/10 border-blue-500' : 'bg-white/5 border-white/10'} text-blue-100`}>
              {p.best && <div className="absolute -top-3 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">Best Value</div>}
              <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              <div className="text-3xl text-white font-bold mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map(f => <li key={f} className="flex items-center gap-2"><span className="text-green-400">✓</span> {f}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
