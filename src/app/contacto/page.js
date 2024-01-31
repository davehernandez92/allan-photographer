"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import image from "../../../public/images/contacto.webp";
import imageM from "../../../public/images/square2.webp";
import styles from "../ui/components/form.module.css";
import Image from "next/image";
import { Link } from "lucide-react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // New state for phone number
  const [projectDetails, setProjectDetails] = useState("");

  const { toast } = useToast();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleProjectDetailsChange = (e) => {
    setProjectDetails(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      recipientEmail: email,
      customer: name,
      phoneNumber: phoneNumber, // Include phone number in the data
      text: `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phoneNumber}\nDetalles: ${projectDetails}`,
    };

    console.log(data);

    // Use the imported handleSubmitLogic function
    // await handleSubmitLogic(data, toast);

    toast({
      description: "Tu mensaje ha sido enviado.",
    });
    // Reset form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setProjectDetails("");
  };

  return (
    <main className="containerP lg:px-15">
      <div className="flex flex-col gap-5 pt-6 md:grid md:grid-cols-2 md:gap-6  ">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-0"
        >
          <Image
            src={imageM}
            width={600}
            height={600}
            alt="Imagen de pareja en Acapulco "
            className={` md:hidden`}
          />
          <Image
            src={image}
            width={620}
            height={950}
            alt="Imagen de pareja en Acapulco "
            className={`hidden md:block  ${styles.img__Contacto}`}
          />
        </motion.div>

        {/* FORM  */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className={` pt-5 ${styles.form}`}
        >
          <h1> Contáctanos </h1>
          <div className={styles.formgroup}>
            <div className="flex flex-col w-full max-w-sm  gap-4 lg:max-w-[30rem]">
              <Label htmlFor="name">Nombre</Label>
              <Input
                type="text"
                id="name"
                name=""
                placeholder="Ingrese su nombre"
                value={name}
                onChange={handleNameChange}
                required
                className={styles.input}
              />

              <Label htmlFor="email">Email</Label>

              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={handleEmailChange}
                required
                className={styles.input}
              />

              {/* New form group for phone number */}

              <Label htmlFor="phoneNumber">Telefono</Label>
              <Input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Ingrese su número de teléfono"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                className={styles.input}
              />

              <Label htmlFor="project-details">Cuentame sobre ti</Label>
              <Textarea
                id="project-details"
                name="project-details"
                placeholder="Escriba detalles sobre su evento"
                value={projectDetails}
                onChange={handleProjectDetailsChange}
                required
                className={styles.textarea}
              />
            </div>
            <Button type="submit" className="mt-6 w-full md:w-1/2    md:mt-8">
              Enviar mensaje
            </Button>
          </div>
        </motion.form>
      </div>
    </main>
  );
}
