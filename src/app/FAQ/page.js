"use client";
import React, { useRef } from "react";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import styles from "../ui/components/faq.module.css";

export default function FaqPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.8], ["0%", "150%"]);
  const textY2 = useTransform(scrollYProgress, [0, 0.69], ["0%", "-200%"]);

  return (
    <main>
      <div
        className={` flex flex-col items-center justify-center relative ${styles.hero}`}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center ${styles.heroImg}`}
        >
          <CldImage
            src={"bodas/03122022-_DSC3709-min_ayga2o.jpg"}
            width={1400}
            height={800}
            alt="Imagen hero"
            className={`hidden md:block absolute top-0 left-0 w-full h-full object-cover`}
          />
          <CldImage
            src={"bodas/14102023-DSC05417-min_bqkbuy.jpg"}
            width={630}
            height={950}
            alt="Imagen hero"
            className={`md:hidden absolute top-0 left-0 w-full h-full object-cover`}
          />

          <div className="absolute w-full h-full flex flex-col gap-2  justify-center ">
            <motion.p
              style={{ y: textY }}
              className={`text-center ${styles.hero__txt}`}
            >
              ¿Tienes preguntas?
            </motion.p>
            <motion.p
              style={{ y: textY2 }}
              className={`text-center ${styles.hero__txt}`}
            >
              Aquí tenemos algunas respuestas.
            </motion.p>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </div>

      <div className={`flex flex-col ${styles.container}`}>
        {/* FAQ GENERAL */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={` flex flex-col  md:flex-row containerP ${styles.section}`}
        >
          <div className="py-7 flex md:justify-center md:items-center">
            <h2 className={styles.section__title}>General</h2>
          </div>
          <Accordion type="single" collapsible className="md:w-2/3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                ¿Como es trabajar contigo?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Siempre me esfuerzo por garantizar que mis clientes se sientan
                cómodos durante cada sesión.
                <br /> <br /> Mi objetivo es que disfruten y sean auténticos
                frente a la cámara. Me encanta crear un ambiente relajado y
                espontáneo, y compartir momentos especiales con mis parejas. De
                esta manera, no solo obtendrán fotografías hermosas, sino
                también un recuerdo inolvidable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Cuál es tu estilo de fotografía?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Mis sesiones fotográficas, ya sean de bodas o casuales, tienden
                a ser guiadas por la espontaneidad de las parejas, capturando
                emociones y momentos irrepetibles junto a hermosos atardeceres o
                amaneceres
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Cuánto tiempo llevas siendo fotógrafo?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Hace 5 años que inicié mi carrera en el mundo de la fotografía.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                ¿Qué podemos hacer con nuestras fotos?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Tienen los derechos para compartir las fotografías en redes
                sociales o a través de tus familiares cercanos, así como
                imprimir las imágenes, ya que tienen una resolución alta que
                permite dicho uso si así lo deseas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                ¿Entregas una previa/sneak peek de nuestras fotos?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Para sesiones de pareja casual, generalmente no envío una
                previa, dado que el tiempo de entrega suele ser rápido. Sin
                embargo, para pedidas de mano, suelo compartir algunas
                fotografías para su uso en redes sociales.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>¿Qué equipo usas?</AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Utilizo una Sony a7IV y a7III, alternando entre lentes como un
                35mm, 50mm y un 70-200. Además, cuento con un flash de la marca
                Godox para situaciones en las que la luz natural no es
                suficiente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
        {/* FAQ PAREJA */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={`   flex flex-col   md:flex-row containerP ${styles.section}`}
        >
          <div className="py-7 flex md:justify-center md:items-center ">
            <h2 className={` px-2 ${styles.section__title}`}>
              Fotografía en pareja
            </h2>
          </div>
          <Accordion type="single" collapsible className="md:w-2/3">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Cuándo recibiremos nuestras fotos?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Suele tomar aproximadamente 1 semana entregar las fotografías.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo se entregan las fotos?</AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Las fotos se entregan digitalmente a través de un enlace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Cuántas fotografías recibiremos?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Recibirán un promedio de 50 fotos por hora, dependiendo de la
                duración de la sesión y las condiciones climáticas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                ¿Cómo editarás nuestras fotos?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Mi estilo de edición es lo más natural posible, aprovechando las
                cualidades de la luz durante el atardecer. Busco que las tomas
                sean cálidas y resalten los colores presentes en la escena. Mis
                ediciones comienzan desde cero, sin utilizar filtros
                predeterminados, asegurando así un toque único a cada imagen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
        {/*FAQ BODAS  */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={`   flex flex-col   md:flex-row containerP ${styles.section}`}
        >
          <div className="py-7 flex md:justify-center md:items-center">
            <h2 className={` px-3 ${styles.section__title}`}>
              Fotografia de Bodas
            </h2>
          </div>
          <Accordion type="single" collapsible className="md:w-2/3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left gap-6">
                ¿Tenemos que considerar cena para ti y tu equipo?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Sí, por favor. Dado que las jornadas suelen ser muy extensas,
                agradeceríamos mucho el apoyo para mí y mi equipo de
                colaboradores
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Qué pasa si una de tus cámaras falla?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Suelo trabajar siempre con dos equipos para evitar este tipo de
                inconvenientes, además de llevar varias memorias.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left  gap-6">
                ¿Qué haces con nuestras fotos después de la boda?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Primero, realizo un respaldo de las fotos en un disco SSD
                externo y otro en la nube para evitar cualquier percance y
                asegurar su tranquilidad.
                <br />
                <br /> Luego, realizamos una exhaustiva selección de las mejores
                fotos de la boda, las editamos y exportamos en formato JPG de
                alta resolución. Estas imágenes se cargan en una galería y se
                les entrega mediante un enlace digital.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
        {/* FAQ PRECIOS */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={`   flex flex-col   md:flex-row containerP ${styles.section}`}
        >
          <div className="py-7 flex md:justify-center md:items-center">
            <h2 className={styles.section__title}>Reservación y precios</h2>
          </div>
          <Accordion type="single" collapsible className="md:w-2/3">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Cómo reservamos fecha contigo?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Después de ponernos en contacto, revisar mis paquetes y discutir
                sus necesidades para el día de su boda, les enviaré un contrato.
                Una vez recibido el anticipo, quedarán oficialmente agendados en
                mi calendario.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo te pagamos?</AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                El pago se realiza mediante transferencia o depósito en alguna
                de mis cuentas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left  gap-6">
                ¿Qué pasa si tenemos que cancelar o reagendar?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                El anticipo no es reembolsable en caso de cancelación o cambio
                de la fecha acordada. Podremos proponer una nueva fecha, siempre
                que esté disponible en mi calendario. <br /> <br /> Si no se
                llega a un acuerdo, el anticipo puede intercambiarse por una
                sesión casual u otra de su preferencia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left  gap-6">
                ¿Qué pasa si no puedes asistir a nuestra boda?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                Esta situación nunca ha ocurrido y esperemos que no suceda.{" "}
                <br />
                <br />
                Sin embargo, si llegara a pasar, ofreceré la devolución completa
                del servicio. No asistir a una boda debido a un incumplimiento
                en los tiempos y formas de pago por parte de ustedes no aplica
                para la devolución.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
        {/* FAQ VIAJES */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={`   flex flex-col   md:flex-row containerP ${styles.section}`}
        >
          <div className="py-7 flex md:justify-center md:items-center">
            <h2 className={styles.section__title}>Viajes</h2>
          </div>

          <Accordion type="single" collapsible className="md:w-2/3">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿Haces viajes para sesiones o bodas?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                ¡Claro! Me encanta viajar, especialmente para capturar esos
                hermosos momentos como pareja. Para más detalles, sería ideal
                platicar específicamente sobre ello.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left  gap-6">
                ¿Qué tanto porcentaje es el precio de tus servicios?
              </AccordionTrigger>
              <AccordionContent className={styles.accordion__txt}>
                El porcentaje dependerá de cada caso y del lugar a donde se
                requiera viajar. Por eso, les pido que podamos discutir todo a
                detalle para proporcionarles la información más adecuada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5 },
        }}
        className={` mt-10 containerP flex flex-col gap-8 justify-center align-middle items-center md:pt-0  ${styles.contacto}`}
      >
        <motion.div
        initial={{ opacity: 0, y:5 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.45 },
        }}
          className={`w-full flex flex-col gap-3 ${styles.contacto__headings} `}
        >
          <h3> ¿Tienes mas preguntas?</h3>
          <p>Ponte en contacto y con gusto las aclaramos</p>
        </motion.div>

        <div className="relative ">
          <div className={styles.images__div}>
            <CldImage
              src="bodas/c7ftftbnakmacw6ufevf.jpg"
              width={1200}
              height={800}
              alt="Imagen de boda en Acapulco"
              className={`hidden md:block ${styles.contact__img}`}
            />
            <CldImage
              src="bodas/c7ftftbnakmacw6ufevf.jpg"
              width={600}
              height={400}
              alt="Imagen de boda en Acapulco"
              className={`md:hidden ${styles.contact__img}`}
            />
          </div>
          <div
            className={`flex flex-col items-center w-full  ${styles.contact__btn}`}
          >
            <Button className={` opacity-[0.75] md:w-[20%] lg:h-[50px] `}>
              <Link href={"/contacto"} className={styles.button__txt}>
                Contacto
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
