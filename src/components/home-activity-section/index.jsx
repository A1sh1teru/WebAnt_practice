import styles from './home-activity-section.module.scss'

export default function HomeActivitySection() {

    return(

        <section className={styles.homeActivityContainer}>

            <div className={styles.topContainer}>

                <span className={styles.topContainerTitle}>

                    What we do

                </span>

                <span className={styles.topContainerDescription}>

                    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.

                </span>

            </div>

            <div className={styles.botContainer}>

                <div className={styles.cardStyle1}>

                    <span className={styles.cardNumberStyle1}>

                        01

                    </span>

                    <span className={styles.cardTitle}>

                        Research

                    </span>

                    <span className={styles.cardDescription}>

                        Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 

                    </span>

                </div>

                <div className={styles.cardStyle2}>

                    <span className={styles.cardNumberStyle2}>

                        02

                    </span>

                    <span className={styles.cardTitle}>

                        Marketing

                    </span>

                    <span className={styles.cardDescription}>

                        Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 

                    </span>

                </div>

                <div className={styles.cardStyle2}>

                    <span className={styles.cardNumberStyle2}>

                        03

                    </span>

                    <span className={styles.cardTitle}>

                        Results

                    </span>

                    <span className={styles.cardDescription}>

                        Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 

                    </span>

                </div>

            </div>

        </section>

    )

}