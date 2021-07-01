import Head from 'next/head'
import Header from '../components/Header';
import Face from "../assets/face.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pooja Portfolio</title>
        <meta name="description" content="Created by Pooja" />
        <link rel="icon" href='../assets/face.png' />
      </Head>
      <Header />
    </div>
  )
}
