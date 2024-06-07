import styles from './header-home.module.scss'
import Image from 'next/image'
import NavbarHome from '../nav-bar-home'
import Link from 'next/link'

export default function HeaderHome() {

    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <span className={styles.logoTitle}>
                    Lopper
                </span>
            </div>

            <div className={styles.navbarContainer}>

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

                <Image 
                    src='/icons/burger-menu.svg'
                    width={27}
                    height={16}
                    alt='burger-menu'
                />


            </div>

        </header>
    )

}