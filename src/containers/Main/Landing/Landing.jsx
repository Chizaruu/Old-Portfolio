import styles from "./Landing.module.scss";

export default function Landing() {
    return (
        <section class="landing" id="landing">
            <div class="landing__text">
                <h1>Hi, I'm Abdul Kadir</h1>
                <p>
                    I'm a Front-End(
                    <span id="asterisk" title="Training with _nology">
                        *
                    </span>
                    ) / Game developer. I'm currently working as a freelancer
                    while creating content on
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
    );
}
