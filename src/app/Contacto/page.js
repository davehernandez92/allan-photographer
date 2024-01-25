import Form from "@/components/form";
import Image from "next/image";
import image from "../../../public/images/contacto.webp";
import imageM from "../../../public/images/contactoM.jpg";
import styles from '../ui/contactoPage.module.css'

export default function ContactoPage() {
  return (
    <main className="containerP lg:px-15">
      <div className="flex flex-col gap-5 pt-6 md:grid md:grid-cols-2 md:gap-6  ">
        <div className='flex justify-center'>
          <Image
            src={imageM}
            width={500}
            height={500}
            alt="Imagen de pareja en Acapulco "
            className={` md:hidden ${styles.img__Contacto}`}
          />
          <Image
            src={image}
            width={620}
            height={950}
            alt="Imagen de pareja en Acapulco "
            className={`hidden md:block  ${styles.img__Contacto}`}
          />
        </div>
        <Form />
      </div>
    </main>
  );
}
