import React from "react";
import Image from "next/image";
import image1 from '../../public/images/galeria3.webp'
import image2 from '../../public/images/galeria2.jpg'
import styles from '../app/ui/components/galleryGrid.module.css'

export default function GalleryHero() {
  return (
    <div className={`  containerP  w-full h-screen ${styles.heroContainer}`}>
    <Image 
        src={image1}
        alt="Imagen setup boda"
        width={700}
        height={400}
        className={`hidden lg:block absolute ${styles.img__gallery1}`}
    />
    <Image 
        src={image2}
        alt="Imagen setup boda"
        width={700}
        height={400}
        className={` hidden lg:block absolute ${styles.img__gallery2}`}
    />
      <div className={` w-full h-full flex flex-col ${styles.titles}`}>
      
        
        <h1 className=" text-center ">PORTAFOLIO.</h1>
        
      </div>
    </div>
  );
}
