import styles from './footer.module.scss'
import Image from 'next/image'

export default function Footer() {

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
                                
                                <li className={styles.listItem}>Home</li>

                                <li className={styles.listItem}>About</li>

                                <li className={styles.listItem}>Services</li>

                                <li className={styles.listItem}>News</li>

                                <li className={styles.listItem}>Gallery</li>

                                <li className={styles.listItem}>Contact</li>

                            </ul>

                        </nav>

                        <nav className={styles.servicesSubContainer}>

                            <span className={styles.servicesTitle}>

                                Services

                            </span>

                            <ul className={styles.servicesList}>

                                <li className={styles.listItem}>Lorem</li>

                                <li className={styles.listItem}>Ipsum</li>

                                <li className={styles.listItem}>Dolor</li>

                                <li className={styles.listItem}>Sit Amet</li>

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