import React from "react";
import Link from "next/link";
import styles from "../app/ui/components/footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={` w-full h-100 ${styles.background}`}>
      <div className={styles.footer}>
      {/* Heading */}
        <div className={`flex flex-col gap-2 md:flex-1 lg:gap-7   ${styles.footer__wrap}`}>
          <div className={` flex flex-col gap-2 px-2 ${styles.heading}`}>
            <h2>¿Listo para agendar?</h2>
            <Link href={"/contacto"} className={styles.heading__link}>
              Contactanos.
            </Link>
          </div>

          <div className={` flex flex-col gap-3 px-2 ${styles.contact}`}>
            <h3>Consultas</h3>

            <a className={styles.contact__a} href="mailto:allanbanuelos@gmail.com">allanbanuelos@gmail.com</a>
            <div className="flex gap-2">
              <a className={styles.contact__a} href="tel:+7441752028">7441752028</a>
              <span>&amp;</span>
              <a className={styles.contact__a} href="tel:+5561677564">5561677564</a>
            </div>

            <p>Acapulco, Guerrero. </p>
          </div>
        </div>

      {/* Columns  */}
        <div className={` flex flex-row md:flex-1 `}>
          <div className={` flex flex-col  flex-1 ${styles.column__pages}`}>
            <ul className={` flex flex-col gap-4 md:gap-3 lg:gap-3 ${styles.column__ul}`}>
              <li>
                <Link href={"/nosotros"} className={styles.column__link}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href={"/servicios"} className={styles.column__link}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href={"/portafolio"} className={styles.column__link}>
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href={"/FAQ"} className={styles.column__link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={"/contacto"} className={styles.column__link}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={` flex flex-col gap-2 flex-1 ${styles.column__socials}`}
          >
            <h4 className={`${styles.column__link} ${styles.column__link_h4}`}> Siguenos en redes</h4>
            <ul className="flex flex-col gap-3  lg:gap-2">
              <li>
                <Link
                  target="blank"
                  href="https://www.instagram.com/allanbanuelosphotograhy/"
                  className={styles.column__link}
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  target="blank"
                  href="https://www.facebook.com/people/Allanbanuelosphotography/100082836965338/?mibextid=lxhLg6 "
                  className={styles.column__link}
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>


      
      </div>
      {/* Copywrite  */}
      <div className=" containerP w-full flex flex-col items-center gap-5 mt-5 mb-0 md:mt-0 md:pb-16 ">
          <p className=" text-center text-sm  ">
            {" "}
            &copy; {currentYear} Allan Bañuelos Photography, derechos reservados{" "}
          </p>
          <Link
            className={styles.davedev}
            target="blank"
            href={"https://davedev.ca/"}
          >
            {" "}
            Website by <span className={styles.span}>Dave</span>
            <span className={styles.span2}>Dev.</span>{" "}
          </Link>
        </div>

    </footer>
  );
}
