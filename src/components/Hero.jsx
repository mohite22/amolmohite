import {
  MdLocationOn,
  MdFacebook,
  MdStar,
  MdPerson,
  MdSend,
  MdWork,
} from 'react-icons/md'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative dots top-right */}
      <div className="absolute top-24 right-16 grid grid-cols-6 gap-1.5 opacity-50">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400 dark:bg-cyan-500" />
        ))}
      </div>
      {/* Decorative dots bottom-left */}
      <div className="absolute bottom-32 left-8 grid grid-cols-5 gap-1.5 opacity-30">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] gap-10 py-16">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">Hi I am</p>
          <h1 className="text-5xl md:text-7xl font-black text-blue-900 dark:text-white leading-tight">
            UI &amp; UX<br />
            <span className="text-blue-800 dark:text-blue-400">Designer</span>
          </h1>
          <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed text-sm">
            With a passion for clean, intuitive, and effective design, I create digital products
            that enhance user engagement. Delivering aesthetic and interactive designs that make a
            lasting impact.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contact-us"
              className="px-6 py-3 rounded-full bg-blue-900 dark:bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900"
            >
              Contact Us
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 font-semibold text-sm hover:bg-blue-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
            >
              Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
              <MdFacebook className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
              <MdSend className="text-xl" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md">
              <MdWork className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right — Avatar + badges */}
        <div className="flex-1 flex justify-center items-end relative z-10">
          {/* Circle bg */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 opacity-60" />

          {/* Avatar placeholder */}
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 flex items-end justify-center shadow-2xl">
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 opacity-60">
              <MdPerson className="text-blue-400 text-9xl" />
              <span className="text-blue-500 dark:text-blue-300 text-sm font-medium">Your Photo Here</span>
            </div>
          </div>

          {/* Review badge */}
          <div className="absolute top-8 right-4 md:right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <MdStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">20k+ Customer Review</p>
            </div>
          </div>

          {/* Location pin */}
          <div className="absolute bottom-16 left-4 w-10 h-10 rounded-full bg-blue-900 dark:bg-blue-600 flex items-center justify-center shadow-lg">
            <MdLocationOn className="text-white text-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
