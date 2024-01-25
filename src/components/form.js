"use client";
import React, { useState } from "react";
import styles from "../app/ui/components/form.module.css";
import {motion} from 'framer-motion'

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
// import { sendEmail } from "../app/api/sendEmail"
import { handleSubmitLogic } from "../app/api/handleSubmit"; // Import the function

const Form = () => {
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

  const { toast } = useToast();

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
    await handleSubmitLogic(data, toast);

    // Reset form fields
    setName("");
    setEmail("");
    setPhoneNumber("");
    setProjectDetails("");
  };

  return (
    <motion.form
       initial={{ opacity: 0, x: 10 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.1235, duration: 0.3 },
        }}
        viewport={{ once: true }}
      onSubmit={handleSubmit}
      className={` pt-5 ${styles.form}`}
    >
      <h1 > Contactanos </h1>
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
          <Button type="submit" className={styles.button}>
          Enviar
        </Button>
        </div>
        
      </div>
      
        
      
    </motion.form>
  );
};

export default Form;
