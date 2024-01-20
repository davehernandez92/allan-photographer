"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { CldImage } from "next-cloudinary";


import { Button } from "@/components/ui/button";
import allan from "../../public/images/op1Mobil.webp";
import nosotros from "../../public/images/nosotros.jpg";
import nosotros2 from "../../public/images/nosotros2.jpg";

import nosotrosDesk from "../../public/images/nosotrosDesktop.jpg";
import nosotrosDesk2 from "../../public/images/op3.jpg";
import nosotrosDesk3 from "../../public/images/op2.webp";
import styles from "../app/ui/components/about.module.css";

import CarouselImg from "./CarouselImg";

export default function About() {
  return (
    <div className="md:mb-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.3 },
        }}
        viewport={{ once: true }}
        className={`w-full h-[60vh] md:h-[80vh] flex items-center justify-center`}
      >
        <p className={styles.sloganTxt}>
          Capturando la magia del amor, te damos la bienvenida a un universo
          donde cada instante se transforma en{" "}
          <span className={styles.emphasis}>memorias eternas</span>. Descubre la
          belleza de tu historia a través de nuestras{" "}
          <span className={styles.emphasis}>lentes.</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={` pt-10 w-full h-full  flex flex-col md:flex-row-reverse items-center ${styles.helloContainer}`}
      >
        <Image
          src={allan}
          width={369}
          height={554}
          alt="Fotografia de Allan Banuelos "
          className={`lg:hidden ${styles.hello__img}`}
        />
        <Image
          src={allan}
          width={492}
          height={738}
          alt="Fotografia de Allan Banuelos "
          className={`lg:block hidden ${styles.hello__img}`}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.6 },
          }}
          viewport={{ once: true }}
          className={` w-full h-full ${styles.hello}`}
        >
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
          <Button className="" variant="outline" asChild>
            <Link href="/nosotros" className={styles.button}>
              Ver mas
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/*-------- PORQUE NOSOTROS? --------- */}

      <div className={styles.us}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={styles.us__heading}
        >
          <h2>¿Por qué nosotros?</h2>
          <p>Descubre por qué somos tu mejor elección como fotógrafos</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.33, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={styles.wrapper}
        >
          <div className={styles.reason}>
            <div className={`${styles.reason__wrap} mb-8`}>
              <h3>Enfoque Personalizado</h3>
              <p>
                Entendemos que cada pareja es única, y trabajamos de cerca para
                reflejar tu autenticidad. Desde momentos espontáneos hasta
                composiciones artísticas, nuestra creatividad se combina con tu
                historia para crear recuerdos visuales inolvidables.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className={styles.img__back}
            >
              <Image
                src={nosotros}
                width={505}
                height={758}
                alt="Sesion de pareja "
                className={` block md:hidden ${styles.us__img}`}
              />
              <Image
                src={nosotrosDesk}
                width={858}
                height={572}
                alt="Sesion de pareja "
                className={` hidden md:block ${styles.us__img}`}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={styles.us}
      >
        <div className={styles.wrapper}>
          <div className={` flex-row-reverse ${styles.reason}`}>
            <div className={`${styles.reason__wrap} mb-8`}>
              <h3>Narrativa Emocional y Auténtica</h3>
              <p>
                Buscamos autenticidad y conexión genuina en cada foto, creando
                un ambiente relajado y divertido.
              </p>
              <p>
                El resultado son imágenes que no solo se ven, sino que también
                transmiten emociones. Estamos comprometidos a contar tu historia
                de manera auténtica y única a través de cada fotografía.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className={styles.img__back}
            >
              <Image
                src={nosotros2}
                width={450}
                height={675}
                alt="Sesion de pedida de mano "
                className={` block md:hidden ${styles.us__img}`}
              />
              <Image
                src={nosotrosDesk2}
                width={842}
                height={561}
                alt="Sesion de bodas "
                className={` hidden md:block ${styles.us__img}`}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={styles.us}
      >
        <div className={styles.wrapper}>
          <div className={styles.reason}>
            <div className={`${styles.reason__wrap} mb-8`}>
              <h3>Experiencia Integral y Servicio Excepcional</h3>
              <p>
                Nos comprometemos a brindar una experiencia fluida y
                enriquecedora, desde la primera consulta hasta la entrega de tus
                recuerdos.
              </p>
              <p>
                Nuestra transparencia en el proceso y dedicación para superar
                tus expectativas aseguran que cada cliente sea tratado de manera
                especial.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.8 },
              }}
              viewport={{ once: true }}
              className={` mb-5 ${styles.img__back}`}
            >
              <CldImage
                src={"bodas/vestidoBodas.jpg"}
                width={432}
                height={650}
                alt="Sesion de bodas "
                className={` block md:hidden ${styles.us__img}`}
              />
              <Image
                src={nosotrosDesk3}
                width={842}
                height={561}
                alt="Sesion de bodas "
                className={` hidden md:block ${styles.us__img}`}
              />
            </motion.div>
            
          </div>
          <div className={`${styles.button__div}`}>
              <Button variant="outline" asChild>
                <Link href="/contacto" className={styles.button__us}>
                  CONTACTANOS
                </Link>
              </Button>
            </div>
        </div>
      </motion.div>

      <CarouselImg/>
    </div>
  );
}
