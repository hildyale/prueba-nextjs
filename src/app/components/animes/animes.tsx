import AnimeCard, { AnimeProp } from "@/app/components/anime-card/anime-card";
import Loading from "@/app/components/loading/loading";
import { data } from "../_data";
import styles from "./animes.module.css";

async function Animes() {
  return (
    <main className={styles.Animes}>
      <h4 className={styles.texto}>Explore Anime</h4>

      <section className={styles.cards}>
        {data.map((item: AnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <Loading />
    </main>
  );
}

export default Animes;