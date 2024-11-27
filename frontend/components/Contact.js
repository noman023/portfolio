"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="my-16">
      <div className="text-center mb-10">
        <h1 className={`text-4xl uppercase ${dancingScript.className}`}>
          Contact
        </h1>

        <p className="text-gray-400 text-lg mt-3">
          You can send email to me through the form below!
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-6">
          <input
            className="w-full bg-slate-800 p-4 rounded-lg"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full bg-slate-800 p-4 rounded-lg"
            type="text"
            name="user_email"
            placeholder="Your Email Address"
            required
          />
        </div>

        <textarea
          className="w-full bg-slate-800 p-4 rounded-lg"
          name="message"
          placeholder="Write your message here.."
          required
        ></textarea>

        <div className="flex justify-center md:justify-end items-center">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-600 duration-300 rounded-lg p-3 mt-5"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
