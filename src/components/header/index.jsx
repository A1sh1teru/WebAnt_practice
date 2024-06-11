'use client'

import styles from './header.module.scss'
import Navbar from '../nav-bar'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

// export default function Header() {

//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return(
//         <header className={styles.headerContainer}>
//             <div className={styles.logoContainer}>
//                 <span className={styles.logoTitle}>
//                     Lopper
//                 </span>
//             </div>

//             <div className={`${styles.navbarContainer} ${isMenuOpen ? styles.open : ''}`}>

//                 <Navbar />

//                     <div className={styles.phoneContainer}>

//                         <Image 
//                             src='/icons/mphone-purple.svg'
//                             width={18}
//                             height={28.8}
//                             alt='phoneIcon'
//                         />

//                         <span className={styles.phoneText}>

//                             <Link href='/contact' className={styles.link}>(01) 666 - 693 - 456</Link>

//                         </span>

//                     </div>

//             </div>

//             <Image 
//                 src='/icons/burger-menu-purple.svg'
//                 width={27}
//                 height={16}
//                 alt='burger-menu-purple'
//                 className={styles.burgerMenu}
//                 onClick={toggleMenu}
//             />

//         </header>
//     )

// }

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <span className={styles.logoTitle}>
                    Lopper
                </span>
            </div>

            <div className={`${styles.navbarContainer} ${isMenuOpen ? styles.open : ''}`}>

                <Navbar />

                    <div className={styles.phoneContainer}>

                        <Image 
                            src='/icons/mphone-purple.svg'
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
                src={isMenuOpen ? '/icons/close-icon.svg' : '/icons/burger-menu-purple.svg'}
                width={27}
                height={16}
                alt='burger-menu-purple'
                className={styles.burgerMenu}
                onClick={toggleMenu}
            />

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Navbar />
                    <div className={styles.phoneContainer}>
                        <Image 
                            src='/icons/mphone-purple.svg'
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