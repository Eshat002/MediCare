import { useState } from "react";
import axios from "axios";
import { FaTelegramPlane } from "react-icons/fa";
import BtnWithIcon from "./BtnWithIcon.jsx";
import SectionHeadline from "./SectionHeadline.jsx";

const BaseUrl = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setValidationErrors({});
    setSubmitted(false);

    try {
      await axios.post(`${BaseUrl}/api/contact/`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          setValidationErrors(err.response.data);
        } else {
          setError("An error occurred. Please try again later.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div className="flex justify-center px-4 bg-white pt-10 pb-20">
      <form
        className="flex flex-col gap-7 p-6 rounded-lg w-full max-w-3xl"
        onSubmit={handleSubmit}
      >
        <div className="text-center py-5">
          <SectionHeadline text="Leave us a message" />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`bg-[#fcfcfc] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
              validationErrors.name ? "border-red-500" : "border-gray-300"
            } ${!validationErrors.name && "focus:ring-2 focus:ring-primary"}`}
          />
          {validationErrors.name && (
            <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
              {validationErrors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
              validationErrors.email ? "border-red-500" : "border-gray-300"
            } ${!validationErrors.email && "focus:ring-2 focus:ring-primary"}`}
          />
          {validationErrors.email && (
            <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
              {validationErrors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className={`bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none ${
              validationErrors.message ? "border-red-500" : "border-gray-300"
            } ${
              !validationErrors.message && "focus:ring-2 focus:ring-primary"
            }`}
          />
          {validationErrors.message && (
            <p className="text-red-500 text-sm mt-1 first-letter:uppercase">
              {validationErrors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-center my-4">
          <BtnWithIcon text="Send" icon={<FaTelegramPlane size={20} />} />
        </div>

        {/* Status Messages */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {submitted && (
          <p className="text-green-500 text-md text-center">
            Your message has been sent successfully.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
