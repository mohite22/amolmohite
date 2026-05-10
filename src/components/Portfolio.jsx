import { useEffect, useRef, useState } from 'react'
import { MdFilterList, MdOpenInNew, MdArrowOutward } from 'react-icons/md'

const filters = ['All', 'UI/UX', 'Website Design', 'App Design', 'Graphic Design']

const projects = [
  { id: 1, category: 'UI/UX',          title: 'Website Landing Page Design & Service', tag: 'UI/UX',    gradient: 'from-blue-500 via-indigo-400 to-cyan-400' },
  { id: 2, category: 'Website Design', title: 'E-Commerce Website Redesign',            tag: 'Web',      gradient: 'from-purple-500 via-pink-400 to-rose-400' },
  { id: 3, category: 'UI/UX',          title: 'Dashboard UI Design System',             tag: 'UI/UX',    gradient: 'from-orange-400 via-amber-400 to-yellow-300' },
  { id: 4, category: 'App Design',     title: 'Mobile Banking App UI',                  tag: 'App',      gradient: 'from-green-500 via-teal-400 to-cyan-400' },
  { id: 5, category: 'Graphic Design', title: 'Brand Identity & Logo Design',           tag: 'Branding', gradient: 'from-red-500 via-pink-400 to-rose-300' },
  { id: 6, category: 'Website Design', title: 'SaaS Product Landing Page',              tag: 'Web',      gradient: 'from-indigo-500 via-blue-400 to-sky-400' },
]

export default function Portfolio() {
  const [active, setActive] = useState('UI/UX')
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      {/* ── Wave top ── */}
      <div className="overflow-hidden leading-none bg-white dark:bg-gray-950">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
          <path d="M0,20 C480,80 960,0 1440,50 L1440,80 L0,80 Z"
            className="fill-slate-50 dark:fill-gray-900" />
        </svg>
      </div>

      <section id="portfolio" className="py-20 bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-indigo-100/40 dark:bg-indigo-900/20 blur-3xl animate-float" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-body">My Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-3">
              My <span className="shimmer-text">Portfolio</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm font-body">
              Explore a collection of my UI/UX design projects, each crafted to deliver seamless,
              user-centered experiences.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            <MdFilterList className="text-gray-400 text-xl" />
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105
                  ${active === f
                    ? 'bg-blue-900 dark:bg-blue-600 text-white shadow-lg shadow-blue-300/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ id, title, tag, gradient }, idx) => (
              <div
                key={id}
                className={`group card-shine rounded-2xl overflow-hidden shadow-lg cursor-pointer
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/30 dark:hover:shadow-blue-900/40
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Thumbnail */}
                <div className={`h-52 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                  {/* Mock browser UI */}
                  <div className="absolute top-3 left-3 right-3 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex gap-1.5 mb-2.5">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/50 rounded-full w-3/4" />
                      <div className="h-2 bg-white/35 rounded-full w-1/2" />
                      <div className="h-2 bg-white/25 rounded-full w-5/6" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-7 bg-white/20 rounded-lg" />
                    ))}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-3">
                    <MdOpenInNew className="text-white text-4xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white text-sm font-semibold font-heading">View Project</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 bg-gray-800 dark:bg-gray-900 flex items-start justify-between">
                  <div>
                    <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide font-body">{tag}</span>
                    <h3 className="text-sm font-bold text-white mt-1 group-hover:text-blue-400 transition-colors duration-300">
                      {title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-blue-500 flex-shrink-0 mt-1">
                    <MdArrowOutward className="text-white text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Wave bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
            <path d="M0,50 C360,0 720,80 1080,30 C1260,10 1380,70 1440,50 L1440,80 L0,80 Z"
              className="fill-white dark:fill-gray-950" />
          </svg>
        </div>
      </section>
    </>
  )
}
