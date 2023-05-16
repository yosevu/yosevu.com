import { ThemeContext } from '@/hooks/use-theme'
import Link from 'next/link'
import { useContext, useState } from 'react'

interface HeaderLink {
  text: string
  href: string
}

const headerLinks: HeaderLink[] = [
  { text: 'home', href: '/' },
  { text: 'about', href: '/about' },
  { text: 'projects', href: '/projects' },
]

export default function Header() {
  const [, toggleTheme] = useContext(ThemeContext)
  const [isTransformed, setIsTransformed] = useState(true)
  const transformClasses = isTransformed
    ? 'rotate-180 scale-x-[-1]'
    : 'rotate-0 scale-100'

  const handleClick = () => {
    setIsTransformed(!isTransformed)
    toggleTheme()
  }

  return (
    <header className="mb-12 md:flex md:flex-col">
      <button
        className={`text-slight-brown dark:text-black mb-4 bg-black dark:bg-slight-brown inline-block font-sans text-7xl p-2 transition-transform origin-center duration-500 ${transformClasses}`}
        title="Toggle dark mode theme"
        aria-label="Toggle dark mode theme"
        onClick={handleClick}
      >
        <span
          role="img"
          aria-label="Inverted and reflected lambda icon that looks like a Y. Transforms back to a lambda when clicked"
        >
          λ
        </span>
      </button>
      <ul className="flex gap-8 md:flex-col md:gap-6">
        {headerLinks.map((link) => (
          <li key={link.text}>
            <Link
              className="text-xl border-b-2 border-black dark:border-slight-brown hover:border-b-4"
              key={link.text}
              href={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
