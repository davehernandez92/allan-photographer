"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import styles from "../ui/aboutPage.module.css";
import allan from "../../../public/images/allan2.jpg";
import square from "../../../public/images/square.webp";

export default function AcercaPage() {
 
  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={`containerP w-full flex flex-col items-center gap-8 md:gap-10 lg:gap-0 ${styles.main}`}
      >
        <div
          className={` flex flex-col gap-3 md:text-center lg:mb-10 ${styles.heading}`}
        >
          <h1>¡Encantado de conocerte!</h1>
          <h2>Soy Allan Bañuelos.</h2>
          <p>Fotógrafo en Acapulco, México.</p>
        </div>
        <div className={`flex flex-col gap-7 md:items-center lg:flex-row  ${styles.nosotros}`}>
          <Image
            src={allan}
            width={450}
            height={535}
            alt="Porta retrato de Allan Banuelos"
            className={` lg:hidden ${styles.imgAllan}`}
          />
          <Image
            src={allan}
            width={860}
            height={860}
            alt="Porta retrato de Allan Banuelos"
            className={`lg:block hidden w-1/2 ${styles.imgAllan}`}
          />
          <div className={`lg:w-1/2 flex flex-col gap-7  ${styles.txt__wrapR}`}>
            <p>
              He estado en esta bella profesión desde hace más de 5 años; sin
              duda, cambió mi vida en todos los aspectos y, por supuesto, la
              fotografía de bodas apareció para quedarse.
            </p>

            <p>
              Mis comienzos se dieron debido a la gran admiración que tengo por
              las puestas de sol, arquitectura y naturaleza que tenemos en
              México.
            </p>

          
          </div>
        </div>
        <div className={`flex flex-col gap-7  lg:flex-row-reverse ${styles.nosotros}`}>
          <CldImage
            src="bodas/novia"
            width={908}
            height={667}
            alt="Imagen de novia en Acapulco"
            className="lg:hidden"
          />
          <Image
            src={square}
            width={860}
            height={860}
            alt="Porta retrato de Allan Banuelos"
            className={`lg:block hidden w-1/2 ${styles.imgAllan}`}
          />

          <div className={`lg:w-1/2 flex flex-col gap-7 ${styles.txt__wrapL}`}>
          <p>
            Durante mi proceso fotográfico, me di cuenta de que el amor de
            pareja tiene algo en común con todo lo anterior, y es que son
            únicos. Cada amor es diferente y capturarlo me llena de emoción.
          </p>

          <p>
            Me considero una persona apasionada, extrovertida y siempre
            dispuesta a hacer sentir cómodas a las personas que me rodean.
          </p>
         

          </div>

          
        </div>

        <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.333, duration: 0.6 },
        }}
        viewport={{ once: true }}
        className="flex flex-col gap-7">
        <CldImage
            src="pedidas/kxk9to6j5ccvvc2ry36g"
            width={410}
            height={500}
            alt="Imagen de pareja en Acapulco"
            className="md:hidden"
          />
          <CldImage
            src="bodas/09092023-DSC07211-min_qwb91f_eqv6va"
            width={1100}
            height={730}
            alt="Imagen de novios en Acapulco"
            className={`hidden md:inline-block md:mx-auto md:mt-20 lg:mt-36 ${styles.imgBoda}`}
          />

          <p className="lg:py-10 lg:px-20 lg:mx-20">
            En cada clic del obturador, busco capturar no solo imágenes, sino
            emociones; poder captar cada momento, desde las risas espontáneas
            hasta los abrazos llenos de amor. Cada fotografía cuenta una
            historia que compartes, y me comprometo a hacer que cada una sea tan
            única como tú.
          </p>
        </motion.div>

        <div className="flex flex-col gap-7 mt-8 last:items-center md:mb-24 ">
          <p>
            No puedo esperar para saber más sobre ti. Pongámonos en contacto y
            hablemos acerca de tu historia.
          </p>

          <Button className={`mt-4 ${styles.button}`} asChild>
            <Link href="/contacto" className={styles.button__link}>
              CONTACTO
            </Link>
          </Button>
        </div>
      </motion.main>
    </>
  );
}
