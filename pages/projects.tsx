import Link from 'next/link'

export default function Projects() {
  return (
    <>
      <div className="mb-4">
        <h1>Projects</h1>
      </div>
      <h2 className="italic">Kalawa Library and School Project</h2>
      <p>
        Kalawa Library and School Project is a nonprofit organization that supports education and community projects
        in rural Kalawa, Kenya. Learn more about the project at{' '}
        <Link
          className="h-7 border-b-2 border-black dark:border-slight-brown hover:border-b-4"
          href="https://www.kalawalsp.org/"
        >
          kalawalsp.org
        </Link>
        .
      </p>
    </>
  )
}
