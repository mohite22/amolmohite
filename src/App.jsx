import ComingSoon from './components/ComingSoon'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

/* ── Set to false when portfolio is ready to launch ── */
const COMING_SOON = false

export default function App() {
  if (COMING_SOON) return <ComingSoon />

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  )
}
