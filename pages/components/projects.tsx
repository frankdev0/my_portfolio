import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRef } from 'react';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";

  interface Projectt {
    projectImage: string;
    id: number;
    porjectSummary: string;
    title: string;
    stackOne: string;
    stackTwo: string;
    stackThree: string;
    stackFour: string;
}


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
    ];

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
                                <TiltingCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const TiltingCard = ({ project }: { project: Projectt }) => {
    const ROTATION_RANGE = 80;
    const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 140, damping: 50 });
    const ySpring = useSpring(y, { stiffness: 140, damping: 50 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e:any) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
      className={styles.eachcard}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      whileHover={{ scale: 1.05 }}
    >
     
      <div className={styles.shimmer}>
        <div className="d-flex justify-content-center">
          <Image src={project.projectImage} alt="projects" width={320} height={200} className={styles.projectImage} />
        </div>
        <div className="pt-3 pb-2">
          <h6 className={styles.projectTitle}>{project.title}</h6>
          <p className={styles.projectSummary}>{project.porjectSummary}</p>
        </div>
        <p className={styles.stacks}>
          <span className={styles.blueText}>{project.stackOne}</span>
          <span className={styles.greenText}>{project.stackTwo}</span>
          <span className={styles.redText}>{project.stackThree}</span>
          <span className={styles.blueText}>{project.stackFour}</span>
        </p>
      </div>
    </motion.div>
    );
};
