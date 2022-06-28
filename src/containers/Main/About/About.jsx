import styles from "./About.module.scss";

export default function About() {
    return (
        <section class={styles.about} id="about">
            <h2>About Me</h2>
            <p>
                I'm a self-taught Game Developer focusing on development through
                the Unity Engine. I have Front-End developer experience
                designing new features from ideation to production. Whether for
                Game or Front-End development, I consider the user experience
                while writing reusable and efficient code. I passionately
                combine good design, technology, and innovation in all my
                projects, which I like to accompany from the first idea to
                release. Currently, I'm focused on creating Remember, a narrated
                short game that focuses on a man reminiscing about his life.
            </p>
        </section>
    );
}
