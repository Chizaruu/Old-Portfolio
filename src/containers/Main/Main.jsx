import styles from "./Main.module.scss";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Main() {
    return (
        <main className={styles.main}>
            <div>
                <Landing />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
