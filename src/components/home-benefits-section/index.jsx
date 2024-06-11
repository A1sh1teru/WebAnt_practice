import styles from './home-benefits-section.module.scss'
import Image from 'next/image'

export default function HomeBenefitsSection() {

    return(

        <section className={styles.homeBenefitsContainer}>

            <div className={styles.leftSubContainer}>

                <div className={styles.topTextContainer}>

                    <span className={styles.upperText}>

                        Benefits

                    </span>

                    <div className={styles.textSubContainer}>

                        <span className={styles.title}>

                            Shaping the future

                        </span>

                        <div className={styles.description}>

                            Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales ut eu sem integer vitae. Libero nunc consequat interdum varius.

                        </div>

                    </div>

                </div>

                <div className={styles.botSubContainer}>
                    
                    <div className={styles.botTextContainer}>

                        <span className={styles.feature}>

                            Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi non.

                        </span>

                        <span className={styles.feature}>

                            Lectus vestibulum mattis ullamcorper velit sed ullamcorper.

                        </span>

                        <span className={styles.feature}>

                            Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Dui faucibus in ornare quam viverra.

                        </span>

                        <span className={styles.feature}>

                            Posuere ac ut consequat semper viverra.

                        </span>

                    </div>

                    <div className={styles.btnContainer}>

                        <span className={styles.btnText}>

                            Learn more

                        </span>

                    </div>

                </div>

            </div>

            <div className={styles.rightSubContainer}>

                <div>

                    <Image
                        src='/img/benefits-back-img.jpg'
                        width={460}
                        height={522}
                        alt='back-img'
                        className={styles.backImg}
                    />

                </div>

                <div>

                    <Image
                        src='/img/benefits-front-img.jpg'
                        width={362}
                        height={324}
                        alt='front-img'
                        className={styles.frontImg}
                    />

                </div>

            </div>

        </section>

    )

}