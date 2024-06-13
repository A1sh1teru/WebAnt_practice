'use client'

import styles from './header-home.module.scss'
import Image from 'next/image'
import NavbarHome from '../nav-bar-home'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';

export default function HeaderHome() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <span className={styles.logoTitle}>
                    Lopper
                </span>
            </div>

            <div className={`${styles.navbarContainer} ${isMenuOpen ? styles.open : ''}`}>

                <NavbarHome />

                    <div className={styles.phoneContainer}>

                        <Image 
                            src='/icons/mphone.svg'
                            width={18}
                            height={28.8}
                            alt='phoneIcon'
                        />

                        <span className={styles.phoneText}>

                            <Link href='/contact' className={styles.link}>(01) 666 - 693 - 456</Link>

                        </span>

                    </div>

            </div>

            <Image 
                // src={isMenuOpen ? '/icons/close-icon-white.svg' : '/icons/burger-menu.svg'}
                src='/icons/burger-menu.svg'
                width={27}
                height={16}
                alt='burger-menu-purple'
                className={styles.burgerMenu}
                onClick={toggleMenu}
            />

            {isMenuOpen && (
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`} ref={menuRef}>
                    <NavbarHome />
                    <div className={styles.phoneContainer}>
                        <Image 
                            src='/icons/mphone.svg'
                            width={18}
                            height={28.8}
                            alt='phoneIcon'
                        />
                        <span className={styles.phoneText}>
                            <Link href='/contact' className={styles.link}>(01) 666 - 693 - 456</Link>
                        </span>
                    </div>
                </div>
            )}

        </header>
    )

}