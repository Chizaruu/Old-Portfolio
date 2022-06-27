import styles from "./Main.module.scss";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export function Main() {
    return (
        <main className={styles.main}>
            <Landing />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
