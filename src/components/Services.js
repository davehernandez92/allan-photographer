"use client";
import { useState } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import styles from "../app/ui/components/services.module.css";

export default function Services() {
  const [activeLink, setActiveLink] = useState("bodas");

  const handleLinkHover = (link) => {
    setActiveLink(link);
  };

  return (
    <section className={`w-full h-auto ${styles.services} containerP`}>
      <div
        className={`pt-20 flex flex-col  w-full gap-12 ${styles.services__wrap}`}
      >
        <h1 className="flex justify-center ">Nuestros servicios</h1>

        <div className={`lg:hidden ${styles.services__links}`}>
          <div className=" absolute w-full h-full text-center flex flex-col justify-center gap-12 items-center">
            <Button variant="ghost" className={styles.button}>
              <Link href={"/servicios/bodas"} className={styles.service}>
                Bodas
              </Link>
            </Button>
            <Button variant="ghost" className={styles.button}>
              <Link href={"/servicios/pedidas"} className={styles.service}>
                Pedidas
              </Link>
            </Button>
          </div>
        </div>

        <div className={` containerP hidden lg:visible ${styles.links__wrap}`}>
          <div className={` ${styles.services__desk}`}>
            <Link
              href={"/servicios/bodas"}
              onMouseEnter={() => handleLinkHover("bodas")}
              className={`${styles.link__animation} ${activeLink === "pedidas" ? "active" : ""}`}
            >
              BODAS
            </Link>

            <Link
              href={"/servicios/pedidas"}
              onMouseEnter={() => handleLinkHover("pedidas")}
              className={`${styles.link__animation} ${activeLink === "pedidas" ? "active" : ""}`}
            >
              PEDIDAS
            </Link>
          </div>

          <div className={`hidden lg:block ${styles.images}`}>
            <motion.div
              className={`${activeLink === "bodas" ? "active" : "hidden"} `}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.7 },
              }}
            >
              <CldImage
                src={
                  "https://res.cloudinary.com/dtsowbfck/image/upload/v1705791651/bodas/09092023-DSC06119-min_uo6zou.jpg"
                }
                width={950}
                height={690}
                alt="Imagen de boda en Acapulco Gro."
                className={styles.service__image1}
              />
            </motion.div>

            <motion.div
              className={`${activeLink === "pedidas" ? "active" : "hidden"}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.7 },
              }}
            >
              <CldImage
                src={
                  "pedidas/zlrmbzel1gsw7gzuftbu.jpg"
                }
                width={950}
                height={690}
                alt="Imagen de pedida de matrimonio"
                className={styles.service__image2}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
