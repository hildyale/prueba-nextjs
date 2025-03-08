import Image from "next/image";
import styles from "./loading.module.css"

function Loading() {
  return (
    <>
      <section className={styles.loading}>
        <div>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default Loading;
