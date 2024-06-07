import styles from './footer-contact.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterContact() {

    return(

        <footer className={styles.footerSection}>

            <div className={styles.topContainer}>

                <div className={styles.logoSubContainer}>

                    <span className={styles.logoTitle}>

                        Lopper

                    </span>

                    <span className={styles.logoDescription}>

                        Eu augue ut lectus arcu bibendum at.

                    </span>

                </div>

                <div className={styles.navSubContainer}>

                    <div className={styles.menuAndServicesContainer}>

                        <nav className={styles.menuSubContainer}>

                            <span className={styles.menuTitle}>

                                Menu

                            </span>

                            <ul className={styles.menuList}>
                                
                                <li className={styles.listItem}>

                                    <Link href='/' className={styles.link}>Home</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='/about' className={styles.link}>About</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='/services' className={styles.link}>Services</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='#' className={styles.link}>News</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='/gallery' className={styles.link}>Gallery</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='/contact' className={styles.link}>Contact</Link>

                                </li>

                            </ul>

                        </nav>

                        <nav className={styles.servicesSubContainer}>

                            <span className={styles.servicesTitle}>

                                Services

                            </span>

                            <ul className={styles.servicesList}>

                                <li className={styles.listItem}>

                                    <Link href='#' className={styles.link}>Lorem</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='#' className={styles.link}>Ipsum</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='#' className={styles.link}>Dolor</Link>

                                </li>

                                <li className={styles.listItem}>

                                    <Link href='#' className={styles.link}>Sit Amet</Link>

                                </li>

                            </ul>

                        </nav>

                    </div>

                    <nav className={styles.contactUsContainer}>

                        <span className={styles.contactUsTitle}>

                            Contact us

                        </span>

                        <div className={styles.contactUsSubContainer}>

                            <div className={styles.contactUsMailContainer}>

                                <div>

                                    <Image 
                                        src='/icons/mail.svg'
                                        width={12}
                                        height={9}
                                        alt='mail'
                                    />

                                </div>

                                <span className={styles.mailText}>

                                    contact@lop.com

                                </span>

                            </div>

                            <div className={styles.contactUsPhoneContainer}>

                                <div>

                                    <Image 
                                        src='/icons/mphone.svg'
                                        width={9}
                                        height={13.5}
                                        alt='mphone'
                                    />

                                </div>

                                <span className={styles.phoneText}>

                                    856 - 693 - 456

                                </span>

                            </div>
                            
                        </div>

                    </nav>

                    <nav className={styles.followUsContainer}>

                        <span className={styles.followUsTitle}>

                            Follow us

                        </span>

                        <div className={styles.socialsContainer}>

                            <div>

                                <Image 
                                    src='/icons/twitter.svg'
                                    width={18}
                                    height={14.62}
                                    alt='twitter'
                                />

                            </div>

                            <div>

                                <Image 
                                    src='/icons/facebook.svg'
                                    width={18}
                                    height={18}
                                    alt='facebook'
                                />

                            </div>

                            <div>

                                <Image 
                                    src='/icons/inst.svg'
                                    width={18}
                                    height={18}
                                    alt='inst'
                                />

                            </div>

                            <div>

                                <Image 
                                    src='/icons/youtube.svg'
                                    width={25.6}
                                    height={18}
                                    alt='youtube'
                                />

                            </div>

                            <div>

                                <Image 
                                    src='/icons/m-icon.svg'
                                    width={18}
                                    height={14.28}
                                    alt='M'
                                />

                            </div>

                        </div>

                    </nav>

                </div>

            </div>

            <span className={styles.botText}>

                © 2019 Lopper by mariuszdaniel. All right reserved.

            </span>

        </footer>

    )

}