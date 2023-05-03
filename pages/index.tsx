import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div>
        <h1>Yosevu Kilonzo</h1>
        <p>
          Hi, I'm Yosevu. I'm a developer of 5 years who loves building with web
          technologies.
        </p>
        <Image
          className="rounded-full"
          src="/profile.jpg"
          alt="A front-facing profile picture of Yosevu wearing a checkered shirt."
          width={100}
          height={100}
        />
      </div>
      <div>
        <p>Reach out if you would like to chat or connect with me!</p>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Twitter</li>
          <li>Email</li>
        </ul>
      </div>
    </>
  )
}
