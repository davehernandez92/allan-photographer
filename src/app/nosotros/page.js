'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import styles from "../ui/aboutPage.module.css";
import allan from "../../../public/images/allan2.jpg";

export default function AcercaPage() {


  const images = [
    {
      name: "carousel1",
      width: "600",
      height: "1000",
    },
    {
      name: "carousel2",
      width: "600",
      height: "1000",
    },
    {
      name: "carousel3",
      width: "600",
      height: "1000",
    },
    
  ];
  return (
    <>
      <motion.main
      initial={{ opacity: 0 , y:12}}
        whileInView={{
          opacity: 1,
          y:0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={`containerP w-full flex flex-col items-center gap-8 md:gap-10 ${styles.main}`}
      >
        <div
        
         className={` flex flex-col gap-3 md:text-center ${styles.heading}`}>
          <h1>¡Encantado de conocerte!</h1>
          <h2>Soy Allan Banuelos.</h2>
          <p>Fotógrafo en Acapulco, México.</p>
        </div>

        <Image
          src={allan}
          width={443}
          height={582}
          alt="Porta retrato de Allan Banuelos"
          className={` lg:hidden ${styles.imgAllan}`}
        />
        <Image
          src={allan}
          width={883}
          height={1097}
          alt="Porta retrato de Allan Banuelos"
          className={`lg:block hidden ${styles.imgAllan}`}
        />

        <div className="flex flex-col gap-7 ">
          <p>
            He estado en esta bella profesión desde hace más de 5 años; sin
            duda, cambió mi vida en todos los aspectos y, por supuesto, la
            fotografía de bodas apareció para quedarse.
          </p>

          <p>
            Mis comienzos se dieron debido a la gran admiración que tengo por
            las puestas de sol, arquitectura y naturaleza que tenemos en México.
          </p>

          <CldImage
            src="bodas/bnywhoqklptvq9qeheqq"
            width={908}
            height={667}
            alt="Imagen de novia en Acapulco"
          />

          <p>
            Durante mi proceso fotográfico, me di cuenta de que el amor de
            pareja tiene algo en común con todo lo anterior, y es que son
            únicos. Cada amor es diferente y capturarlo me llena de emoción.
          </p>

          <p>
            Me considero una persona apasionada, extrovertida y siempre
            dispuesta a hacer sentir cómodas a las personas que me rodean.
          </p>
          <CldImage
            src="pedidas/kxk9to6j5ccvvc2ry36g"
            width={410}
            height={550}
            alt="Imagen de pareja en Acapulco"
            className="md:hidden"
          />
          <CldImage
            src="bodas/carousel6"
            width={908}
            height={667}
            alt="Imagen de boda en Acapulco"
            className="hidden md:block"
          />

          <p>
            En cada clic del obturador, busco capturar no solo imágenes, sino
            emociones; poder captar cada momento, desde las risas espontáneas
            hasta los abrazos llenos de amor. Cada fotografía cuenta una
            historia que compartes, y me comprometo a hacer que cada una sea tan
            única como tú.
          </p>
        </div>

        <div className="flex flex-col gap-7 mt-8 last:items-center">
          <p>
            No puedo esperar para saber más sobre ti. Pongámonos en contacto y
            hablemos acerca de tu historia.
          </p>

          
        <Button className={`mt-4 ${styles.button}`}  asChild>
          <Link href="/contacto" className={styles.button__link}>
            CONTACTO
          </Link>
        </Button>
        </div>
      </motion.main>
    </>
  );
}
