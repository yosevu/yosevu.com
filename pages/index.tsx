import Image from 'next/image'
import Link from 'next/link'
import getSocialLinks from '@/components/icons'

export default function Home() {
  const socialLinks = getSocialLinks()
  return (
    <>
      <div>
        <h1>Yosevu Kilonzo</h1>
        <p>
          Hi, I'm Yosevu. I'm a developer who loves the web. I care
          about building tools, applications, and experiences that help us{' '}
          <strong>connect</strong> and <strong>coordinate</strong> <em>better</em>{' '}
          as <strong>human beings</strong>.
        </p>
        <Image
          className="rounded-full inline-block my-2"
          src="/profile.jpg"
          alt="A front-facing profile picture of Yosevu wearing a checkered shirt."
          width={128}
          height={128}
        />
      </div>

      <div>
        <p>
          Feel free to reach out to me via email at{' '}
          <Link
            className="border-b-2 border-black hover:border-b-4"
            href="mailto:hello@yosevu.com"
          >
            hello@yosevu.com
          </Link>
          . You can also connect with me on GitHub, LinkedIn, or Twitter:
        </p>
        <ul className="flex gap-4">
          {socialLinks.map(({ name, href, Icon }) => (
            <li className="w-6">
              <Link href={href} aria-label={`Connect with me on ${name}`}>
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
