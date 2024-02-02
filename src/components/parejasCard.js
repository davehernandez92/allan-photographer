'use client'

import React from "react";
import Image from "next/image";
import imgPareja from "../../public/images/services.webp";
import imgDesk from "../../public/images/parejasServicios.webp";
import styles from "../app/ui/components/servicesCard.module.css";
import {motion} from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import circle from "../../public/images/circle.svg";

export default function ParejasCard() {
  return (
    <div
      className={`flex flex-col gap-4 lg:grid lg:grid-cols-2 ${styles.card}`}
    >
      <div className={`flex flex-col gap-4`}>
        <h2>Sesión de Parejas</h2>
        <p>
          En cada sesión de parejas, busco capturar la conexión auténtica y la
          intimidad que hace única a cada relación.
        </p>
        <p>
          Mi enfoque se centra en crear experiencias fotográficas que reflejen
          la verdadera esencia y complicidad entre ustedes.
        </p>

        <div>
          <Image
            src={imgPareja}
            width={600}
            height={400}
            alt="Sesion de pareja en Acapulco"
            className={`md:hidden ${styles.imgMobile}`}
          />

          <Accordion type="single" collapsible className="md:my-4 lg:mt-10">
            <AccordionItem value="item-1">
              <AccordionTrigger
                className={`text-left ${styles.accordion__title}`}
              >
                Paquete de parejas 1
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                <h3>Sesion de 1 hora</h3>
                <div className="flex gap-2">
                  <Image
                    src={circle}
                    width={10}
                    height={10}
                    alt="circe svg"
                    className={styles.circle}
                  />
                  <p> Cobertura fotografica</p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={circle}
                    width={10}
                    height={10}
                    alt="circe svg"
                    className={styles.circle}
                  />
                  <p> First impression & sesion de pareja</p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={circle}
                    width={10}
                    height={10}
                    alt="circe svg"
                    className={styles.circle}
                  />
                  <p> 50 Fotografias en formato digital</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger
                className={`text-left ${styles.accordion__title}`}
              >
                Paquete de parejas 2
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                <h3>Sesion de 1 hora</h3>
                <div className="flex gap-2">
                  <Image
                    src={circle}
                    width={10}
                    height={10}
                    alt="circe svg"
                    className={styles.circle}
                  />
                  <p> Cobertura fotografica & video</p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={circle}
                    width={10}
                    height={10}
                    alt="circe svg"
                    className={styles.circle}
                  />
                  <p> First impression & sesion de pareja</p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={circle}
                    width={10}
                    height={10}
                    alt="circe svg"
                    className={styles.circle}
                  />
                  <p> 50 Fotografias en formato digital</p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={circle}
                    width={10}
                    height={10}
                    alt="circe svg"
                    className={styles.circle}
                  />
                  <p> Resumen 1 minuto para redes sociales</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className={styles.images__div}>
        <Image
          src={imgPareja}
          width={600}
          height={400}
          alt="Sesion de pareja en Acapulco"
          className={`hidden md:block lg:hidden ${styles.imgTablet}`}
        />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.33, duration: 0.3 },
          }}
        >
          <Image
            src={imgDesk}
            width={600}
            height={650}
            alt="Sesion de pareja en Acapulco"
            className={`hidden lg:block ${styles.imageDesk}`}
          />
        </motion.div>
      </div>
    </div>
  );
}
