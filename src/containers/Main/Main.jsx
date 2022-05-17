import styles from "./Main.module.scss";

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
            <section class="skills" id="skills">
                <h2>Skills</h2>
                <div class="skills__container">
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/net.ico"
                            alt=".Net"
                        />
                        <h3 class="skills__container__item__name">.Net</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/azure.svg"
                            alt="Azure"
                        />
                        <h3 class="skills__container__item__name">Azure</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/c-sharp.svg"
                            alt="C#"
                        />
                        <h3 class="skills__container__item__name">C#</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/css3.svg"
                            alt="CSS"
                        />
                        <h3 class="skills__container__item__name">CSS</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/git.svg"
                            alt="Git"
                        />
                        <h3 class="skills__container__item__name">Git</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon skills__container__item__icon--invert"
                            src="images/icons/github.svg"
                            alt="Github"
                        />
                        <h3 class="skills__container__item__name">Github</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/html-5.svg"
                            alt="HTML"
                        />
                        <h3 class="skills__container__item__name">HTML</h3>
                    </div>

                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/sass.svg"
                            alt="Sass"
                        />
                        <h3 class="skills__container__item__name">Sass</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon skills__container__item__icon--invert"
                            src="images/icons/unity.svg"
                            alt="Unity"
                        />
                        <h3 class="skills__container__item__name">Unity</h3>
                    </div>
                    <div class="skills__container__item">
                        <img
                            class="skills__container__item__icon"
                            src="images/icons/wordpress.svg"
                            alt="WordPress"
                        />
                        <h3 class="skills__container__item__name">WordPress</h3>
                    </div>
                </div>
            </section>
            <section class="projects" id="projects">
                <h2>Projects</h2>
                <div class="projects__container">
                    <div class="projects__container__item">
                        <div class="projects__container__item__info-divider">
                            <img
                                class="projects__container__item__info-divider__image"
                                src="images/rlsktd.webp"
                                alt="Roguelike Starter Kit Top Down"
                            />
                            <h3 class="projects__container__item__info-divider__name">
                                RLSKTD
                            </h3>
                            <p class="projects__container__item__info-divider__description">
                                An open-source framework I started to be a
                                starting point for future roguelikes.
                            </p>
                        </div>
                        <div class="projects__container__item__link-divider">
                            <a
                                class="projects__container__item__link-divider__link"
                                href="https://github.com/Chizaruu/rlsktd"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="See the code."
                            >
                                <img
                                    class="projects__container__item__link-divider__link__icon projects__container__item__link-divider__link__icon--invert"
                                    src="images/icons/github.svg"
                                    alt="Github"
                                />
                                <p>&lt;Code /&gt;</p>
                            </a>
                        </div>
                    </div>
                    <div class="projects__container__item">
                        <div class="projects__container__item__info-divider">
                            <img
                                class="projects__container__item__info-divider__image"
                                src="images/remember.webp"
                                alt="Remember"
                            />
                            <h3 class="projects__container__item__info-divider__name">
                                Remember
                            </h3>
                            <p class="projects__container__item__info-divider__description">
                                A narrated short game that focuses on a man
                                reminiscing about his life.
                            </p>
                        </div>
                        <div class="projects__container__item__link-divider">
                            <a
                                class="projects__container__item__link-divider__link"
                                href="https://chizaruu.github.io/Remember/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Play on GitHub"
                            >
                                <img
                                    class="projects__container__item__link-divider__link__icon projects__container__item__link-divider__link__icon--invert"
                                    src="images/icons/github.svg"
                                    alt="Github"
                                />
                                <p>Play</p>
                            </a>
                        </div>
                    </div>
                    <div class="projects__container__item">
                        <div class="projects__container__item__info-divider">
                            <img
                                class="projects__container__item__info-divider__image"
                                src="images/for-the-bros.webp"
                                alt="For The Bros"
                            />
                            <h3 class="projects__container__item__info-divider__name">
                                For The Bros
                            </h3>
                            <p class="projects__container__item__info-divider__description">
                                A game I made to test my skills in Unity and C#
                                over a two week period.
                            </p>
                        </div>
                        <div class="projects__container__item__link-divider">
                            <a
                                class="projects__container__item__link-divider__link"
                                href="https://chizaruu.itch.io/for-the-bros"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Play on itch"
                            >
                                <img
                                    class="projects__container__item__link-divider__link__icon projects__container__item__link-divider__link__icon--invert"
                                    src="images/icons/itch-io.svg"
                                    alt="Itch"
                                />
                                <p>Play</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
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
