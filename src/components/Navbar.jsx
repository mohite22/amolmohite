import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { MdMenu, MdClose, MdLightMode, MdDarkMode } from 'react-icons/md'

const links = ['Home', 'Services', 'Portfolio', 'About Us', 'Blog', 'Contact Us']

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-blue-600 flex items-center justify-center">
          <span className="text-white font-black text-lg">AM</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Toggle theme"
          >
            {dark
              ? <MdLightMode className="text-yellow-400 text-xl" />
              : <MdDarkMode className="text-blue-700 text-xl" />}
          </button>
          <a
            href="#contact-us"
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-blue-900 dark:bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Let's Talk
          </a>
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen
              ? <MdClose className="text-2xl" />
              : <MdMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 px-6 pb-4 flex flex-col gap-3">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact-us" className="mt-2 px-5 py-2 rounded-full bg-blue-900 text-white text-sm font-semibold text-center">
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  )
}
