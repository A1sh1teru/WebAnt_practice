import styles from './gallery-greeting-section.module.scss'
import Image from 'next/image'

export default function GalleryGreetingSection() {

    return(

        <section className={styles.teamGreetingContainer}>

            <div className={styles.textContainer}>

                <span className={styles.title}>

                    Gallery

                </span>
                
                <span className={styles.description}>

                    WE BUILD GREAT BUSINESS

                </span>

            </div>

        </section>

    )

}