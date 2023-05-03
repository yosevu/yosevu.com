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
    <header className="mb-8">
      <Link href="/">
        <span
          className={`text-slight-brown border mb-2 bg-black inline-block font-sans text-7xl px-2 transition-transform origin-center duration-500 ${transformClasses}`}
          onClick={handleClick}
        >
          λ
        </span>
      </Link>
      <ul className="flex gap-4 mt-2">
        {headerLinks.map((link) => (
          <li className="border-b-2 pb-1 border-black hover:border-b-4 hover:pb-0" key={link.text}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
