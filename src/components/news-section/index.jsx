import styles from './news-section.module.scss'
import Image from 'next/image'

export default function NewsSection() {

    return(

        <section className={styles.homeNewsContainer}>

            <div className={styles.newsContainer}>

                <div className={styles.textSubContainer}>

                    <span className={styles.title}>

                        Subscribe to our newsletter

                    </span>
                    
                    <span className={styles.description}>

                        Cras pulvinar mattis nunc sed blandit.

                    </span>

                </div>

                <div className={styles.actionSubContainer}>

                    <span className={styles.mailText}>

                        Enter email

                    </span>

                    <div className={styles.subscribeContainer}>

                        <span className={styles.subscribeText}>

                            Subscribe

                        </span>

                        <div className={styles.arrowContainer}>

                            <Image 
                                src='/icons/red-arrow-right.svg'
                                width={7.88}
                                height={7.88}
                                alt='red-arrow-right'
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}