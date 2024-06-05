import styles from './home-services-section.module.scss'
import Image from 'next/image'

export default function HomeServicesSection() {

    return(
        <section className={styles.homeServicesContainer}>

            <div className={styles.titleContainer}>
                
                <span className={styles.topTitle}>
                    
                    What we can do?

                </span>

                <span className={styles.botTitle}>

                    Our services

                </span>

            </div>

            <div className={styles.cardsContainer}>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={54}
                        height={54}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Webdesign

                    </span>

                    <span className={styles.cardDescription}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={54}
                        height={54}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Webdev

                    </span>

                    <span className={styles.cardDescription}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={54}
                        height={54}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Marketing

                    </span>

                    <span className={styles.cardDescription}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={54}
                        height={54}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Marketing

                    </span>

                    <span className={styles.cardDescription}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={54}
                        height={54}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Webdesign

                    </span>

                    <span className={styles.cardDescription}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={54}
                        height={54}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Webdev

                    </span>

                    <span className={styles.cardDescription}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

            </div>

            <div className={styles.quoteContainer}>

                <div className={styles.quoteWrapper}>
                    <span className={styles.quote}>

                        “Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.”

                    </span>
                </div>
                
                <span className={styles.quoteAuthor}>

                    Andrew Slomka <span className={styles.dash}>-</span> <span className={styles.authorCompany}>Some Company</span>

                </span>

            </div>

            <div className={styles.imageContainer}>
                <Image 
                    src='/img/man.svg'
                    width={460}
                    height={504}
                    alt='man'
                />
            </div>

        </section>
    )

}