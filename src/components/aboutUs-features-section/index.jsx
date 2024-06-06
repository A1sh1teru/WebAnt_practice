import styles from './aboutUs-features-section.module.scss'
import Image from 'next/image'

export default function AboutUsFeaturesSection() {

    return(

        <section className={styles.aboutUsFeaturesContainer}>

            <div className={styles.firstContainer}>

                <span className={styles.firstUpperTitle}>

                    What we do

                </span>
                
                <span className={styles.firstBotTitle}>

                    What we do

                </span>

            </div>

            <div className={styles.secondContainer}>

                <div className={styles.leftSecondSubContainer}>

                    <span className={styles.leftText}>

                        We build great business

                    </span>

                </div>

                <div className={styles.rightSecondSubContainer}>

                    <span className={styles.rightText2}>

                        Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus vitae congue mauris rhoncus aenean.

                    </span>

                </div>

            </div>

            <div className={styles.thirdContainer}>

                <div className={styles.leftThirdSubContainer}>

                    <span className={styles.leftText}>

                        We build great business

                    </span>

                </div>

                <div className={styles.rightThirdSubContainer}>

                    <span className={styles.rightText}>

                        Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. 

                    </span>

                </div>

            </div>

            <div className={styles.fourthContainer}>

                <div className={styles.leftFourthSubContainer}>

                    <span className={styles.leftText}>

                        We build great business

                    </span>

                </div>

                <div className={styles.rightFourthSubContainer}>

                    <span className={styles.rightText}>

                        Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eleifend donec pretium vulputate sapien nec sagittis.

                    </span>

                </div>

            </div>

            <Image 
                src='/img/woman.svg'
                width={460}
                height={1044}
                alt='woman'
                className={styles.frontImage}
            />

        </section>

    )

}