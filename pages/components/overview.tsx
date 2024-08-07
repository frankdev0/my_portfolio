import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Overview () {


    return (
        <>
        <div className={styles.introwrapper}>
            <div className={styles.introwrap}>
            <h6 className={styles.introductiontext}>INTRODUCTION</h6>
            <h1 className={styles.overview}>Overview</h1>
            </div>
            <div className='row'>
            <div className='col-12 col-lg-8'>
            <p className={styles.summary}>As a Software Developer with a degree in Information Management Technology, I bring a unique combination of technical expertise, and IT knowledge to the table. with over 4 years experience in developing and designing web applications using cutting edge technologies such as JavaScript, ReactJS, and TypeScript.</p>
            <p className={styles.summary}>I am well-versed in building user-centric, secure web applications. Proficient in intergrating external libraries and experienced in creating responsive, mobile-first designs with Figma. I am also skilled in optimizing page load times and implementing SEO strategies. My background in Information Management Technology allows me to approach development with a secure-first mindset. I am a team player who enjoys collaborating with cross-functional teams to deliver innovative solutions for complex problems. I am always looking to expand my skills and stay up-to-date with the latest technologies in the industry. </p>
            <p className={styles.summary}>Outside of coding, you&lsquo;ll often find me on the football field or immersed in video games.</p>
            </div>
            </div>
        </div>
        </>
            )
        }