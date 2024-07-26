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
            <p className={styles.summary}>I am a detail-oriented Frontend Developer with a passion for creating quality applications using JavaScript and its frameworks. My journey began in 2019, after completing a zero-mastery program in web development. Since then, I&lsquo;ve gained hands-on experience by contributing to various projects and acquiring certifications in software and web development.</p>
            <p className={styles.summary}>Proficient in JavaScript, Typescript, Next, React, CSS, HTML, and more, I specialize in crafting interactive user interfaces and dynamic user experiences. I am confident, well-organized, and continuously curious about learning new technologies. I thrive on creative problem-solving and am perpetually working to improve my skills one challenge at a time.</p>
            <p className={styles.summary}>Outside of coding, you&lsquo;ll often find me on the football field or immersed in video games.</p>
            </div>
            </div>
        </div>
        </>
            )
        }