import styles from './contact-greeting-section.module.scss'
import Image from 'next/image'

export default function ContactGreetingSection() {

    const imageStyle = {
        zIndex: -1,
        objectFit: 'cover',
      }

    return(

        <section className={styles.contactGreetingContainer}>

            <Image 
                src='/img/contact-bg.svg'
                fill={true}
                // objectFit='cover'
                alt='bg-image'
                priority={true}
                style={imageStyle}
            />

            <div className={styles.textContainer}>

                <span className={styles.title}>

                    Contact us

                </span>
                
                <span className={styles.description}>

                    WE BUILD GREAT BUSINESS

                </span>

            </div>

        </section>

    )

}