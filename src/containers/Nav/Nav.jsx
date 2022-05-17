import styles from "./Nav.module.scss";

export function Nav() {
    return (
        <nav className={styles.navbar}>
            <a className={styles.navbar__link} href="/" title="Hello World!">
                &lt;Abdul Kadir Coskun /&gt;
            </a>
            <input id={styles.hamburger_toggle} type="checkbox" />
            <label
                className={styles.navbar__hamburger_container}
                htmlFor={styles.hamburger_toggle}
            >
                <div
                    className={styles.navbar__hamburger_container_button}
                ></div>
            </label>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__list__item}>
                    <a
                        className={styles.navbar__list__item__link}
                        href="#landing"
                        title="Let's take it from the top."
                    >
                        Home
                    </a>
                </li>
                <li className={styles.navbar__list__item}>
                    <a
                        className={styles.navbar__list__item__link}
                        href="#about"
                        title="Could be private! D:"
                    >
                        About
                    </a>
                </li>
                <li className={styles.navbar__list__item}>
                    <a
                        className={styles.navbar__list__item__link}
                        href="#skills"
                        title="I'm a developer!"
                    >
                        Skills
                    </a>
                </li>
                <li className={styles.navbar__list__item}>
                    <a
                        className={styles.navbar__list__item__link}
                        href="#projects"
                        title="~Stuff I had fun making~"
                    >
                        Projects
                    </a>
                </li>
                <li className={styles.navbar__list__item}>
                    <a
                        className={styles.navbar__list__item__link}
                        href="#contact"
                        title="We meeting next week?"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
