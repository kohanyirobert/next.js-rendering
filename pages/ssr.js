import Link from 'next/link'
import fetcher from '../lib/fetcher'
import displayTime from '../lib/displayTime'
import { getTimeServerUrl } from '../lib/timeServer'

export async function getServerSideProps({ query, res }) {
  const data = await fetcher(getTimeServerUrl(query.timeZone))
  console.log('Running getServerSideProps', query, data)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10',
  )
  return {
    props: {
      data
    }
  }
}

export default function ServerSideRendering({ data }) {
  console.log('Rendering Server-side Rendering')

  return <>
    <h1>Server-side Generation</h1>
    <h2>{displayTime(data)}</h2>
    <ul>
      <li>
        <Link href="/">Go back</Link>
      </li>
    </ul>
  </>
}
