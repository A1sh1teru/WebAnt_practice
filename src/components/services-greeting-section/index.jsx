import styles from './services-greeting-section.module.scss'
import Image from 'next/image'

export default function ServicesGreetingSection() {

    const imageStyle = {
        zIndex: -1,
        objectFit: 'cover',
      }

    return(

        <section className={styles.servicesGreetingContainer}>

            <Image 
                src='/img/services-bg.svg'
                fill={true}
                // objectFit='cover'
                alt='bg-image'
                priority={true}
                style={imageStyle}
            />

            <div className={styles.textContainer}>

                <span className={styles.title}>

                    Our services

                </span>
                
                <span className={styles.description}>

                    WE BUILD GREAT BUSINESS

                </span>

            </div>

        </section>

    )

}