import Link from "next/link";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import styles from "../app/ui/components/carousel.module.css";

export default function CarouselImg() {

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
    {
      name: "carousel4",
      width: "670",
      height: "1000",
    },
    {
      name: "carousel5",
      width: "545",
      height: "820",
    },
    {
      name: "carousel7",
      width: "491",
      height: "737",
    },
    {
      name: "carousel8",
      width: "545",
      height: "820",
    },
    {
      name: "carousel9",
      width: "545",
      height: "820",
    },
    {
      name: "carousel10",
      width: "720",
      height: "1070",
    },
    {
      name: "carousel11",
      width: "545",
      height: "820",
    },
  ];

  
  return (
    <div className="  w-full pb-5 mb-10 md:mb-20 lg:mb-40">
      <motion.div className={styles.heading}>
        <h2 className={styles.heading__title}>Explora nuestra galeria</h2>
        <p className={styles.heading__txt}>Portfolio</p>
      </motion.div>
      <motion.div
        className={` flex flex-col justify-center items-center ${styles.carousel__wrap} `}
      >
        <div className=" w-full containerP flex flex-col gap-5 items-center md:hidden">
          {images.map((image) => (
            <CldImage
              key={image.name}
              src={`bodas/${image.name}.jpg`}
              width={image.width}
              height={image.height}
              alt="Imagen de boda galeria"
              className={styles.imageMobile}
            />
          ))}
        </div>

        <Carousel className={`hidden md:block ${styles.carousel}`}>
          <CarouselContent className=" overflow-visible">
            {images.map((image) => (
              <CarouselItem key={image.name} className=" md:basis-96  ">
                <div className="p-1">
                  <CldImage
                    priority={true}
                    key={image.name}
                    src={`bodas/${image.name}.jpg`}
                    width={image.width}
                    height={image.height}
                    alt={`Fotografia para el carousel`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={styles.buttonL} />
          <CarouselNext className={styles.buttonR} />
        </Carousel>

        <Button className="mt-7" variant="outline" asChild>
          <Link href="/portafolio" className={styles.button__us}>
            VER PORTAFOLIO
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
