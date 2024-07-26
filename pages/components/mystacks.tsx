import Image from 'next/image'
import styles from '@/styles/Home.module.css'

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
            image: "/type.png",
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
            image: "/node.png",
            id:9,
            title: "Node JS"
        },
        {
            image: "/mongo.png",
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
                    {stacks.map((stack:stackProps) => (
                        <div className={styles.eachstack} key={stack.id}>
                            <div>
                        <Image src={stack.image} alt='stacks' width={60} height={50}/>
                        <h5 className={styles.stacktitle}>{stack.title}</h5>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
            </div>
        </div>
       
        </>
            )
        }