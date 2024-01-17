

import About from "@/components/about";
import styles from "./ui/components/home.module.css";

export default function Home() {
  return (
    <main>
      <div className={`h-screen relative ${styles.heroContainer}`}>
        <div
          className={`absolute inset-0 bg-cover bg-center hidden md:block  ${styles.heroImg}`}
        >
          <h1 className={`absolute z-10 ${styles.hero__title}`}>
            Wedding Photographer.
          </h1>
          <div className={styles.overlay}></div>
        </div>
        <div
          className={`absolute inset-0 bg-cover bg-center block md:hidden  ${styles.heroImg_mobile}`}
        >
          {/* <h1 className={`absolute z-10 ${styles.hero__titleMobile}`}>
            Wedding Photographer.
          </h1> */}
        </div>
        {/* Your hero content goes here */}
      </div>

      <About/>
    </main>
  );
}
