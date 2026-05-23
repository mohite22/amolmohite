import { useEffect, useRef, useState } from 'react'
import {
  MdEmail, MdArrowForward, MdCheckCircle,
  MdFacebook, MdSend, MdWork,
} from 'react-icons/md'
import amlogo from '../assets/amolmohitelogo.png'

const LAUNCH = new Date('2026-06-29T00:00:00')

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now())
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    }
  }
  const [time, setTime] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function CountBox({ value, label }) {
  const prev = useRef(value)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (prev.current !== value) {
      setFlip(true)
      const t = setTimeout(() => setFlip(false), 500)
      prev.current = value
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="cs-card rounded-xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center relative overflow-hidden group hover:border-indigo-500/40 transition-colors duration-300">
        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300 rounded-xl" />
        <span
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tabular-nums ${flip ? 'flip-digit' : ''}`}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-indigo-300/80 uppercase tracking-widest font-body">{label}</span>
    </div>
  )
}

function Colon() {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setOn(v => !v), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className={`text-xl sm:text-2xl md:text-4xl font-black text-indigo-400 transition-opacity duration-300 pb-6 ${on ? 'opacity-100' : 'opacity-20'}`}>
      :
    </span>
  )
}

const particles = [
  { w: 'w-1.5 h-1.5', c: 'bg-indigo-400', top: '10%', left: '5%',  delay: '0s',   dur: '6s'   },
  { w: 'w-2 h-2',     c: 'bg-blue-400',   top: '75%', left: '8%',  delay: '1s',   dur: '8s'   },
  { w: 'w-1.5 h-1.5', c: 'bg-cyan-400',   top: '20%', left: '88%', delay: '0.5s', dur: '5s'   },
  { w: 'w-2 h-2',     c: 'bg-purple-400', top: '60%', left: '92%', delay: '2s',   dur: '7s'   },
  { w: 'w-2 h-2',     c: 'bg-sky-400',    top: '85%', left: '50%', delay: '1.5s', dur: '9s'   },
  { w: 'w-1.5 h-1.5', c: 'bg-indigo-300', top: '40%', left: '3%',  delay: '3s',   dur: '6.5s' },
  { w: 'w-1.5 h-1.5', c: 'bg-blue-300',   top: '5%',  left: '60%', delay: '2.5s', dur: '7.5s' },
  { w: 'w-2 h-2',     c: 'bg-violet-400', top: '50%', left: '78%', delay: '0.8s', dur: '5.5s' },
]

const socials = [
  { icon: MdFacebook, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
  { icon: MdSend,     label: 'Telegram', href: '#', color: 'hover:bg-sky-500'  },
  { icon: MdWork,     label: 'LinkedIn', href: '#', color: 'hover:bg-blue-700' },
]

export default function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH)
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError]       = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="cs-bg min-h-screen min-h-[100dvh] flex flex-col items-center justify-center relative overflow-hidden px-4 py-10 sm:py-12">

      {/* ── Gradient background ── */}
      <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0c1445]" />

      {/* ── Glow orbs — smaller on mobile ── */}
      <div className="absolute top-[-60px] left-[-60px] w-56 h-56 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] rounded-full bg-indigo-700/20 blur-[60px] sm:blur-[100px] animate-float" />
      <div className="absolute bottom-[-60px] right-[-60px] w-48 h-48 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] rounded-full bg-blue-700/20 blur-[50px] sm:blur-[80px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] rounded-full bg-violet-700/10 blur-[40px] sm:blur-[60px]" />

      {/* ── Orbit rings — hidden on small mobile ── */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/10 animate-spin-slow" />
        <div className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/8" style={{ animation: 'spin-slow 20s linear infinite reverse' }} />
        <div className="absolute top-1/2 left-1/2 animate-orbit">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/60" />
        </div>
        <div className="absolute top-1/2 left-1/2 animate-orbit-reverse">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
        </div>
      </div>

      {/* ── Particles ── */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`absolute ${p.w} ${p.c} rounded-full opacity-40 animate-drift`}
          style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        />
      ))}

      {/* ── Dot grids — hidden on xs ── */}
      <div className="hidden sm:grid absolute top-6 right-6 md:top-8 md:right-12 grid-cols-6 md:grid-cols-8 gap-1.5 md:gap-2 opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-indigo-300" />
        ))}
      </div>
      <div className="hidden sm:grid absolute bottom-6 left-6 md:bottom-8 md:left-12 grid-cols-5 md:grid-cols-6 gap-1.5 md:gap-2 opacity-15">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-blue-300" />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl gap-6 sm:gap-7 md:gap-8">

        {/* Logo */}
        <div className="animate-scale-in" style={{ animationDelay: '0s' }}>
          <img
            src={amlogo}
            alt="Amol Mohite"
            className="h-10 sm:h-12 md:h-16 w-auto mx-auto hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]"
          />
        </div>

        {/* Heading */}
        <div className="animate-slide-up w-full" style={{ animationDelay: '0.15s', opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-indigo-300 font-semibold tracking-wide font-body">Portfolio in Progress</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Coming<br />
            <span className="shimmer-text">Soon</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-indigo-200/60 text-xs sm:text-sm md:text-base leading-relaxed font-body max-w-xs sm:max-w-sm mx-auto">
            I'm crafting something beautiful. A creative UI/UX portfolio that showcases
            my passion for design. Stay tuned — it's worth the wait.
          </p>
        </div>

        {/* Countdown */}
        <div className="animate-slide-up w-full" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5 lg:gap-6">
            <CountBox value={days}    label="Days"    />
            <Colon />
            <CountBox value={hours}   label="Hours"   />
            <Colon />
            <CountBox value={minutes} label="Mins"    />
            <Colon />
            <CountBox value={seconds} label="Secs"    />
          </div>
        </div>

        {/* Progress bar */}
        <div className="animate-slide-up w-full max-w-[280px] sm:max-w-xs md:max-w-sm" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <div className="flex justify-between text-[10px] sm:text-xs text-indigo-300/60 mb-1.5 sm:mb-2 font-body">
            <span>Development Progress</span>
            <span>55%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-[55%] rounded-full bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-lg shadow-cyan-400/60 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Email subscribe */}
        <div className="animate-slide-up w-full" style={{ animationDelay: '0.5s', opacity: 0 }}>
          {submitted ? (
            <div className="cs-card rounded-2xl px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 animate-scale-in">
              <MdCheckCircle className="text-green-400 text-xl sm:text-2xl flex-shrink-0" />
              <p className="text-green-300 font-semibold font-body text-xs sm:text-sm">You're on the list! I'll notify you on launch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3">
              <div className="relative">
                <MdEmail className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-indigo-300/50 text-base sm:text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError('') }}
                  placeholder="Enter your email address"
                  className="cs-input w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-body transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs sm:text-sm font-semibold hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 active:scale-95"
              >
                Notify Me
                <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
          {error && <p className="text-red-400 text-[10px] sm:text-xs mt-1.5 sm:mt-2 font-body">{error}</p>}
          {!submitted && (
            <p className="text-indigo-300/40 text-[10px] sm:text-xs mt-1.5 sm:mt-2 font-body">No spam. Unsubscribe anytime.</p>
          )}
        </div>

        {/* Social links */}
        <div className="animate-slide-up flex items-center gap-3 sm:gap-4" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <span className="text-indigo-300/40 text-[10px] sm:text-xs font-body">Follow me</span>
          <div className="w-6 sm:w-8 h-px bg-indigo-500/20" />
          {socials.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full cs-card flex items-center justify-center text-indigo-300 ${color} hover:text-white hover:scale-110 active:scale-95 transition-all duration-300`}
            >
              <Icon className="text-base sm:text-lg" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="animate-slide-up text-indigo-300/25 text-[10px] sm:text-xs font-body" style={{ animationDelay: '0.7s', opacity: 0 }}>
          © {new Date().getFullYear()} Amol Mohite · UI/UX Designer
        </p>
      </div>
    </div>
  )
}
