import Header from "../header";
import styles from './home-greeting-section.module.scss';
import Image from "next/image";

export default function HomeGreetingSection() {

    return(
        <section className={styles.homeGreetingContainer}>

            <Image 
                src='/img/home-bg-img.jpg'
                fill={true}
                alt='bg-img'
                style={{
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />

            <div className={styles.headerContainer}>

                <Header />

            </div>

            <div className={styles.midContainer}>

                <div className={styles.midLeftContainer}>

                    <span className={styles.upperTitle}>
                        WHAT WE DO?
                    </span>
                    
                    <h1 className={styles.mainTitle}>

                        <span className={styles.mainTitleTop}>We grow</span>

                        <span className={styles.mainTitleBot}>great business</span>

                    </h1>

                </div>

                <div className={styles.midRightContainer}>

                    <div className={styles.rightText}>
                        SCROLL TO SEE MORE
                    </div>

                    <Image 
                        src='/icons/arrow-down.svg'
                        width={21}
                        height={46}
                        alt='arrow-down'
                    />

                </div>

            </div>

            <div className={styles.botContainer}>

                <span className={styles.botText}>
                    Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
                </span>

                <div className={styles.botArrowContainer}>

                    <Image 
                        src='/icons/arrow-right.svg'
                        width={14}
                        height={14}
                        alt='arrow-right'
                    />

                </div>

            </div>

        </section>
    );
}