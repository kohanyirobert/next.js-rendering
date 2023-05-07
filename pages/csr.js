import Link from 'next/link'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import displayTime from '../lib/displayTime'
import { getTimeServerUrl } from '../lib/timeServer'

export default function ClientSideRendering() {
  console.log('Rendering Client-side Rendering')

  const { data, error, isLoading } = useSWR(getTimeServerUrl(), fetcher)

  return <>
    <h1>Client-side Rendering</h1>
    <h2>{displayTime(data, error, isLoading)}</h2>
    <p>
      First page load is empty, time is fetched on the client.
    </p>
    <ul>
      <li>
        <Link href="/">Go back</Link>
      </li>
    </ul>
  </>
}
