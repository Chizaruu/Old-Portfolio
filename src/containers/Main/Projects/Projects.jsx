import styles from "./Projects.module.scss";

export default function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <h2>Projects</h2>
            <div className={styles.projects__container}>
                <div className={styles.projects__container__item}>
                    <div
                        className={
                            styles.projects__container__item__info_divider
                        }
                    >
                        <img
                            className={
                                styles.projects__container__item__info_divider__image
                            }
                            src="images/rlsktd.webp"
                            alt="Roguelike Starter Kit Top Down"
                        />
                        <h3
                            className={
                                styles.projects__container__item__info_divider__name
                            }
                        >
                            RLSKTD
                        </h3>
                        <p
                            className={
                                styles.projects__container__item__info_divider__description
                            }
                        >
                            An open-source framework I started to be a starting
                            point for future roguelikes.
                        </p>
                    </div>
                    <div
                        className={
                            styles.projects__container__item__link_divider
                        }
                    >
                        <a
                            className={
                                styles.projects__container__item__link_divider__link
                            }
                            href="https://github.com/Chizaruu/rlsktd"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="See the code."
                        >
                            <img
                                className={
                                    (styles.projects__container__item__link_divider__link__icon,
                                    styles.projects__container__item__link_divider__link__icon_invert)
                                }
                                src="images/icons/github.svg"
                                alt="Github"
                            />
                            <p>&lt;Code /&gt;</p>
                        </a>
                    </div>
                </div>
                <div className={styles.projects__container__item}>
                    <div
                        className={
                            styles.projects__container__item__info_divider
                        }
                    >
                        <img
                            className={
                                styles.projects__container__item__info_divider__image
                            }
                            src="images/remember.webp"
                            alt="Remember"
                        />
                        <h3
                            className={
                                styles.projects__container__item__info_divider__name
                            }
                        >
                            Remember
                        </h3>
                        <p
                            className={
                                styles.projects__container__item__info_divider__description
                            }
                        >
                            A narrated short game that focuses on a man
                            reminiscing about his life.
                        </p>
                    </div>
                    <div
                        className={
                            styles.projects__container__item__info_divider
                        }
                    >
                        <a
                            className={
                                styles.projects__container__item__link_divider__link
                            }
                            href="https://chizaruu.github.io/Remember/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Play on GitHub"
                        >
                            <img
                                className={
                                    (styles.projects__container__item__link_divider__link__icon,
                                    styles.projects__container__item__link_divider__link__icon_invert)
                                }
                                src="images/icons/github.svg"
                                alt="Github"
                            />
                            <p>Play</p>
                        </a>
                    </div>
                </div>
                <div className={styles.projects__container__item}>
                    <div
                        className={
                            styles.projects__container__item__info_divider
                        }
                    >
                        <img
                            className={
                                styles.projects__container__item__info_divider__image
                            }
                            src="images/for-the-bros.webp"
                            alt="For The Bros"
                        />
                        <h3
                            className={
                                styles.projects__container__item__info_divider__name
                            }
                        >
                            For The Bros
                        </h3>
                        <p
                            className={
                                styles.projects__container__item__info_divider__description
                            }
                        >
                            A game I made to test my skills in Unity and C# over
                            a two week period.
                        </p>
                    </div>
                    <div
                        className={
                            styles.projects__container__item__info_divider
                        }
                    >
                        <a
                            className={
                                styles.projects__container__item__link_divider__link
                            }
                            href="https://chizaruu.itch.io/for-the-bros"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Play on itch"
                        >
                            <img
                                className={
                                    (styles.projects__container__item__link_divider__link__icon,
                                    styles.projects__container__item__link_divider__link__icon_invert)
                                }
                                src="images/icons/itch-io.svg"
                                alt="Itch"
                            />
                            <p>Play</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
