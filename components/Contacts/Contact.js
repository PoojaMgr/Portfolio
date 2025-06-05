"use client";

import { useState } from "react";
import Image from "next/image";
import Wassup from "../../assets/wassup1.png";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [detail, setDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbzBlxuXxejSyjFzjCfDtHqAB6266wXJTi_jzwm90IrL-Xk9xX6S2lYgbuxd0zUeL7zZVA/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      }
    )
      .then(() => {
        alert("Thanks! Message submitted.");
      })
      .then((response) => response.json())
      .catch((error) => console.log(error));
    setDetail({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="" id="contact">
      <p className="text-center pb-10 pt-40 text-blue-900 text-5xl font-medium dark:text-gray-200">
        Get in Touch
      </p>
      <div className="flex flex-col md:flex-row items-center w-full justify-center">
        {/* <div className="lg:p-20">
          <div className="p-10 bg-transparent">
            <Image src={Wassup} alt="wassup" />
          </div>
        </div> */}

        <form
          className="flex flex-col pl-4 pr-0 py-8 md:p-8 lg:pt-18 md:w-1/2"
          action=""
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-3">
            <input
              type="text"
              required
              name="firstName"
              value={detail.firstName}
              autoComplete="off"
              placeholder="First Name"
              className="text-blue-900 font-bold outline-none border-2 border-blue-900 w-full mb-5 rounded-lg p-2"
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="lastName"
              autoComplete="off"
              placeholder="Last Name"
              value={detail.lastName}
              className="text-blue-900 font-bold outline-none border-2 border-blue-900 w-full mb-5 rounded-lg p-2"
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            required
            name="email"
            autoComplete="off"
            placeholder="Email"
            value={detail.email}
            onChange={handleChange}
            className="text-blue-900 font-bold outline-none border-2 border-blue-900 w-full mb-5 rounded-lg p-2"
          />
          <textarea
            type="text"
            name="message"
            autoComplete="off"
            placeholder="Enter your message"
            value={detail.message}
            onChange={handleChange}
            className="h-48 text-blue-900 font-bold outline-none border-2 border-blue-900 w-full mb-5 rounded-lg p-2"
          />
          <button
            type="submit"
            className="self-end outline-none flex space-x-2 px-2 py-1 items-center w-40 font-medium text-blue-900 rounded-md transform hover:scale-105 cursor-pointer transition duration-200 border-2 border-blue-900 hover:bg-blue-900 hover:text-gray-50"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="h-5" />
            <p>Send Message</p>
          </button>
        </form>
      </div>
    </div>
  );
}
