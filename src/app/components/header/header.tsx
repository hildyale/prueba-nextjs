import Image from "next/image";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBackground}>
        <Image
            src="/hero.png"
            alt="background"
            layout="fill"
            objectFit="cover"
            quality={100}
        />
      </div>
      <div className={styles.logo}>
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className={styles.texto}>
          Explore The <span>Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className={styles.headerImage}>
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Header;
