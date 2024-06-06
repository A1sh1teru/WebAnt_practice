import styles from './aboutUs-intro-section.module.scss'

export default function AboutUsIntroSection() {

    return(

        <section className={styles.aboutUsIntroContainer}>

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

                        Our objectives

                    </span>

                    <span className={styles.botLeftDescription}>

                        Amet consectetur adipiscing elit pellentesque habitant morbi. Fermentum et sollicitudin ac orci phasellus. Dolor sit amet consectetur adipiscing elit duis. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.

                    </span>

                </div>

                <div  className={styles.rightSubContainer}>

                    <span className={styles.botRightTitle}>

                        Our story

                    </span>

                    <span className={styles.botRightDescription}>

                        Etiam dignissim diam quis enim lobortis. Egestas sed sed risus pretium quam vulputate dignissim. Eleifend quam adipiscing vitae proin sagittis. Pharetra pharetra massa massa ultricies. Elementum eu facilisis sed odio morbi. Morbi tincidunt augue interdum velit.

                    </span>

                </div>

            </div>

        </section>

    )

}