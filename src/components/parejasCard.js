import React from "react";
import Image from "next/image";
import imgPareja from '../../public/images/services.webp'
import styles from "../app/ui/components/servicesCard.module.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import circle from '../../public/images/circle.svg'

export default function ParejasCard() {
  return (
    <div className={`flex flex-col gap-4 ${styles.card}`}>
      <h2>Parejas</h2>
      <p>
      En cada sesión de parejas, busco capturar la conexión auténtica y la intimidad que hace única a cada relación.   
      </p>
      <p>Mi enfoque se centra en crear experiencias fotográficas que reflejen la verdadera esencia y complicidad entre ustedes.</p>
      
        

      <div>
        <Image
            src={imgPareja}
            width={600}
            height={400}
            alt='Sesion de pareja en Acapulco'
            className={styles.imgMobile}
        />

        <Accordion type="single" collapsible className="md:w-2/3">
          <AccordionItem value="item-1">
            <AccordionTrigger className={`text-left`}>
              Paquete de parejas 1
            </AccordionTrigger>
            <AccordionContent className={styles.accordion__txt}>
              <h3>Sesion de 1 hora</h3>
              <div className="flex gap-2">
                <Image src={circle} width={10} height={10} alt="circe svg" className={styles.circle}/>
                <p> Cobertura fotografica</p>
              </div>
              <div className="flex gap-2">
                <Image src={circle} width={10} height={10} alt="circe svg" className={styles.circle}/>
                <p> First impression & sesion de pareja</p>
              </div>
              <div className="flex gap-2">
                <Image src={circle} width={10} height={10} alt="circe svg" className={styles.circle}/>
                <p> 50 Fotografias en formato digital</p>
              </div>
             
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Paquete de parejas 2
            </AccordionTrigger>
            <AccordionContent className={styles.accordion__txt}>
            <h3>Sesion de 1 hora</h3>
              <div className="flex gap-2">
                <Image src={circle} width={10} height={10} alt="circe svg" className={styles.circle}/>
                <p> Cobertura fotografica & video</p>
              </div>
              <div className="flex gap-2">
                <Image src={circle} width={10} height={10} alt="circe svg" className={styles.circle}/>
                <p> First impression & sesion de pareja</p>
              </div>
              <div className="flex gap-2">
                <Image src={circle} width={10} height={10} alt="circe svg" className={styles.circle}/>
                <p> 50 Fotografias en formato digital</p>
              </div>
              <div className="flex gap-2">
                <Image src={circle} width={10} height={10} alt="circe svg" className={styles.circle}/>
                <p> Resumen 1 minuto para redes sociales</p>
              </div>

            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </div>
    </div>
  );
}
