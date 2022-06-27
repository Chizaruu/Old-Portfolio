import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <section class="contact" id="contact">
            <h2>Contact</h2>
            <p>You can contact me through my email/socials below:</p>
            <div class="contact__container">
                <a
                    class="contact__container__item"
                    href="mailto:abdulcoskun@hotmail.com"
                    title="Email me!"
                >
                    <img
                        class="contact__container__item__icon contact__container__item__icon--invert"
                        src="images/icons/mail.svg"
                        alt="Email"
                        title="Email me!"
                    />
                </a>
                <a
                    class="contact__container__item"
                    href="https://www.linkedin.com/in/abdul-kadir-coskun/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        class="contact__container__item__icon"
                        src="images/icons/linkedin.svg"
                        alt="Linkedin"
                        title="Connect soon, kay?"
                    />
                </a>
                <a
                    class="contact__container__item"
                    href="https://twitter.com/ChizaruuGCO"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        class="contact__container__item__icon"
                        src="images/icons/twitter.svg"
                        alt="Twitter"
                        title="Tweet Tweet."
                    />
                </a>
            </div>
        </section>
    );
}
