import styles from './services-features-section.module.scss'
import Image from 'next/image'

export default function ServicesFeaturesSection() {

    return(

        <section className={styles.servicesFeaturesContainer}>

            <div className={styles.topContainer}>

                <span className={styles.topTitle1}>

                    WHAT WE DO

                </span>
                
                <span  className={styles.topTitle2}>

                    What we  do

                </span>
                
                <span className={styles.topDescription}>

                    Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, 

                </span>

            </div>

            <div className={styles.botContainer}>

                <div className={styles.subContainer1}>

                    <span className={styles.card1Title1}>

                        01

                    </span>

                    <span className={styles.card1Title2}>

                        Upper prior hundred links approach reedy

                    </span>

                    <span className={styles.card1Description}>

                        Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, 

                    </span>

                </div>

                <div className={styles.subContainer2}>

                    <Image 
                        src='/img/services-card2-image.svg'
                        width={705}
                        height={468}
                    />

                    <div className={styles.card2Color}>

                    </div>

                </div>

                <div className={styles.subContainer3}>

                    <Image 
                        src='/img/services-card3-image.svg'
                        width={705}
                        height={468}
                    />

                    <div className={styles.card3Color}>

                    </div>

                </div>

                <div className={styles.subContainer4}>

                    <span className={styles.card4Title1}>

                        02

                    </span>

                    <span className={styles.card4Title2}>

                        Upper prior hundred links approach reedy

                    </span>

                    <span className={styles.card4Description}>

                        Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, 

                    </span>

                </div>

                <div className={styles.subContainer5}>

                    <span className={styles.card5Title1}>

                        03

                    </span>

                    <span className={styles.card5Title2}>

                        Upper prior hundred links approach reedy

                    </span>

                    <span className={styles.card5Description}>

                        Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, 

                    </span>

                </div>

                <div className={styles.subContainer6}>

                    <Image 
                        src='/img/services-card6-image.svg'
                        width={705}
                        height={468}
                    />

                    <div className={styles.card6Color}>

                    </div>

                </div>

            </div>

        </section> 

    )

}