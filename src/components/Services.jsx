import {
  MdDesignServices,
  MdWebAsset,
  MdPhoneIphone,
  MdBrush,
} from 'react-icons/md'

const services = [
  { icon: MdDesignServices, title: 'UI/UX Design' },
  { icon: MdWebAsset,       title: 'Web Design',     featured: true },
  { icon: MdPhoneIphone,    title: 'App Design' },
  { icon: MdBrush,          title: 'Graphic Design' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-100 to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">My Design Services</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm">
            Crafting visually engaging interfaces that are both intuitive and user-centered,
            ensuring a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, featured }) => (
            <div
              key={title}
              className={`rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer
                ${featured
                  ? 'bg-white dark:bg-gray-800 shadow-xl border border-blue-100 dark:border-blue-900'
                  : 'bg-slate-100 dark:bg-gray-900 border border-transparent hover:border-blue-100 dark:hover:border-blue-900'
                }`}
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                <Icon className="text-blue-700 dark:text-blue-400 text-3xl" />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                User-centered designs that are visually engaging and functionally seamless. My approach{' '}
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Read more...</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
