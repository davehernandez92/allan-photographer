'use client'
import Link from "next/link";
import { motion } from "framer-motion";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";
// import { Button } from "@/components/ui/button";

import styles from "../ui/aboutPage.module.css";
export default function FaqPage() {
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
      className={` h-dvh relative ${styles.heroContainer}`}>


      </motion.div>

      </main>
    )
  }
  