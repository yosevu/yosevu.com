import Link from 'next/link'

export default function About() {
  return (
    <>
      <div>
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          voluptatem culpa aperiam. Vero praesentium nisi quas cumque magnam qui
          repudiandae, ad, consequatur inventore tenetur incidunt quis eveniet
          recusandae perspiciatis quidem?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          voluptatem culpa aperiam. Vero praesentium nisi quas cumque magnam qui
          repudiandae, ad, consequatur inventore tenetur incidunt quis eveniet
          recusandae perspiciatis quidem?
        </p>
      </div>

      <ul className="flex flex-col gap-4">
        <li>
          <Link className="h-7 border-b-2 pb-2 border-black mr-6 hover:border-b-4 hover:pb-1" href="mailto:hello@yosevu.com">hello@yosevu.com</Link>
        </li>
        <li>
          <Link className="h-7 border-b-2 pb-2 border-black mr-6 hover:border-b-4 hover:pb-1" href="https://docs.google.com/document/d/1fp1T_-C79-gWnDKcjnUYyXq_w0Y9W8ZWKPwnJzkhxxk/edit?usp=sharing">
            Resume
          </Link>
        </li>
      </ul>
    </>
  )
}
