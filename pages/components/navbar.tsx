import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from 'react';


export default function Navbar () {    

    const [toggleMenu, setToggleMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false);



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


    return (
        <nav className={`${styles.navbg} ${scrolled ? styles.scrolledd : ''}`}>
        <div className={styles.navwrap}>
          <div><Image src='/rmlogo.png' alt='logo' width={150} height={100} /></div>
          <div className={styles.desktopMenu}>
            <Link href={'#about'} className={styles.menuitems}>About</Link>
            <Link href={'#experience'} className={styles.menuitems}>Experience</Link>
            <Link href={'#project'} className={styles.menuitems}>Project</Link>
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
                <Link href={'#about'} className={styles.mobilelinks} onClick={() => setToggleMenu(false)}>About</Link>
                <Link href={'#experience'} className={styles.mobilelinks} onClick={() => setToggleMenu(false)}>Experience</Link>
                <Link href={'#project'} className={styles.mobilelinks} onClick={() => setToggleMenu(false)}>Project</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
            )
        }