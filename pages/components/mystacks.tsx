import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {motion} from 'framer-motion';

interface stackProps  {
    image:string;
    id:number;
    title:string;

}

export default function Mystacks () {

    const stacks = [
        {
            image: "/html.png",
            id:1,
            title: "HTML 5"
        },
        {
            image: "/css.png",
            id:2,
            title: "CSS"
        },
        {
            image: "/javascript.png",
            id:3,
            title: "JavaScript"
        },
        {
            image: "/typescript.png",
            id:4,
            title: "TypeScript"
        },
        {
            image: "/react.png",
            id:5,
            title: "React JS"
        },
        {
            image: "/next.png",
            id:6,
            title: "Next JS"
        },
        {
            image: "/redux.png",
            id:7,
            title: "Redux Toolkit"
        },
        {
            image: "/tailwind.png",
            id:8,
            title: "Tailwind CSS"
        },
        {
            image: "/nodejs.png",
            id:9,
            title: "Node JS"
        },
        {
            image: "/mongodb.png",
            id:10,
            title: "Mongo DB"
        },
        {
            image: "/material.png",
            id:11,
            title: "Material UI"
        },
        {
            image: "/git.png",
            id:12,
            title: "Git"
        },
        {
            image: "/figma.png",
            id:13,
            title: "Figma"
        },
      
    ]


    return (
        <>
        <div className={styles.introwrapper}>
        <div className={styles.introwrap}>
            <h6 className={styles.introductiontext}>MY STACKS</h6>
            </div>
            <div className='row'>
            <div className='col-12'>
                <div className={styles.stackgrid}>
                    {stacks.map((stack:stackProps, i) => (
                        <motion.div 
                        className={styles.eachstack} 
                        key={stack.id}
                        initial={{opacity:0, translateX:-50, translateY:-50}}
                        animate={{opacity:1, translateX:0, translateY:0}}
                        transition={{duration:0.3, delay: i * 0.5}}
                        >
                            <div>
                        <Image src={stack.image} alt='stacks' width={50} height={40}/>
                        <h5 className={styles.stacktitle}>{stack.title}</h5>
                        </div>
                    </motion.div>
                    ))}
                    
                </div>
            </div>
            </div>
        </div>
       
        </>
            )
        }