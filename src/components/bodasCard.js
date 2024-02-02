'use client'
import React from "react";
import Image from "next/image";
import img from "../../public/images/op2.webp";
import imgDesk from "../../public/images/bodasServicios.webp";
import styles from "../app/ui/components/servicesCard.module.css";
import {motion} from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import circle from "../../public/images/circle.svg";

export default function BodasCard() {
  return (
    <div className={`flex flex-col gap-4 lg:grid lg:grid-cols-2  ${styles.card}`}>
      <div className={`flex flex-col gap-4`}>
        <h2>Sesión de Bodas</h2>
        <p>
          Me dedico a capturar la esencia única de cada boda. Ofrezco una
          experiencia personal y profesional.
        </p>
        <p>
          Mi enfoque se centra en capturar momentos auténticos y significativos,
          y me encanta trabajar con parejas que buscan algo más allá de lo
          tradicional.
        </p>
        <Image
          src={img}
          width={580}
          height={390}
          alt="Fotografia de boda en Acapulco"
          className={`md:hidden ${styles.imgMobile}`}
        />

        <Accordion type="single" collapsible className="my-4 lg:mt-10" >
          <AccordionItem value="item-1">
            <AccordionTrigger className={`text-left ${styles.accordion__title}`}>
              Paquete de bodas 1
            </AccordionTrigger>
            <AccordionContent className={styles.accordion__txt}>
              <h3>Fotografía y video / 10hrs</h3>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> 300 fotografias retocadas en formato digital</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> Video resumen de 10 minutos</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> Video resumen de 1 minuto para redes sociales</p>
              </div>
              <p className={styles.accordion__leyend}>
                No incluye tomas de drone
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={`text-left ${styles.accordion__title}`}>Paquete de bodas 2</AccordionTrigger>
            <AccordionContent className={styles.accordion__txt}>
              <h3>Fotografía y video / 10hrs</h3>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> 500 fotografias retocadas en formato digital</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> Video resumen de 10 minutos</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> Video resumen de 1 minuto para redes sociales</p>
              </div>
              <p className={styles.accordion__leyend}>
                No incluye tomas de drone
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={`text-left ${styles.accordion__title}`}>Paquete de bodas 3</AccordionTrigger>
            <AccordionContent className={styles.accordion__txt}>
              <h3>Fotografía y video / 10hrs</h3>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> 800 fotografias retocadas en formato digital</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> Video resumen de 15 minutos</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> Video resumen de 1 minuto para redes sociales</p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={circle}
                  width={10}
                  height={10}
                  alt="circe svg"
                  className={styles.circle}
                />
                <p> Icluye tomas de drone para tu video</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className={` ${styles.images__div}`}>
        <Image
          src={img}
          width={580}
          height={390}
          alt="Fotografia de boda en Acapulco"
          className={`hidden md:block lg:hidden ${styles.imgTablet}`}
        />
        <motion.div initial={{ opacity: 0, x: 10 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.33, duration: 0.3 },
        }}>
            
            <Image
            src={imgDesk}
            width={600}
            height={650}
            alt="Fotografia de boda en Acapulco"
            className={`hidden lg:block ${styles.imageDesk}`}
            />
        </motion.div>
      </div>
    </div>
  );
}
