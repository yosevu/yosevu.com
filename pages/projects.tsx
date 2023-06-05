import Link from 'next/link'
import Head from 'next/head'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Yosevu's projects</title>
        <meta property="og:title" content="Yosevu's projects" key="title" />

        <meta name="description" content="Yosevu Kilonzo's projects" />
        <meta
          property="og:description"
          content="Yosevu Kilonzo's projects"
        />
      </Head>
      <div className="mb-6">
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
      <br />
      <h2 className="italic">Input Plus One</h2>
      <p>
        Input Plus One is a set of tools for learning Swahili through understanding the language in its natural spoken and written form. This project is in development. Learn more about it at{' '}
        <Link
          className="h-7 border-b-2 border-black dark:border-slight-brown hover:border-b-4"
          href="https://github.com/yosevu/input-plus-one"
        >
          https://github.com/yosevu/input-plus-one
        </Link>
        .
      </p>
    </>
  )
}
