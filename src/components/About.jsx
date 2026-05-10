import { MdPerson } from 'react-icons/md'

const skills = [
  { label: 'UX', percent: 95, color: 'from-red-500 to-red-400' },
  { label: 'Website Design', percent: 88, color: 'from-orange-500 to-yellow-400' },
  { label: 'App Design', percent: 75, color: 'from-gray-400 to-gray-300' },
  { label: 'Graphic Design', percent: 92, color: 'from-blue-900 to-blue-600' },
]

export default function About() {
  return (
    <section id="about-us" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Left — Avatar */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-blue-900 dark:bg-blue-800 opacity-20" />
          <div className="absolute bottom-8 left-8 w-20 h-20 rounded-full bg-blue-200 dark:bg-blue-900 opacity-60" />
          <div className="relative w-64 h-80 rounded-3xl overflow-hidden bg-gradient-to-b from-blue-50 to-blue-200 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center shadow-xl">
            <div className="flex flex-col items-center gap-3 opacity-50">
              <MdPerson className="text-blue-400 text-9xl" />
              <span className="text-blue-400 text-xs">Your Photo</span>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">About Me</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-md">
            Passionate UI/UX Designer with a Creative Approach to Crafting Intuitive and Engaging User Experiences
          </p>

          <div className="flex flex-col gap-6">
            {skills.map(({ label, percent, color }) => (
              <div key={label}>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{label}</p>
                <div className="relative h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700`}
                    style={{ width: `${percent}%` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white dark:bg-gray-200 border-2 border-gray-300 shadow-md"
                    style={{ left: `calc(${percent}% - 10px)` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
