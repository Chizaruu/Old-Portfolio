import styles from "./Main.module.scss";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";

export function Main() {
    return (
        <main className={styles.main}>
            <section class="landing" id="landing">
                <div class="landing__text">
                    <h1>Hi, I'm Abdul Kadir</h1>
                    <p>
                        I'm a Front-End(
                        <span id="asterisk" title="Training with _nology">
                            *
                        </span>
                        ) / Game developer. I'm currently working as a
                        freelancer while creating content on
                        <a
                            id="youtube"
                            href="https://www.youtube.com/channel/UC8__XEn9chu9LYDxFC4WzIA"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="My channel! :)"
                        >
                            Youtube
                        </a>
                        for the Unity Engine.
                    </p>
                    <div class="landing__text__image-container">
                        <a
                            href="https://www.linkedin.com/in/abdul-kadir-coskun/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                class="landing__text__image-container__link__icon"
                                src="images/icons/linkedin.svg"
                                alt="Linkedin"
                                title="Connect soon, kay?"
                            />
                        </a>
                        <a
                            href="https://github.com/Chizaruu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                class="landing__text__image-container__link__icon"
                                src="images/icons/github-doodle.svg"
                                alt="Github"
                                title="This is where I keep the stuff."
                            />
                        </a>
                        <a
                            href="https://chizaruu.itch.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                class="landing__text__image-container__link__icon landing__text__image-container__link__icon--invert"
                                src="images/icons/itch-io.svg"
                                alt="Itch"
                                title="Erm, I made some playable stuff."
                            />
                        </a>
                    </div>
                </div>
                <img
                    class="landing__image"
                    src="images/Coder-Transparent-PNG.png"
                    alt="alt= Some guy coding"
                    title="That's not me..."
                />
            </section>
            <section class="about" id="about">
                <h2>About Me</h2>
                <p>
                    I'm a self-taught Game Developer focusing on development
                    through the Unity Engine. I have Front-End developer
                    experience designing new features from ideation to
                    production. Whether for Game or Front-End development, I
                    consider the user experience while writing reusable and
                    efficient code. I passionately combine good design,
                    technology, and innovation in all my projects, which I like
                    to accompany from the first idea to release. Currently, I'm
                    focused on creating Remember, a narrated short game that
                    focuses on a man reminiscing about his life.
                </p>
            </section>
            <Skills></Skills>
            <Projects></Projects>
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
        </main>
    );
}
