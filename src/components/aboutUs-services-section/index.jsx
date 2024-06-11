import styles from './aboutUs-services-section.module.scss'
import Image from 'next/image'

export default function AboutUsServicesSection() {

    return(
        <section className={styles.aboutUsServicesContainer}>

            <div className={styles.titleContainer}>
                
                <span className={styles.topTitle}>
                    
                    What we do

                </span>

                <span className={styles.botTitle}>

                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.

                </span>

            </div>

            <div className={styles.cardsContainer}>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Research

                    </span>

                    <span className={styles.cardDescription}>

                        Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Marketing

                    </span>

                    <span className={styles.cardDescription}>

                        Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 

                    </span>

                </div>

                <div className={styles.card}>

                    <Image 
                        src='/icons/card-react.svg'
                        width={72}
                        height={72}
                        alt='card-icon'
                    />

                    <span className={styles.cardTitle}>
                        
                        Results

                    </span>

                    <span className={styles.cardDescription}>

                        Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 

                    </span>

                </div>

            </div>

        </section>
    )

}