"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import image from "../../../public/images/contacto.webp";
import imageM from "../../../public/images/contactoM.jpg";
import styles from "../ui/components/form.module.css";
import Image from "next/image";

export default function Page() {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // New state for phone number
  const [projectDetails, setProjectDetails] = useState("");

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

    // Reset form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setProjectDetails("");
  };


    return (
        <main className="containerP lg:px-15">
          <div className="flex flex-col gap-5 pt-6 md:grid md:grid-cols-2 md:gap-6  ">
            <div className="flex justify-center">
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
    
            {/* FORM  */}
    
            <form onSubmit={handleSubmit} className={` pt-5 ${styles.form}`}>
              <h1> Contáctanos </h1>
              <div className={styles.formgroup}>
                <div className="flex flex-col w-full max-w-sm  gap-4 lg:max-w-[30rem]">
                  <Label htmlFor="name">Nombre</Label>
                  <input
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
    
                  <input
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
                  <input
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
                  <textarea
                    id="project-details"
                    name="project-details"
                    placeholder="Escriba detalles sobre su evento"
                    value={projectDetails}
                    onChange={handleProjectDetailsChange}
                    required
                    className={styles.textarea}
                  />
                 
                </div>
              </div>
            </form>
          </div>
        </main>
      );
}
