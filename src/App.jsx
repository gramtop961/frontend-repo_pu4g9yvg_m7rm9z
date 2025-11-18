import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Packages from './components/Packages'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Packages />
        <Process />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-blue-200 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} BlueFrame Studios. All rights reserved.</p>
          <div className="text-sm">Optimized for Zomato & Swiggy Restaurant Partners</div>
        </div>
      </footer>
    </div>
  )
}

export default App
