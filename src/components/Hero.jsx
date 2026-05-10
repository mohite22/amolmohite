import { MdLocationOn, MdFacebook, MdStar, MdPerson, MdSend, MdWork, MdArrowForward } from 'react-icons/md'

const particles = [
  { size: 'w-3 h-3', color: 'bg-blue-400', top: '15%', left: '8%',  delay: '0s',   dur: '5s'  },
  { size: 'w-2 h-2', color: 'bg-cyan-400', top: '70%', left: '5%',  delay: '1s',   dur: '7s'  },
  { size: 'w-4 h-4', color: 'bg-indigo-300', top: '30%', left: '90%', delay: '0.5s', dur: '6s'  },
  { size: 'w-2 h-2', color: 'bg-sky-400',  top: '80%', left: '85%', delay: '2s',   dur: '8s'  },
  { size: 'w-3 h-3', color: 'bg-blue-300', top: '50%', left: '92%', delay: '1.5s', dur: '5.5s'},
  { size: 'w-2 h-2', color: 'bg-cyan-300', top: '20%', left: '75%', delay: '3s',   dur: '6.5s'},
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900">

      {/* ── Animated gradient orbs ── */}
      <div className="absolute top-10 left-[-80px] w-80 h-80 rounded-full bg-blue-300/30 dark:bg-blue-700/20 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-[-60px] w-96 h-96 rounded-full bg-cyan-300/30 dark:bg-cyan-700/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-200/10 dark:bg-indigo-900/10 blur-3xl" />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute ${p.size} ${p.color} rounded-full opacity-60 animate-drift`}
          style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        />
      ))}

      {/* ── Decorative dot grid ── */}
      <div className="absolute top-24 right-16 grid grid-cols-6 gap-2 opacity-40">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-cyan-500" />
        ))}
      </div>
      <div className="absolute bottom-32 left-8 grid grid-cols-5 gap-2 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-10 py-16 relative z-10">

        {/* ── Left Content ── */}
        <div className="flex-1">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 mb-5 animate-badge-bounce">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wide">Available for Work</span>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-lg mb-1 font-body">Hi I am</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="text-blue-900 dark:text-white">UI &amp; UX</span><br />
            <span className="shimmer-text">Designer</span>
          </h1>

          <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed text-sm font-body">
            With a passion for clean, intuitive, and effective design, I create digital products
            that enhance user engagement. Delivering aesthetic and interactive designs that make a
            lasting impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact-us"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-900 dark:bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-300/40 dark:shadow-blue-900/60 hover:shadow-blue-400/60 hover:scale-105"
            >
              Contact Us
              <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-7 py-3.5 rounded-full border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 font-semibold text-sm hover:bg-blue-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-3">
            {[
              { icon: MdFacebook, bg: 'bg-blue-600 hover:bg-blue-500', label: 'Facebook' },
              { icon: MdSend,     bg: 'bg-sky-500 hover:bg-sky-400',   label: 'Telegram' },
              { icon: MdWork,     bg: 'bg-blue-700 hover:bg-blue-600', label: 'LinkedIn' },
            ].map(({ icon: Icon, bg, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className={`w-10 h-10 rounded-full ${bg} text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md`}
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — Avatar + floating badges ── */}
        <div className="flex-1 flex justify-center items-center relative min-h-[420px]">

          {/* Spinning ring */}
          <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-blue-200 dark:border-blue-800 animate-spin-slow opacity-50" />

          {/* Glow circle */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 opacity-50 blur-xl animate-float" />

          {/* Avatar card */}
          <div className="relative w-60 h-72 md:w-72 md:h-88 rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center shadow-2xl animate-glow-pulse">
            <div className="flex flex-col items-center gap-3 opacity-50">
              <MdPerson className="text-blue-400 text-[8rem]" />
              <span className="text-blue-500 dark:text-blue-300 text-sm font-medium font-body">Your Photo Here</span>
            </div>
          </div>

          {/* Review badge */}
          <div className="absolute top-4 right-2 md:-right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-md">A</div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <MdStar key={i} className="text-yellow-400 text-sm" />)}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-body">20k+ Customer Review</p>
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute bottom-8 -left-2 md:-left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 animate-float-slow">
            <p className="text-2xl font-black text-blue-900 dark:text-white">5+</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-body">Years Experience</p>
          </div>

          {/* Location pin */}
          <div className="absolute bottom-20 right-4 w-10 h-10 rounded-full bg-blue-900 dark:bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <MdLocationOn className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* ── Wave bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20 block">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z"
            className="fill-white dark:fill-gray-950" />
        </svg>
      </div>
    </section>
  )
}
