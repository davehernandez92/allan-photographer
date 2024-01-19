import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import styles from "../app/ui/components/carousel.module.css";



export default function CarouselImg() {


  return (
    <div>
      <motion.div>
        <h2>Explora Nuestra Galeria</h2>
        <p>Portfolio</p>
      </motion.div>
    </div>
  );
}
