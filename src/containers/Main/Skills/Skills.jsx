import styles from "./Skills.module.scss";

export default function Skills() {
    return (
        <section className={styles.skills} id="skills">
            <h2>Skills</h2>
            <div className={styles.skills__container}>
                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/net.ico"
                        alt=".Net"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        .Net
                    </h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/azure.svg"
                        alt="Azure"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        Azure
                    </h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/c-sharp.svg"
                        alt="C#"
                    />
                    <h3 className={styles.skills__container__item__name}>C#</h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/css3.svg"
                        alt="CSS"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        CSS
                    </h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/git.svg"
                        alt="Git"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        Git
                    </h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={
                            (styles.skills__container__item__icon,
                            styles.skills__container__item__icon_invert)
                        }
                        src="images/icons/github.svg"
                        alt="Github"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        Github
                    </h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/html-5.svg"
                        alt="HTML"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        HTML
                    </h3>
                </div>

                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/sass.svg"
                        alt="Sass"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        Sass
                    </h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={
                            (styles.skills__container__item__icon,
                            styles.skills__container__item__icon_invert)
                        }
                        src="images/icons/unity.svg"
                        alt="Unity"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        Unity
                    </h3>
                </div>
                <div className={styles.skills__container__item}>
                    <img
                        className={styles.skills__container__item__icon}
                        src="images/icons/wordpress.svg"
                        alt="WordPress"
                    />
                    <h3 className={styles.skills__container__item__name}>
                        WordPress
                    </h3>
                </div>
            </div>
        </section>
    );
}
