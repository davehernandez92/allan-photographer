"use client";
import React, { useState, useEffect } from "react";
import VideoBanner from "@/components/videoBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { CldImage } from "next-cloudinary";
import styles from "../ui/serviciosPage.module.css";
import BodasCard from "@/components/bodasCard";
import ParejasCard from "@/components/parejasCard";

export default function ServiciosPage() {
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= 768 // Check if window is defined
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrDesktop(
        typeof window !== "undefined" && window.innerWidth >= 768
      );
    };

    // Add event listener only if window is defined (client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div>
      {isTabletOrDesktop && <VideoBanner />}

      <div className="md:hidden h-full relative ">
        <CldImage
          src="/bodas/14102023-DSC04884_gkyvyk.webp"
          width={934}
          height={1401}
          alt="Imagen de boda en atardecer Acapulco"
          className="w-full h-full pt-10 lg "
        />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          className={styles.services__heading}
        >
          Servicios
        </motion.h1>
        <div className={styles.overlay}></div>
      </div>

      <div className={`containerP`}>
        <Tabs defaultValue="bodas" className=" w-full mt-10">
          <TabsList className="grid w-full grid-cols-2 bg-transparent">
            <TabsTrigger className=" text-2xl" value="bodas">Bodas</TabsTrigger>
            <TabsTrigger className=" text-2xl" value="parejas">Parejas</TabsTrigger>
          </TabsList>
          <TabsContent value="bodas">
          <AnimatePresence mode="wait">
            <motion.section initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}>
              <BodasCard/>
            </motion.section>

          </AnimatePresence>
          </TabsContent>
          <TabsContent value="parejas">
          <AnimatePresence mode="wait">
            <motion.section initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}>
              <ParejasCard/>
            </motion.section>

          </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
