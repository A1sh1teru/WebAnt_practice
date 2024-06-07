import styles from './header.module.scss'
import Navbar from '../nav-bar'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <span className={styles.logoTitle}>
                    Lopper
                </span>
            </div>

            <div className={styles.navbarContainer}>

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

                <Image 
                    src='/icons/burger-menu-purple.svg'
                    width={27}
                    height={16}
                    alt='burger-menu-purple'
                />


            </div>

        </header>
    )

}