import { useEffect, useRef, useState } from 'react'
import { MdPerson, MdCheckCircle } from 'react-icons/md'

const skills = [
  { label: 'UX Research',     percent: 95, color: 'from-red-500 to-rose-400' },
  { label: 'Website Design',  percent: 88, color: 'from-orange-500 to-yellow-400' },
  { label: 'App Design',      percent: 75, color: 'from-blue-500 to-cyan-400' },
  { label: 'Graphic Design',  percent: 92, color: 'from-indigo-600 to-blue-500' },
]

const highlights = ['5+ Years Experience', '200+ Projects Delivered', 'UI/UX & Branding Expert']

export default function About() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Wave top (white → white, visual separator) ── */}
      <div className="overflow-hidden leading-none bg-white dark:bg-gray-950">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 md:h-16 block">
          <path d="M0,0 C480,80 960,0 1440,60 L1440,80 L0,80 Z"
            className="fill-slate-50 dark:fill-gray-900" />
        </svg>
      </div>

      <section id="about-us" className="py-20 bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-cyan-100/50 dark:bg-cyan-900/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">

          {/* ── Left — Avatar ── */}
          <div className="flex-1 flex justify-center relative">
            {/* Outer ring */}
            <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-blue-200 dark:border-blue-800 animate-spin-slow opacity-60" />
            {/* Glow blob */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-blue-900/10 dark:bg-blue-700/20 blur-2xl" />
            <div className="absolute bottom-8 left-6 w-16 h-16 rounded-full bg-cyan-300/40 dark:bg-cyan-700/30 blur-xl animate-float" />

            {/* Avatar */}
            <div className="relative w-64 h-80 rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center shadow-2xl card-shine animate-glow-pulse">
              <div className="flex flex-col items-center gap-3 opacity-50">
                <MdPerson className="text-blue-400 text-[8rem]" />
                <span className="text-blue-400 text-xs font-body">Your Photo</span>
              </div>
            </div>

            {/* Projects badge */}
            <div className="absolute -bottom-4 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-5 py-3 animate-badge-bounce">
              <p className="text-2xl font-black text-blue-900 dark:text-white">200+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-body">Projects Done</p>
            </div>
          </div>

          {/* ── Right — Content ── */}
          <div className="flex-1" ref={ref}>
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-body">Who I Am</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-4">
              About <span className="shimmer-text">Me</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md leading-relaxed font-body">
              Passionate UI/UX Designer with a creative approach to crafting intuitive and engaging
              user experiences. I blend aesthetics with functionality to build products people love.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map(h => (
                <div key={h} className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800">
                  <MdCheckCircle className="text-blue-500 text-sm" />
                  {h}
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div className="flex flex-col gap-5">
              {skills.map(({ label, percent, color }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{label}</p>
                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400 font-body">{percent}%</p>
                  </div>
                  <div className="relative h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-visible">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
                      style={{ width: animated ? `${percent}%` : '0%' }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white dark:bg-gray-100 border-2 border-blue-400 shadow-lg shadow-blue-200/60 transition-all duration-1000 ease-out"
                      style={{ left: animated ? `calc(${percent}% - 10px)` : '-10px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Wave bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
            <path d="M0,20 C360,80 720,0 1080,40 C1260,60 1380,10 1440,30 L1440,80 L0,80 Z"
              className="fill-white dark:fill-gray-950" />
          </svg>
        </div>
      </section>
    </>
  )
}
