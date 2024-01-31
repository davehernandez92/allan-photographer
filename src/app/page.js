"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import About from "@/components/about";
import styles from "./ui/components/home.module.css";
import Services from "@/components/Services";
import CarouselImg from "@/components/CarouselImg";
import bannerImg from '../../public/images/op1.webp'
import heroMobile from '../../public/images/op1Mobil.webp'

export default function Home() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className={` h-dvh relative ${styles.heroContainer}`}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center hidden md:block  ${styles.heroImg}`}
        >
          <Image
            src={bannerImg}
            width={1500}
            height={1000}
            alt="Imagen de boda background"
            className=" absolute top-0 left-0 w-full h-full object-cover"
          />

          <h1 className={`absolute ${styles.hero__title}`}>
            Wedding Photographer.
          </h1>
          <div className={styles.overlay}></div>
        </div>
        <div
          className={`absolute inset-0 bg-cover bg-center block md:hidden  ${styles.heroImg_mobile}`}
        >
          <Image
            src={heroMobile}
            width={923}
            height={1300}
            priority={true}
            alt="Imagen de boda background"
            className=" absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
      </motion.div>

      <About />
      <Services />
      <CarouselImg />
    </main>
  );
}
