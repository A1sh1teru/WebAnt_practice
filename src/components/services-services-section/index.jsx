import styles from './services-services-section.module.scss'
import Image from 'next/image'

export default function ServicesServicesSection() {

    return(
        <section className={styles.homeServicesContainer}>

            <Image 
                src='/img/map.svg'
                width={1098.67}
                height={529.35}
                className={styles.map}
            />

            <div className={styles.titleContainer}>
                
                <span className={styles.topTitle}>
                    
                    We are Amazing

                </span>

                <span className={styles.midTitle}>
                    
                    Our services

                </span>

                <span className={styles.botTitle}>

                    Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam elementum pulvinar etiam non. Eu consequat.

                </span>

            </div>

            <div className={styles.cardsContainer}>

                <div className={styles.card}>

                    <Image 
                        src='/icons/services-icon1.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle1}>
                        
                        Webdesign

                    </span>

                    <span className={styles.cardDescription1}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/services-icon2.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle2}>
                        
                        Webdev

                    </span>

                    <span className={styles.cardDescription2}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/services-icon3.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle3}>
                        
                        Marketing

                    </span>

                    <span className={styles.cardDescription3}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/services-icon4.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle4}>
                        
                        Marketing

                    </span>

                    <span className={styles.cardDescription4}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/services-icon5.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle5}>
                        
                        Webdesign

                    </span>

                    <span className={styles.cardDescription5}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/services-icon6.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle6}>
                        
                        Webdev

                    </span>

                    <span className={styles.cardDescription6}>

                        Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.

                    </span>

                </div>

            </div>

        </section>
    )

}