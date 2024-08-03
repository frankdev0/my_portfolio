import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/navbar";
import Herosection from "./components/hersosection";
import Overview from "./components/overview";
import Mystacks from "./components/mystacks";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Globe from "./components/globe";

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
        <Overview/>
        <Mystacks/>
        <Experience/>
        <Projects/>
        <Globe/>
      {/* Here goes the header */}
      </div>
    </>
  );
}
