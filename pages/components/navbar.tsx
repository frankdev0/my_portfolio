import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function Navbar () {    

    const [toggleMenu, setToggleMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    console.log('router.asPath', router.asPath)



    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const isActive = (hash:any) => {
      return router.asPath.split('#')[1] === hash;
    };


    return (
      <div className={styles.fullHeight}>
        <nav className={`${styles.navbg} ${scrolled ? styles.scrolledd : ''}`}>
        <div className={styles.navwrap}>
          <div><Image src='/de.png' alt='logo' width={80} height={30} /></div>
          <div className={styles.desktopMenu}>
            <Link href={'#about'} className={`${styles.menuitems} ${isActive('about') ? styles.active : ''}`}>
            About</Link>
            <Link href={'#experience'} className={`${styles.menuitems} ${isActive('experience') ? styles.active : ''}`}>
            Experience
            </Link>
            <Link href={'#project'} className={`${styles.menuitems} ${isActive('project') ? styles.active : ''}`}>
            Project
            </Link>
          </div>
          {/* MOBILE MENU  */}
          <div className={styles.mobileMenu}>
            {!toggleMenu && (
              <HiOutlineBars3BottomLeft
                className={styles.barsicon}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            )}
            {toggleMenu && (
              <MdOutlineClose
                className={styles.barsicon}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            )}
            {toggleMenu && (
              
              <div className={styles.mobilebg}>
                 <MdOutlineClose
                className={styles.barsicon}
                onClick={() => setToggleMenu(!toggleMenu)}
              />
                <Link href={'#about'} className={`${styles.mobilelinks} ${isActive('about') ? styles.active : ''}`} onClick={() => setToggleMenu(false)}>
               About
                </Link>
                <Link href={'#experience'} className={`${styles.mobilelinks} ${isActive('experience') ? styles.active : ''}`} onClick={() => setToggleMenu(false)}>
               Experience
                </Link>
                <Link href={'#project'} className={`${styles.mobilelinks} ${isActive('project') ? styles.active : ''}`} onClick={() => setToggleMenu(false)}>
                Project
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      </div>
            )
        }