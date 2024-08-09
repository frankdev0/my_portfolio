import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/navbar";
import Herosection from "./components/hersosection";
import Overview from "./components/overview";
import Mystacks from "./components/mystacks";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Globe from "./components/globe";
// import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import StarsCanvas from "./components/stars";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nnaemeka&lsquo;s Porfolio</title>
        <meta name="description" content="Nnaemeka&lsquo;s Porfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"  />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <div>
      <div className={styles.herobg}>
        <Navbar/>
        <Herosection/>
      </div>
      <section id="about" className="pt-3" style={{backgroundColor:'#050816'}}>
        <Overview/>
      </section>
      
        <Mystacks/>

      <section id="experience" className="pt-3" style={{backgroundColor:'#050816'}}>
      <Experience/>
      </section>
      <section id="project" className="pt-3" style={{backgroundColor:'#050816'}}>
        <Projects/>
      </section>
        <div className={styles.introwrapper}>
        <div style={{position:'relative', zIndex:'0', height:'400px', padding:'3rem 0rem'}}>
        <Globe/>
        <StarsCanvas/>
        </div>
        </div>
             </div>
    </>
  );
}
