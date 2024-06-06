import styles from './services-intro-section.module.scss'

export default function ServicesIntroSection() {

    return(

        <section className={styles.servicesIntroContainer}>

            <div className={styles.wrapper}>

                <div className={styles.topContainer}>

                    <span className={styles.topTitle}>

                        What we do

                    </span>
                    
                    <span className={styles.topDescription}>

                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.

                    </span>

                </div>

                <div className={styles.botContainer}>

                    <div className={styles.leftSubContainer}>

                        <span  className={styles.botLeftTitle}>

                            15+

                        </span>

                        <span className={styles.botLeftDescription}>

                            Nobel prizes

                        </span>

                    </div>

                    <div className={styles.midSubContainer}>

                        <span  className={styles.botMidTitle}>

                            33

                        </span>

                        <span className={styles.botMidDescription}>

                            Nobel prizes

                        </span>

                    </div>

                    <div  className={styles.rightSubContainer}>

                        <span className={styles.botRightTitle}>

                            12

                        </span>

                        <span className={styles.botRightDescription}>

                            Nobel prizes

                        </span>

                    </div>

                </div>

            </div>

        </section>

    )

}