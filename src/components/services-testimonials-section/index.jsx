import styles from './services-testimonial-section.module.scss'
import Image from 'next/image'

export default function ServicesTestimonialsSection() {

    return(

        <section className={styles.homeTestimonialsContainer}>

            <div className={styles.frontImage}>

                <Image 
                    src='/img/services-avatar.svg'
                    width={460}
                    height={460}
                    alt='avatar'
                />

            </div>

            <div className={styles.backImage}>
                <Image 
                    src='/img/faces.svg'
                    width={1268}
                    height={349}
                    alt='faces'
                />
            </div>

            <div className={styles.apostropheImage}>
                <Image 
                    src='/img/apostrophe.svg'
                    width={92.25}
                    height={79.73}
                    alt='apostrophe'
                />
            </div>

            <div className={styles.topContainer}>

                <div className={styles.arrowLeftContainer}>

                    <Image 
                        src='/icons/arrow-left.svg'
                        width={10.5}
                        height={10.5}
                        alt='arrow-left'
                    />

                </div>

                <div className={styles.topTextContainer}>

                    <div className={styles.topText}>

                        Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique.

                    </div>

                </div>

                <div className={styles.arrowRightContainer}>

                    <Image 
                        src='/icons/red-arrow-right.svg'
                        width={10.5}
                        height={10.5}
                        alt='red-arrow-right'
                    />
                    
                </div>

            </div>

            <span className={styles.botText}>

                Kerry Johnes <span className={styles.dash}>-</span> <span className={styles.textCompany}>Some Company</span>

            </span>

        </section>

    )

}