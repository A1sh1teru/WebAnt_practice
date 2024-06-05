import styles from './home-clients-section.module.scss'
import Image from 'next/image'

export default function HomeClientsSection() {

    return(

        <section className={styles.homeClientsContainer}>

            <div className={styles.textContainer}>

                <span className={styles.topText}>

                    What we do

                </span>
                
                <span className={styles.botText}>

                What we do more than you can imagine, belive us.

                </span>

            </div>

            <div className={styles.logosContainer}>

                <span className={styles.logosTitle}>

                    Our clients

                </span>

                <div className={styles.logosImages}>

                    <Image 
                        src='/img/client1-img.svg'
                        width={165.74}
                        height={29.77}
                    />

                    <Image 
                        src='/img/client2-img.svg'
                        width={165.94}
                        height={38.71}
                    />

                    <Image 
                        src='/img/client2-img.svg'
                        width={165.94}
                        height={38.71}
                    />

                    <Image 
                        src='/img/client1-img.svg'
                        width={165.74}
                        height={29.77}
                    />

                    <Image 
                        src='/img/client1-img.svg'
                        width={165.74}
                        height={29.77}
                    />

                    <Image 
                        src='/img/client2-img.svg'
                        width={165.94}
                        height={38.71}
                    />

                </div>

            </div>

            <div className={styles.leftTextContainer}>

                <span className={styles.leftTextContainerTitle}>

                    We build great business

                </span>

                <div className={styles.leftTextSubContainer}>

                    <span className={styles.leftTextSubContainerDescription}>

                        Nisl condimentum id venenatis a. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sollicitudin tempor id eu nisl nunc. 

                    </span>

                    <span className={styles.leftTextSubContainerDescription}>

                        Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.

                    </span>

                    <span className={styles.leftTextSubContainerDescription}>

                        Massa massa ultricies mi quis hendrerit dolor magna. Egestas dui id ornare arcu odio..

                    </span>

                </div>

            </div>

        </section>

    )

}