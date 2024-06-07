import styles from './gallery-photos-section.module.scss'
import Image from 'next/image'

export default function GalleryPhotosSection() {

    return(

        <section className={styles.galleryPhotosContainer}>

            <div className={styles.topContainer}>

                <div className={styles.topLeftSubContainer}>

                    <Image 
                        src='/img/gallery1.svg'
                        fill={true}
                        objectFit='cover'
                    />

                </div>

                <div className={styles.topRightSubContainer}>

                    <Image 
                        src='/img/gallery2.svg'
                        // width={720}
                        // height={828}
                        fill={true}
                        objectFit='cover'
                        className={styles.image5}
                    />

                </div>

            </div>
            
            <div className={styles.midContainer}>

                <Image 
                    src='/img/gallery3.svg'
                    fill={true}
                    objectFit='cover'
                />

            </div>

            <div className={styles.botContainer}>

                <div className={styles.botLeftSubContainer}>

                    <Image 
                        src='/img/gallery4.svg'
                        // width={720}
                        // height={828}
                        fill={true}
                        objectFit='cover'
                        className={styles.image5}
                    />

                </div>

                <div className={styles.botRightSubContainer}>

                    <Image 
                        src='/img/gallery5.svg'
                        fill={true}
                        objectFit='cover'
                    />

                </div>

            </div>

        </section>

    )

}