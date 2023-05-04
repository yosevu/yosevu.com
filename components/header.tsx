import Link from 'next/link'
import { useState } from 'react'

interface HeaderLink {
  text: string
  href: string
}

const headerLinks: HeaderLink[] = [
  { text: 'home', href: '/' },
  { text: 'about', href: '/about' }
]

export default function Header() {
  const [isTransformed, setIsTransformed] = useState(true)
  const transformClasses = isTransformed
    ? 'rotate-180 scale-x-[-1]'
    : 'rotate-0 scale-100'

  const handleClick = () => {
    setIsTransformed(!isTransformed)
  }

  return (
    <header className="mb-12 md:flex md:flex-col">
      <Link href="/">
        <span
          className={`text-slight-brown border mb-2 bg-black inline-block font-sans text-7xl px-2 transition-transform origin-center duration-500 ${transformClasses}`}
          aria-label="Inverted and reflected lambda icon that transforms back to a lambda when clicked"
          onClick={handleClick}
        >
          λ
        </span>
      </Link>
      <ul className="flex gap-8 mt-2 md:flex-col md:gap-6">
 
        {headerLinks.map((link) => (
          <li key={link.text}>
            <Link className="text-xl border-b-2 pb-1 border-black hover:border-b-4 hover:pb-1" key={link.text} href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
