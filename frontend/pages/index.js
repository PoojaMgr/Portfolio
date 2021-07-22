import Head from "next/head";
import Header from "../components/Header/Header";
import Intro from "../components/Introduction/Intro";
import About from "../components/AboutMe/About";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contacts/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="upperSection">
        <Head>
          <title>Pooja Thapa</title>
          <meta name="Pooja Thapa portfolio" content="Created by Pooja" />
          <link rel="icon" href="/face.ico"/>
        </Head>
        <Header />
        <Intro />
      </div>
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
