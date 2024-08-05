import styles from '@/styles/Home.module.css'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'


export default function Herosection () {


    return (
        <div className={styles.herbg}>
        <div className={styles.heroPosition}>
        <div>
        <div className='mb-5'>
    <h1 className={styles.herotext}>
      <span className={styles.intro}>Hi, I&lsquo;m </span> 
      <span className={styles.name}>Frank</span>
    </h1>
    <h5 className={styles.introtext}>
      I develop web applications, user interfaces and 3D visuals
    </h5>
  </div>
        <div className={styles.linewrap}>
            <div className={styles.roundball}></div>
            <div className={styles.line}></div>
        </div>
        <div className={styles.pillwrap}>
            <div className={styles.pills}>
            <BsFillEnvelopeFill />
           
            </div>
            <div className={styles.pills}>
            <FaLinkedinIn />
            </div>
            <div className={styles.pills}>
            <FaGithub />
            </div>
            <div className={styles.pills}>
            <FaXTwitter />
            </div>
        </div>
        </div>
        </div>
        </div>
            )
        }