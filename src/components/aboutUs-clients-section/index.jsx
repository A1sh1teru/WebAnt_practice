import styles from './aboutUs-clients-section.module.scss'
import Image from 'next/image'

export default function AboutUsClientsSection() {

    return(

        <section className={styles.homeClientsContainer}>

            <div className={styles.textContainer}>

                <span className={styles.topText}>

                    What we do

                </span>
                
                <span className={styles.botText}>

                    What we do more than you can imagine, belive us.

                </span>

            </div>

            <div className={styles.logosContainer}>

                <span className={styles.logosTitle}>

                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.

                </span>

                <div className={styles.logosImages}>

                    <Image 
                        src='/img/client1-white-img.svg'
                        width={165.74}
                        height={29.77}
                        className={styles.logoImage}
                    />

                    <Image 
                        src='/img/client2-white-img.svg'
                        width={165.94}
                        height={38.71}
                        className={styles.logoImage}
                    />

                    <Image 
                        src='/img/client2-white-img.svg'
                        width={165.94}
                        height={38.71}
                    />

                    <Image 
                        src='/img/client1-white-img.svg'
                        width={165.74}
                        height={29.77}
                    />

                    <Image 
                        src='/img/client1-white-img.svg'
                        width={165.74}
                        height={29.77}
                    />

                    <Image 
                        src='/img/client2-white-img.svg'
                        width={165.94}
                        height={38.71}
                    />

                </div>

                <Image 
                    src='/img/aboutUs-clients-bg.svg'
                    width={803}
                    height={648}
                    alt='bg-image'
                    className={styles.bgImage}                
                />

            </div>

        </section>

    )

}