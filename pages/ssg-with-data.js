import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr'
import fetcher from '../lib/fetcher'
import displayTime from '../lib/displayTime'
import { getTimeServerUrl } from '../lib/timeServer'

export async function getStaticProps() {
  const data = await fetcher(getTimeServerUrl())
  console.log('Running getStaticProps', data)
  return {
    props: {
      fallback: {
        [getTimeServerUrl()]: data
      }
    },
    revalidate: 30,
  }
}

export default function Page({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <StaticGenerationWithData />
    </SWRConfig>
  )
}

function StaticGenerationWithData() {
  console.log('Rendering Static Generation *with* Data')

  const { data, error, isLoading } = useSWR(getTimeServerUrl(), fetcher)

  return <>
    <h1>Static Generation <em>with</em> Data</h1>
    <h2>{displayTime(data, error, isLoading)}</h2>
    <ul>
      <li>
        <Link href="/">Go back</Link>
      </li>
    </ul>
  </>
}
