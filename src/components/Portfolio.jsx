import { useState } from 'react'
import { MdFilterList, MdOpenInNew } from 'react-icons/md'

const filters = ['All', 'UI/UX', 'Website Design', 'App Design', 'Graphic Design']

const projects = [
  { id: 1, category: 'UI/UX',          title: 'Website Landing Page Design & Service', tag: 'Design' },
  { id: 2, category: 'Website Design', title: 'Website Landing Page Design & Service', tag: 'Design' },
  { id: 3, category: 'UI/UX',          title: 'Website Landing Page Design & Service', tag: 'Design' },
  { id: 4, category: 'App Design',     title: 'Mobile App UI Design',                  tag: 'Design' },
  { id: 5, category: 'Graphic Design', title: 'Brand Identity Design',                 tag: 'Design' },
  { id: 6, category: 'Website Design', title: 'E-Commerce Website Design',             tag: 'Design' },
]

const gradients = [
  'from-blue-400 to-cyan-300',
  'from-purple-400 to-pink-300',
  'from-orange-400 to-yellow-300',
  'from-green-400 to-teal-300',
  'from-red-400 to-pink-300',
  'from-indigo-400 to-blue-300',
]

export default function Portfolio() {
  const [active, setActive] = useState('UI/UX')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">My Portfolio</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm">
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
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors
                ${active === f
                  ? 'bg-blue-900 dark:bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ id, title, tag }, idx) => (
            <div
              key={id}
              className="group rounded-2xl overflow-hidden bg-gray-800 dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${gradients[idx % gradients.length]} relative overflow-hidden`}>
                <div className="absolute top-3 left-3 right-3 bg-white/20 backdrop-blur-sm rounded-lg p-2">
                  <div className="flex gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-white/40 rounded w-3/4" />
                    <div className="h-2 bg-white/30 rounded w-1/2" />
                    <div className="h-2 bg-white/20 rounded w-5/6" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-6 bg-white/20 rounded" />
                  ))}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <MdOpenInNew className="text-white text-4xl" />
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 bg-gray-800 dark:bg-gray-900">
                <span className="text-xs text-orange-400 font-semibold uppercase tracking-wide">{tag}</span>
                <h3 className="text-sm font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
