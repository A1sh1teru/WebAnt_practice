import styles from './nav-bar.module.scss'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>

            <ul className={styles.navbarWrapper}>
                <li className={styles.navbarItem}>
                    Home
                </li>
                <li className={styles.navbarItem}>
                    Services
                </li>
                <li className={styles.navbarItem}>
                    Work
                </li>
                <li className={styles.navbarItem}>
                    About
                </li> 
            </ul>

        </nav>
    )
}