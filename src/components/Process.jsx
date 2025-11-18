export default function Process() {
  const steps = [
    { title: 'Discovery Call', desc: 'Understand your menu, goals, and platform requirements.' },
    { title: 'Planning & Prep', desc: 'Shotlist, props, and logistics aligned to your brand tone.' },
    { title: 'Shoot Day', desc: 'On-location setup with lighting, styling, and hygiene standards.' },
    { title: 'Editing & Delivery', desc: 'Color-accurate, platform-optimized files delivered on time.' },
  ]

  return (
    <section id="process" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl p-6 bg-white/5 border border-white/10 text-blue-100">
              <div className="text-3xl font-bold text-white">{i+1}</div>
              <h3 className="text-white font-semibold mt-2">{s.title}</h3>
              <p className="text-sm mt-1 opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
