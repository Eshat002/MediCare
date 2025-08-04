import React, { useState } from "react";
import axios from "axios";

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
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-lg w-full max-w-3xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-2 text-center">Contact Us</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {validationErrors.name && (
          <p className="text-red-500 text-sm">{validationErrors.name}</p>
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {validationErrors.email && (
          <p className="text-red-500 text-sm">{validationErrors.email}</p>
        )}

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {validationErrors.message && (
          <p className="text-red-500 text-sm">{validationErrors.message}</p>
        )}

        <button
          type="submit"
          className="bg-primary text-white px-5 py-3 rounded-full hover:bg-sky-500"
        >
          Send
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {submitted && (
          <p className="text-green-500 text-sm text-center">
            Your message has been sent successfully.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
