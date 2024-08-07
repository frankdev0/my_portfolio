import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRef } from 'react';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
import { url } from 'inspector';
import Link from 'next/link';

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
            porjectSummary:"Sporty Credit is a digital money lending company, providing individuals with credit and micro loan solutions personal and busines use",
            title:'Loan Admin Dashboard',
            stackOne:'#Next Js',
            stackTwo:'#Material UI',
            stackThree:'#Postgre sql',
            stackFour:'#TypeScript',
            url:'https://admin.sportycredit.com/'
        },
        {
            projectImage:'/saas.jpeg',
            id:2,
            porjectSummary:"An AI advanced software that automatically assists website owners and users to promote their articles and site content.",
            title:`Saas Linkcreator`,
            stackOne:'#Next Js',
            stackTwo:'#Boostrap',
            stackThree:'#Django',
            stackFour:'#Typescript Js',
            url:'https://dev.linkcreator.ai/'
        },
        {
            projectImage:'/linkcreatoradmin.png',
            id:3,
            porjectSummary:"The Linkcreator Admin Dashboard used for the management of the Linkcreator SaaS platform.",
            title:'Linkcreator Admin',
            stackOne:'#Next Js',
            stackTwo:'#Boostrap',
            stackThree:'#Django',
            stackFour:'#Typescript Js',
            url:'https://dev-admin.linkcreator.ai/'
        },
        {
            projectImage:'/buyershub.jpg',
            id:4,
            porjectSummary:"Traders of Africa web base and ecommerce platform specializing in bulk agricultural produce purchase for aggregators",
            title:'Buyers Hub',
            stackOne:'React Js',
            stackTwo:'#Boostrap',
            stackThree:'#Mysql',
            stackFour:'#Socket IO',
            url:'https://www.tradersofafrica.com/'
        },
        {
            projectImage:'/evo.jpg',
            id:5,
            porjectSummary:"A responsive landing page for a gym and fitness center built using Vite, React Js and Tailwind CSS",
            title:'EVOGYM Landing Page',
            stackOne:'JavaScript',
            stackTwo:'#Tailwind CSS',
            stackThree:'#Vite Js',
            stackFour:'#Framer Motion',
            url:'https://gym-project-using-typescript-upl.pages.dev/'
        },
        {
            projectImage:'/momocredit.png',
            id:6,
            porjectSummary:"Momocredits is a digital money lending company, providing individuals with credit and micro loan solutions personal and busines use",
            title:'Momocredits Page',
            stackOne:'#Gatsby Js',
            stackTwo:'#Tailwind',
            stackThree:'#Animation',
            stackFour:'#Typescript Js',
            url:'https://momocredits.com/'
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
                                 <Link href={project.url} target="_blank" rel="noopener noreferrer" key={project.id} style={{ textDecoration:'none'}}>
                                <TiltingCard  project={project} />
                                </Link>
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
