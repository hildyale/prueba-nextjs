import styles from "./page.module.css";
import Animes from "./components/animes/animes";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles.main}>
        <Animes />
      </main>
      <footer className={styles.footer}>
        <p>Footer de prueba</p>
      </footer>
    </div>
  );
}
