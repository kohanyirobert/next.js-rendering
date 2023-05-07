import Link from 'next/link'

export default function StaticGenerationWithoutData() {
  console.log('Rendering Static Generation *without* Data')

  return <>
    <h1>Static Generation <em>without</em> Data</h1>
    <h2>??:??</h2>
    <ul>
      <li>
        <Link href="/">Go back</Link>
      </li>
    </ul>
  </>
}
