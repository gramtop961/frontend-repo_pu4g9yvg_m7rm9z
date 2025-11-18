export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Conversion-focused Food Photography for Zomato & Swiggy
          </h1>
          <p className="mt-5 text-blue-100 text-lg">
            We help restaurant partners boost clicks and orders with mouth-watering visuals that meet platform guidelines and stand out in the feed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#packages" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-center">View Packages</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-center">Get a Quote</a>
          </div>
          <div className="mt-6 flex gap-6 text-blue-200 text-sm">
            <div>
              <div className="text-2xl font-bold text-white">500+ </div>
              Partner Shoots
            </div>
            <div>
              <div className="text-2xl font-bold text-white">25% </div>
              Avg. Increase in CTR
            </div>
            <div>
              <div className="text-2xl font-bold text-white">48hr </div>
              Delivery
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" className="rounded-xl object-cover h-48 w-full" />
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop" className="rounded-xl object-cover h-64 w-full mt-8" />
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" className="rounded-xl object-cover h-64 w-full" />
            <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop" className="rounded-xl object-cover h-48 w-full mt-8" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/10 text-white px-4 py-2 rounded-lg backdrop-blur border border-white/10 text-sm">
            Platform-ready, appetizing, click-worthy
          </div>
        </div>
      </div>
    </section>
  )
}
