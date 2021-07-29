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
    fetch("https://pooja-thapa.herokuapp.com/postsFeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detail),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Your message sent succesfully!");
      })
      .catch((error) => console.log(error));
    setDetail({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };
  return (
    <div
      className="w-full flex items-center justify-center sm:p-16 md:p-20 lg:pb-16 lg:pt-36 shadow-xl"
      id="contact"
    >
      <div className="flex flex-col md:flex-row items-center w-full justify-center">
        <div className="lg:p-40">
          <div className="p-20 shadow-xl rounded-full">
            <Image src={Wassup} alt="wassup" />
          </div>
        </div>
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
