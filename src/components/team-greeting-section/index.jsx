import styles from './team-greeting-section.module.scss'
import Image from 'next/image'

export default function TeamGreetingSection() {

    const imageStyle = {
        zIndex: -1,
        objectFit: 'cover',
      }

    return(

        <section className={styles.teamGreetingContainer}>

            <Image 
                src='/img/teamBg.svg'
                fill={true}
                // objectFit='cover'
                alt='bg-image'
                priority={true}
                style={imageStyle}
            />

            <div className={styles.textContainer}>

                <span className={styles.title}>

                    Our team

                </span>
                
                <span className={styles.description}>

                    WE BUILD GREAT BUSINESS

                </span>

            </div>

        </section>

    )

}