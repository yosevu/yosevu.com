import Link from 'next/link'

export default function About() {
  return (
    <>
      <div className="mb-4">
        <h1>About me</h1>
        <p>
          I grew up in Kenya and studied linguistics at the University of
          Colorado before teaching English as a second language. This experience
          ignited my passion for learning and education, which I now integrate
          into my work as a software engineer through teaching, mentoring, and
          sharing with others.
        </p>
        <p>
          With 5 years of professional experience in full-stack development, I
          have worked in various industries, collaborated on medium to large
          agile teams, and gained expertise in a wide range of technology
          stacks. My primary focus lies in React, TypeScript, Node.js, and other
          web technologies within the JavaScript ecosystem.
        </p>
        <div>
          <p>My top 3 areas of interest include:</p>
          <ul className="list-disc pl-0">
            <li className="ml-5">Web technologies</li>
            <li className="ml-5">Distributed systems</li>
            <li className="ml-5">Resilience engineering</li>
          </ul>
        </div>
      </div>

      <p>
        <span>To learn more about my skills and experience, please see </span>
        <Link
          className="h-7 border-b-2 border-black dark:border-slight-brown hover:border-b-4"
          href="https://docs.google.com/document/d/1RoMSK3FDpdW3ruBT5mfxpjnWHrzj3IMfBS3aCI5H3yg/edit?usp=sharing"
        >
          my resume
        </Link>
        .
      </p>
    </>
  )
}
