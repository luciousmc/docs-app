import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Docs Replica App</title>
      </Head>

      <Header />
    </div>
  )
}
