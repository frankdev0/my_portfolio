import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Projects () {

    const myProjects = [
        {
            projectImage:'/project.png',
            id:1,
            porjectSummary:"Traders of Africa web base and ecommerce platform specializing in bulk agricultural produce purchase for aggregators",
            title:'Linkcreator AI',
            stackOne:'#Next Js',
            stackTwo:'#Python',
            stackThree:'#Bootstrap',
            stackFour:'#TypeScript'
        },
        {
            projectImage:'/three.png',
            id:2,
            porjectSummary:"Traders of Africa web base and ecommerce platform specializing in bulk agricultural produce purchase for aggregators",
            title:`Buyer's Hub`,
            stackOne:'#React Js',
            stackTwo:'#Boostrap',
            stackThree:'#Postgre sql',
            stackFour:'#Typescript Js'
        },
        {
            projectImage:'/four.png',
            id:3,
            porjectSummary:"Traders of Africa web base and ecommerce platform specializing in bulk agricultural produce purchase for aggregators",
            title:'Sporty Credit',
            stackOne:'#React Js',
            stackTwo:'#Boostrap',
            stackThree:'#Postgre sql',
            stackFour:'#Typescript Js'
        },
        {
            projectImage:'/five.png',
            id:4,
            porjectSummary:"Traders of Africa web base and ecommerce platform specializing in bulk agricultural produce purchase for aggregators",
            title:'Buyers Hub',
            stackOne:'React Js',
            stackTwo:'#Boostrap',
            stackThree:'#Postgre sql',
            stackFour:'#Typescript Js'
        },
        {
            projectImage:'/six.png',
            id:5,
            porjectSummary:"Traders of Africa web base and ecommerce platform specializing in bulk agricultural produce purchase for aggregators",
            title:'Admin Linkcreator',
            stackOne:'React Js',
            stackTwo:'#Boostrap',
            stackThree:'#Postgre sql',
            stackFour:'#Typescript Js'
        },
        {
            projectImage:'/two.png',
            id:6,
            porjectSummary:"Traders of Africa web base and ecommerce platform specializing in bulk agricultural produce purchase for aggregators",
            title:'Market Place',
            stackOne:'#React Js',
            stackTwo:'#Boostrap',
            stackThree:'#Postgre sql',
            stackFour:'#Typescript Js'
        },
    ]


    return (
        <>
         <div className={styles.introwrapper}>
         <div className={styles.projectPadding}>
            <div className={styles.introwrap}>
            <h6 className={styles.introductiontext}>MY WORK</h6>
            <h1 className={styles.overview}>Projects.</h1>
            </div>
            <div className='row py-3'>
            <div className='col-12 col-lg-8'>
            <p className={styles.summary}>Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
            </div>
            </div>
            <div>
                <div className={styles.projectgrid}>
                    {myProjects.map((project) => (
                        <div className={styles.eachcard} key={project.id}>
                        <div className='d-flex justify-content-center' >
                        <Image src={project.projectImage} alt='projects' width={320} height={200} className={styles.projectImage}/>
                        </div>
                        <div className='pt-3 pb-2'>
                            <h6 className={styles.projectTitle}>{project.title}</h6>
                            <p className={styles.projectSummary}>{project.porjectSummary}</p>
                        </div>
                        <p className={styles.stacks}><span className={styles.blueText}>{project.stackOne}</span> <span className={styles.greenText}>{project.stackTwo}</span> <span className={styles.redText}>{project.stackThree}</span> <span className={styles.blueText}>{project.stackFour}</span></p>
                    </div>
                    ))}
                    
                </div>
            </div>
            </div>
            </div>
        </>
            )
        }