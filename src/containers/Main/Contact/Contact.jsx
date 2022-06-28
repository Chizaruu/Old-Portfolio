import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <h2>Contact</h2>
            <p>You can contact me through my email/socials below:</p>
            <div className={styles.contact__container}>
                <a
                    className={styles.contact__container__item}
                    href="mailto:abdulcoskun@hotmail.com"
                    title="Email me!"
                >
                    <img
                        className={
                            (styles.contact__container__item__icon,
                            styles.contact__container__item__icon_invert)
                        }
                        src="images/icons/mail.svg"
                        alt="Email"
                        title="Email me!"
                    />
                </a>
                <a
                    className={styles.contact__container__item}
                    href="https://www.linkedin.com/in/abdul-kadir-coskun/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className={styles.contact__container__item__icon}
                        src="images/icons/linkedin.svg"
                        alt="Linkedin"
                        title="Connect soon, kay?"
                    />
                </a>
                <a
                    className={styles.contact__container__item}
                    href="https://twitter.com/ChizaruuGCO"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className={styles.contact__container__item__icon}
                        src="images/icons/twitter.svg"
                        alt="Twitter"
                        title="Tweet Tweet."
                    />
                </a>
            </div>
        </section>
    );
}
