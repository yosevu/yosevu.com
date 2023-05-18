import Image from 'next/image'
import Link from 'next/link'
import getSocialLinks from '@/components/icons'

export default function Home() {
  const socialLinks = getSocialLinks()
  return (
    <>
      <div>
        <h1 className="mb-4">Yosevu Kilonzo</h1>
        <Image
          className="rounded-full inline-block my-2"
          src="/profile.jpg"
          alt="A front-facing profile picture of Yosevu wearing a checkered shirt."
          width={128}
          height={128}
        />

        <p>
          Hi, I'm Yosevu. I'm a developer who loves the web. I care about
          building tools, applications, and experiences that help us{' '}
          <strong>connect</strong> and <strong>coordinate</strong>{' '}
          <em>better</em> as <strong>human beings</strong>.
        </p>
      </div>

      <div>
        <p>
          Feel free to reach out to me via email at{' '}
          <Link
            className="border-b-2 border-black dark:border-slight-brown hover:border-b-4"
            href="mailto:hello@yosevu.com"
          >
            hello@yosevu.com
          </Link>
          . You can also connect with me on GitHub, LinkedIn, or Twitter:
        </p>
        <ul className="flex gap-8">
          {socialLinks.map(({ name, href, Icon }) => (
            <li key={name} className="w-6">
              <Link href={href} aria-label={`Connect with me on ${name}`}>
                <Icon classes='dark:bg-black dark:fill-slight-brown' />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
