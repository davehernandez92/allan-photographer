import Image from "next/image"
import allan from '../../public/images/op1Mobil.webp'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import styles from '../app/ui/components/about.module.css'


export default function About() {
  return (
    <div>
      <div
        className={`w-full h-[70vh] md:h-[80vh] flex items-center justify-center`}
      >
        <p className={styles.sloganTxt}>
          Capturando la magia del amor, te damos la bienvenida a un universo
          donde cada instante se transforma en{" "}
          <span className={styles.emphasis}>memorias eternas</span>. Descubre la
          belleza de tu historia a través de nuestras{" "}
          <span className={styles.emphasis}>lentes.</span>
        </p>
      </div>

      <div
        className={` pt-10 w-full h-full  flex flex-col md:flex-row ${styles.helloContainer}`}
      >
        <Image
          src={allan}
          width={369}
          height={554}
          alt="Fotografia de Allan Banuelos "
          className={styles.hello__img}
        />
        <div className={` w-full h-full ${styles.hello}`}>
          <h1 className={styles.hello__title}>Hola, soy Allan.</h1>
          <p className={styles.hello__txt}>
            Soy un fotógrafo profesional, especializado en bodas y retratos, con
            sede en Acapulco, Gro.
          </p>
          <p className={styles.hello__txt}>
            He capturado momentos por más de 5 años. Como tu fotógrafo, mi
            compromiso radica en capturar imágenes que no solo te transporten
            visualmente, sino que también te sumerjan en los sentimientos que
            los acompañan.
          </p>
          <Button variant='outline' asChild>
            <Link href="/nosotros" className={styles.button}>
              Ver mas
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
