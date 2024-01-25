import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/ui/components/footer.module.css";
import logo from "../../public/logo-allan.svg";
import insta from "../../public/icons/instagram.svg";
import face from "../../public/icons/facebook.svg";
import twitter from "../../public/icons/twitter.svg";
import email from "../../public/icons/mail.svg";
import phone from "../../public/icons/phone.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={` w-full h-full ${styles.background}`}>
      <div className={styles.footer}>
        <div
          className={` ${styles.wrapper}  flex flex-col items-center gap-10 md:flex-row-reverse md:justify-center`}
        >
          <Image
            src={logo}
            width={300}
            height={150}
            alt="Allan Banuelos Logo"
            className={styles.logo}
          />

          <div className="flex flex-col gap-8">
            <p className={styles.social__txt}>Sigueme en redes sociales: </p>
            <div className="flex items-center justify-center gap-12">
              <Link href="https://www.instagram.com/allanbanuelosphotograhy/">
                <Image
                  src={insta}
                  width={36}
                  height={36}
                  alt="Instagram Logo"
                />
              </Link>
              <Link target="blank" href="https://www.facebook.com/people/Allanbanuelosphotography/100082836965338/?mibextid=lxhLg6 ">
                <Image src={face} width={36} height={36} alt="Facebook Logo" />
              </Link>
              <Link target="blank" href="https://www.instagram.com/allanbanuelosphotograhy/">
                <Image
                  src={twitter}
                  width={36}
                  height={36}
                  alt="Twitter Logo"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5 pt-5 ">
          <p className={styles.social__txt}>Contacto</p>
          <div className="flex flex-row gap-6 mb-5 ">
            <Image src={email} width={30} height={30} alt="email logo" />
            <div className={`flex flex-col ${styles.social__emails}`}>
              <a href="mailto:email@example.com">allanbanuelos@gmail.com</a>
              <a href="mailto:another@email.com">acawanderer@gmail.com</a>
            </div>
          </div>
          <div className={`flex gap-5 mb-10 ${styles.contact__phone}`}>
            <Image src={phone} width={30} height={30} alt="email logo" />
            <div className={`flex ${styles.contact__numbers}`}>
              <a href="tel:+7441752028">7441752028</a>
              <span>&amp;</span>
              <a href="tel:+5561677564">5561677564</a>
            </div>
          </div>
        </div>
      </div>

      <div className=" containerP w-full flex flex-col items-center gap-3 mb-0 lg:pb-16 ">
        <Link target="blank" href={"https://davedev.ca/"}> Website by DaveDev </Link>
        <p className=" text-center text-sm  ">
          {" "}
          &copy; {currentYear} Allan Bañuelos Photography, derechos reservados{" "}
        </p>
      </div>
    </footer>
  );
}
