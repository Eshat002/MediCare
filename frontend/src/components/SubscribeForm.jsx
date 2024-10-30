import React from "react";
import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://your-backend-api.com/subscribe",
        { email }
      );

      if (response.status === 200) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Clear the email field
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form className="flex flex-col mb-3" onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-5 py-3 focus:outline-none rounded-full bg-primary/10 placeholder:text-primaryBlack/50 placeholder:text-sm placeholder:font-medium"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-primary text-white text-base px-5 py-3 rounded-full hover:bg-sky-500 ml-[-50px]"
        >
          Subscribe
        </button>
      </div>
      {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
    </form>
  );
};

export default SubscribeForm;
