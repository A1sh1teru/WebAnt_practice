import styles from './header.module.scss'
import Navbar from '../nav-bar'
import Image from 'next/image'

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
                        src='/icons/mphone.svg'
                        width={18}
                        height={28.8}
                        alt='phoneIcon'
                    />

                    <span className={styles.phoneText}>
                        (01) 666 - 693 - 456
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