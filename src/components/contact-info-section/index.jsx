import styles from './contact-info-section.module.scss'
import Image from 'next/image'

export default function ContactInfoSection() {

    return(

        <section className={styles.contactInfoContainer}>

            <div className={styles.leftContainer}>

                <span className={styles.topText}>

                    We build great business

                </span>

                <div className={styles.addressWrapperContainer}>

                    <div className={styles.addressContainer}>

                        <Image 
                            src='/icons/location.svg'
                            width={32}
                            height={44}
                            alt='location'
                        />

                        <div className={styles.addressTextContainer}>

                            <span className={styles.addressTitle}>

                                Our Office

                            </span>
                            
                            <div className={styles.addressTextSubContainer}>

                                <span className={styles.addressText}>

                                    91 E. Lexington Street

                                </span>
                                
                                <span className={styles.addressText}>

                                    Apt 688

                                </span>
                                
                                <span className={styles.addressText}>

                                    Gibsonia, PA 15044

                                </span>

                            </div>

                        </div>

                    </div>

                    <div className={styles.contactWaysContainer}>

                        <div className={styles.waysTopSubContainer}>

                            <Image 
                                src='/icons/mail-red.svg'
                                width={24}
                                height={18}
                                alt='mail'
                            />

                            <span className={styles.mailText}>

                                contact@lop.com

                            </span>

                        </div>

                        <div className={styles.waysBotSubContainer}>

                            <Image 
                                src='/icons/phone-red.svg'
                                width={18}
                                height={28.8}
                                alt='phone'
                            />

                            <span className={styles.phoneText}>

                                (01) 666 - 693 - 456

                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.rightContainer}>

                <Image 
                    src='/img/contact.svg'
                    fill={true}
                    objectFit='cover'
                    alt='cover'
                    className={styles.imageCover}
                />

            </div>

            <div className={styles.inputsContainer}>

                <span className={styles.inputsMainTitle}>

                    Get in touch with us

                </span>

                <div className={styles.inputsSubContainer}>

                    <div className={styles.leftInputsContainer}>

                        <div className={styles.leftTopInputsContainer}>

                            <span className={styles.leftTopInputsTitle}>

                                YOUR NAME

                            </span>

                            <input type="text" className={styles.leftTopInput} placeholder='Your name' />

                        </div>

                        <div className={styles.leftBotInputsContainer}>

                            <span className={styles.leftBotInputsTitle}>

                                YOUR EMAIL

                            </span>

                            <input type="text" className={styles.leftBotInput} placeholder='Your email' />

                        </div>

                    </div>

                    <div className={styles.rightInputsContainer}>

                        <div className={styles.rightInputsTopContainer}>

                            <span className={styles.rightInputsTopTitle}>

                                YOUR MESSAGE

                            </span>

                            <textarea className={styles.rightInput} placeholder='Write your message'></textarea>

                        </div>

                        <div className={styles.rightInputsBtnContainer}>

                            Send message

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}