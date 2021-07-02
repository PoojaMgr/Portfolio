import Head from 'next/head'
import Header from '../components/Header';
import Face from "../assets/face.png";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pooja Portfolio</title>
        <meta name="description" content="Created by Pooja" />
        <link rel="icon" href='../assets/face.png' />
      </Head>
      <Header />
      <Intro />
      About Me
    </div>
  )
}
