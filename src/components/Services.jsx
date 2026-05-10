import { useEffect, useRef, useState } from 'react'
import { MdDesignServices, MdWebAsset, MdPhoneIphone, MdBrush, MdArrowForward } from 'react-icons/md'

const services = [
  {
    icon: MdDesignServices,
    title: 'UI/UX Design',
    desc: 'User-centered designs that are visually engaging and functionally seamless.',
    color: 'from-blue-500 to-cyan-400',
    glow: 'hover:shadow-blue-300/40 dark:hover:shadow-blue-700/40',
  },
  {
    icon: MdWebAsset,
    title: 'Web Design',
    desc: 'Pixel-perfect, responsive web experiences that captivate and convert.',
    color: 'from-indigo-500 to-blue-400',
    glow: 'hover:shadow-indigo-300/40 dark:hover:shadow-indigo-700/40',
    featured: true,
  },
  {
    icon: MdPhoneIphone,
    title: 'App Design',
    desc: 'Intuitive mobile interfaces crafted for seamless user journeys.',
    color: 'from-cyan-500 to-teal-400',
    glow: 'hover:shadow-cyan-300/40 dark:hover:shadow-cyan-700/40',
  },
  {
    icon: MdBrush,
    title: 'Graphic Design',
    desc: 'Bold visual identities and creative assets that leave a lasting impression.',
    color: 'from-blue-600 to-indigo-500',
    glow: 'hover:shadow-blue-300/40 dark:hover:shadow-blue-700/40',
  },
]

export default function Services() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Wave top ── */}
      <div className="overflow-hidden leading-none bg-white dark:bg-gray-950">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
          <path d="M0,60 C240,0 480,80 720,40 C960,0 1200,80 1440,20 L1440,80 L0,80 Z"
            className="fill-slate-100 dark:fill-gray-900" />
        </svg>
      </div>

      <section id="services" className="py-20 bg-slate-100 dark:bg-gray-900 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-200/30 dark:bg-blue-900/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-200/30 dark:bg-indigo-900/20 blur-3xl animate-float-slow" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest font-body">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-3">
              My Design <span className="shimmer-text">Services</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm font-body">
              Crafting visually engaging interfaces that are both intuitive and user-centered,
              ensuring a seamless experience.
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, color, glow, featured }, idx) => (
              <div
                key={title}
                className={`group card-shine rounded-2xl p-7 flex flex-col gap-4 cursor-pointer
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${glow}
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${featured
                    ? 'bg-white dark:bg-gray-800 shadow-xl border border-blue-100 dark:border-blue-800'
                    : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/80 dark:border-gray-700'
                  }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Icon with gradient bg */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-body flex-1">{desc}</p>

                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all duration-300">
                  Read more <MdArrowForward className="text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ── Wave bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
            <path d="M0,40 C360,0 720,80 1080,30 C1260,10 1380,60 1440,40 L1440,80 L0,80 Z"
              className="fill-white dark:fill-gray-950" />
          </svg>
        </div>
      </section>
    </>
  )
}
