import Head from "next/head";
import Header from "../components/Header/Header";
import Face from "../assets/face.png";
import Intro from "../components/Introduction/Intro";
import About from "../components/AboutMe/About";
import Education from "../components/Education/Education";

export default function Home() {
  return (
    <>
      <div className="upperSection">
        <Head>
          <title>Pooja Portfolio</title>
          <meta name="description" content="Created by Pooja" />
          <link rel="icon" href="../assets/face.png" />
        </Head>
        <Header />
        <Intro />
      </div>
      <About />
      <Education />
    </>
  );
}
