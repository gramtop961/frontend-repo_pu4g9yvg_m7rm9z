import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const links = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'packages', label: 'Packages' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" className="h-8 w-8" alt="logo" />
          <span className="text-white font-semibold tracking-tight">BlueFrame Studios</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-blue-100 hover:text-white transition-colors">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="ml-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow">Get a Quote</button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left text-blue-100 hover:text-white">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="w-full mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow">Get a Quote</button>
        </div>
      )}
    </header>
  )
}
