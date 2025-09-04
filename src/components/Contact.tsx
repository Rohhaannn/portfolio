"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { z } from "zod";
import { LuSend, LuCircleCheckBig,LuMail, LuPhone } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { portfolioData } from '../data/portfolioData';
import { ImBehance2 } from "react-icons/im";
import { useTheme } from "@/context/ThemeContext";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";



const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  contact: z.string().min(1, { message: "Contact number is required." }).regex(/^\d{10}$/, { message: "Contact number must be 10 digits." }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email address." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  msg: z.string().min(1, { message: "Message is required." }),
});

type FormData = z.infer<typeof contactFormSchema>;

type FormErrors = Partial<Record<keyof FormData, string>> & { general?: string };

const Contact = () => {

  const { darkMode } = useTheme();

  const {formEndpoint} = portfolioData.contact;
  const { socialLinks } = portfolioData.hero;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name as keyof FormData]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrors({});

    try {
      contactFormSchema.parse(formData);
      await axios.post(formEndpoint, formData);
      setSuccessMessage("Message sent successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);

      setFormData({
        name: "",
        contact: "",
        email: "",
        subject: "",
        msg: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        for (const issue of error.issues) {
          newErrors[issue.path[0] as keyof FormData] = issue.message;
        }
        setErrors(newErrors);
      } else {
        setErrors({ general: "Failed to send message. Please try again later." });
      }
    }
  };

  return (
    <div id="contact" className={`w-screen pb-16 ${darkMode ? "bg-[#111] text-white" : ""} `}>
      <div className="max-w-[1280px] mx-auto">
        <motion.h1
          className={`text-4xl font-bold text-center text-[#001b5e] mb-2 md:pl-20 cursor-default ${darkMode ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text" : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"} `}
          initial="hidden"
          whileInView={"show"}
          variants={fadeIn('up', 0.2)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="font-extralight"> Connect with </span>Me
        </motion.h1>

        <div className="max-w-[1040px] mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-start mb-2 md:mb-0 [font-family:var(--font-ubuntu)]"
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn('right', 0.1)}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* <Image
              src={image}
              alt="Contact"
              width={320}
              height={320}
              className={`w-full max-w-xs md:max-w-sm h-auto mt-5 rounded-xl shadow-xl ${darkMode ? "shadow-[#000]" : ""} `}
            /> */}
            <div>
              <div>
                <h1 className={`text-3xl font-semibold py-4 ${darkMode ? "font-bold bg-gradient-to-br from-[#2761f3] to-[#a603f8] text-transparent bg-clip-text" : "font-bold bg-gradient-to-b from-[#001b5e] to-[#020bf9] text-transparent bg-clip-text"}`}>
                  <span className="font-extralight"> Let&apos;s </span> Collaborate{" "}
                </h1>
              </div>

              <p className="w-80 lg:w-96 font-semibold">
                I&apos;m Currently looking for new opportnities, and my inbox is always open. Whether you have question or just want to say hi, Just drop a message, I&apos;ll do my best to get back to you!
              </p>

              <div>
                <div className={`mb-6 mt-6 flex justify-start items-start gap-7 text-center  `}>
                  <motion.a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    aria-label="Twitter"
                  >
                    <FaTwitter
                      className="cursor-pointer hover:scale-110 text-blue-500 hover:text-[#01D293]"
                      size={24}
                    />
                  </motion.a>

                  <motion.a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    aria-label="GitHub"
                  >
                    <FaGithub
                      className="cursor-pointer hover:scale-110 hover:text-[#01D293]"
                      size={24}
                    />
                  </motion.a>

                  <motion.a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin
                      className="cursor-pointer hover:scale-110 text-[#0063c8] hover:text-[#01D293]"
                      size={24}
                    />
                  </motion.a>

                  <motion.a
                    href={socialLinks.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    aria-label="Discord"
                  >
                    <FaDiscord
                      className="cursor-pointer hover:scale-110 text-[#5865f2] hover:text-[#01D293]"
                      size={24}
                    />
                  </motion.a>

                  <motion.a
                    href={socialLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    aria-label="Behance"
                  >
                    <ImBehance2
                      className="cursor-pointer hover:scale-110 text-blue-500 hover:text-[#01D293]"
                      size={24}
                    />
                  </motion.a>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 font-semibold">
                <div className="flex flex-row gap-4 justify-start items-center text-xl">
                  <LuMail className="font-semibold"/>
                  <span> shingaderohan96@gmail.com </span>
                </div>
                <div className="flex flex-row gap-4 justify-start items-center text-xl">
                  <LuPhone />
                  <span> +91 8788459114 </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:w-3/6 flex flex-col w-full p-2 font-semibold [font-family:var(--font-ubuntu)]"
            initial="hidden"
            whileInView={"show"}
            variants={fadeIn('left', 0.1)}
            viewport={{ once: true, amount: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {["name", "contact"].map((field) => (
                    <div key={field} className="flex flex-col w-full">
                      <label htmlFor={field} className={`uppercase text-sm font-medium py-2 hover:underline cursor-pointer ${darkMode ? "text-blue-600" : "text-[#001b5e]"}  ${errors[field as keyof FormData] ? "text-red-500" : ""}`}>
                        {field === "contact" ? "Contact Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        id={field}
                        className={`border-2 rounded-lg p-2 w-full focus:border-blue-500 focus:outline-none ${errors[field as keyof FormData] ? "border-red-500" : "border-gray-300 shadow-lg"}`}
                        type="text"
                        name={field}
                        maxLength={field === "contact" ? 10 : undefined}
                        value={formData[field as keyof FormData]}
                        onChange={handleChange}
                      />
                      {errors[field as keyof FormData] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field as keyof FormData]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {["email", "subject"].map((field) => (
                  <div key={field} className="flex flex-col w-full mx-auto">
                    <label htmlFor={field} className={`uppercase text-sm font-medium py-1 hover:underline cursor-pointer ${darkMode ? "text-blue-600" : "text-[#001b5e]"} ${errors[field as keyof FormData] ? "text-red-500" : ""}`}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      id={field}
                      className={`border-2 rounded-lg p-2 w-full focus:border-blue-500 focus:outline-none ${errors[field as keyof FormData] ? "border-red-500" : "border-gray-300 shadow-lg"}`}
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                    />
                    {errors[field as keyof FormData] && (
                      <p className="text-red-500 text-sm mt-1">{errors[field as keyof FormData]}</p>
                    )}
                  </div>
                ))}

                {/* Message field */}
                <div className="flex flex-col w-full mx-auto">
                  <label htmlFor="msg" className={`uppercase text-sm font-medium py-2 hover:underline cursor-pointer ${darkMode ? "text-blue-600" : "text-[#001b5e]"} ${errors.msg ? "text-red-500" : ""}`}>Message</label>
                  <textarea
                    id="msg"
                    className={`border-2 p-2 rounded-lg w-full focus:border-blue-500 focus:outline-none ${errors.msg ? "border-red-500" : "border-gray-300 shadow-lg"}`}
                    rows={4}
                    name="msg"
                    value={formData.msg}
                    onChange={handleChange}
                  />
                  {errors.msg && (
                    <p className="text-red-500 text-sm mt-1">{errors.msg}</p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                className=" flex flex-row gap-2 justify-center items-center bg-blue-800 font-semibold text-gray-100 shadow-2xl mt-4 w-full p-2 rounded-lg hover:bg-blue-600"
                initial={{ scale: 0.5 }}
                whileInView={{
                  scale: 1,
                  transition: {
                    duration: 0.4, ease: "easeInOut"
                  }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: {
                    duration: 0.0
                  }
                }}
              >
                <LuSend size={20} />
                Send Message
              </motion.button>

              {successMessage && (
                <p className="flex flex-row gap-2 bg-green-500 mt-4 justify-center items-center text-center text-white py-2 rounded-xl border border-white"> <LuCircleCheckBig size={16} /> {successMessage}</p>
              )}
              {errors.general && (
                <p className="text-red-500 mt-2 text-center">{errors.general}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;