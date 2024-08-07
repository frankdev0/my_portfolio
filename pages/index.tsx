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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <div className={styles.herobg}>
        <Navbar/>
        <Herosection/>
      </div>
      <section id="about">
        <Overview/>
      </section>
      
        <Mystacks/>

      <section id="experience">
      <Experience/>
      </section>
      <section id="project">
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
