import styles from './nav-bar.module.scss'
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>

            <ul className={styles.navbarWrapper}>
                <li className={styles.navbarItem}>
                    <Link href='/' className={styles.link}>Home</Link>
                </li>
                <li className={styles.navbarItem}>
                    Services
                </li>
                <li className={styles.navbarItem}>
                    Work
                </li>
                <li className={styles.navbarItem}>

                    <Link href='/about' className={styles.link}>About</Link>
                    
                </li> 
            </ul>

        </nav>
    )
}