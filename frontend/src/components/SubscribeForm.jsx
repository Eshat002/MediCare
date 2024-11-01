import React, { useState } from "react";
import axios from "axios";

const BaseUrl = import.meta.env.VITE_API_URL;

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    try {
      const response = await axios.post(
        `${BaseUrl}/api/newsletter/subscribe/`,
        formData
      );
      setFormData({ email: "" });
      console.log("Email submitted", response.data);
      setSubmitted(true);
    } catch (err) {
      setSubmitted(false);
      if (err.response) {
        // Server responded with a status other than 200 range
        if (err.response.status === 400) {
          // Assuming 400 is for validation errors from the API
          setValidationErrors(err.response.data);
        } else {
          setError("An error occurred. Please try again later.");
        }
      } else {
        // Handle network errors or other issues
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <form className="flex flex-col mb-3" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="px-5 py-3 focus:outline-none rounded-full bg-primary/10 placeholder:text-primaryBlack/50 placeholder:text-sm placeholder:font-medium"
          placeholder="Your Email"
        />
        <button
          type="submit"
          className="bg-primary text-white text-base px-5 py-3 rounded-full hover:bg-sky-500 ml-[-50px]"
        >
          Subscribe
        </button>
      </div>
      {validationErrors.email && (
        <p className="text-red-500 text-sm mt-1 first-letter:uppercase ml-2">
          {validationErrors.email}
        </p>
      )}
      {error && (
        <p className="text-red-500 text-sm mt-1 first-letter:uppercase ml-2">
          {error}
        </p>
      )}
      {submitted && (
        <p className="text-gray-500 text-sm mt-1 first-letter:uppercase ml-2">
          You are subscribed
        </p>
      )}
    </form>
  );
};

export default SubscribeForm;
