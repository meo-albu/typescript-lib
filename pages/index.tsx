import Head from 'next/head'
import Heading from '../lib/components/Heading/Heading'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen grid place-items-center'>
        <Heading level={2}>
          Hello, typescript
        </Heading>
      </div>
    </div>
  )
}
