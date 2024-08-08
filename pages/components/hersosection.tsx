import styles from '@/styles/Home.module.css'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import {motion} from 'framer-motion';
import Link from 'next/link';



export default function Herosection () {

  const socialIcons = [
    {
      icon: <BsFillEnvelopeFill />,
      url: "mailto:nnaemekafrank400@gmail.com",
      id:1
      
    },
    {
      icon:  <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/nnaemeka-ogunewe-45379a167",
      id:2,
      
    },
    {
      icon:   <FaGithub />,
      url: "https://github.com/frankdev0",
      id:3,
      
    },
    {
      icon:  <FaXTwitter />,
      url: "https://twitter.com/OguneweNnaemeka",
      id:4,
      
    },
  ]


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
        
          { socialIcons.map((socialIcon, index) => (
              <Link
              href={socialIcon.url}
              target={socialIcon.url.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              key={socialIcon.id}
              style={{ textDecoration: 'none', color: '#000' }}
               >
                <div  className={styles.pills}>
            <motion.div 
            key={index}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            >
            {socialIcon.icon}
            </motion.div>
            </div>
            </Link>
          ))}
         
        </div>

        {/* here goes the button */}

        <div className={styles.ballContainer}>
  <a href="#about">
    <div className={styles.boxball}>
      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className={styles.ball}
      />
    </div>
  </a>
</div>

        </div>
        </div>
        </div>
            )
        }