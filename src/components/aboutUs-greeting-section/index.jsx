import styles from './aboutUs-greeting-section.module.scss'
import Image from 'next/image'

export default function AboutUsGreetingSection() {

    const imageStyle = {
        zIndex: -1,
        objectFit: 'cover',
      }

    return(

        <section className={styles.aboutUsGreetingContainer}>

            <Image 
                src='/img/aboutUsBg.svg'
                fill={true}
                // objectFit='cover'
                alt='bg-image'
                priority={true}
                style={imageStyle}
            />

            <div className={styles.textContainer}>

                <span className={styles.title}>

                    About us

                </span>
                
                <span className={styles.description}>

                    We build great business

                </span>

            </div>

        </section>

    )

}