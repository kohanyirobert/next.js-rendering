import Link from 'next/link'
import { useState } from 'react'

export default function App() {

  const [timeZone, setTimeZone] = useState()

  function handleClick() {
    console.log(new Date(), 'Clicked')
  }

  return <>
    <nav>
      <ul>
        <li><Link href="/ssg-without-data">Static Generation <em>without</em> Data</Link></li>
        <li><Link href="/ssg-with-data">Static Generation <em>with</em> Data</Link></li>
        <li>
          <Link href={timeZone ? `/ssr?timeZone=${timeZone}` : '/ssr'}>Server-side Rendering{timeZone ? ` (${timeZone})` : ''}</Link>
          <br />
          <input placeholder="Enter timezone to update link" onChange={(e) => setTimeZone(e.target.value)}></input>
        </li>
        <li><Link href="/csr">Client-side Rendering</Link></li>
      </ul>
    </nav>
    <main>
      <button onClick={handleClick}>Click</button>
    </main>
  </>
}
