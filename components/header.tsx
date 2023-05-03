import Link from 'next/link'
import { useState } from 'react'

interface HeaderLink {
  text: string
  href: string
}

type HeaderProps = {
  links: HeaderLink[];
}

export default function Header({ links }: HeaderProps) {
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
          className={`border bg-black text-white inline-block font-sans text-7xl px-2 transition-transform origin-center duration-300 ${transformClasses}`}
          onClick={handleClick}
        >
          λ
        </span>
      </Link>
      <br />
      <ul className="flex my-4">
        {links.map((link) => (
          <li className="border-b-2 pb-1 border-black mr-6 hover:border-b-4 hover:pb-0" key={link.text}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
