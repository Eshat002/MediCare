import useAuthStore from "../stores/authStore";
import HeadlineSection from "../components/SectionHeadline";
import Google from "../assets/svg/Google";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthBtn } from "./AuthBtn";

const ResetPasswordForm = () => {
  const { requestPasswordReset } = useAuthStore();
  const [email, setEmail] = useState("");

  //   const navigate = useNavigate();
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(""); // Clear previous errors

    const result = await requestPasswordReset(email);
    if (result.success) {
      setSuccessMsg("An email has been sent. Please check your inbox.");
      setFormError("");
    } else {
      setFormError(result.error);
      setSuccessMsg("");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="headline-container mb-8">
        <HeadlineSection text="Reset password" />

        <p className="text-base text-primaryBlack/70 font-normal mt-2">
          Enter your email address to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          {/* Email Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <CiMail size={22} color="gray" />
          </div>
          {/* Input Field */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
            placeholder="Enter Your Email"
          />{" "}
        </div>{" "}
        {formError && (
          <div className="p-5 mb-6 bg-primary/20 text-red-500 text-sm text-center font-medium rounded-lg mt-6">
            {formError.email.includes("This field may not be blank.")
              ? "You must provide your email"
              : formError.email || "An error occurred"}
          </div>
        )}
        {successMsg && (
          <div className="p-6 mb-6 bg-primary/20 text-black text-sm text-center font-medium rounded-lg mt-6">
            {successMsg}
          </div>
        )}
        <AuthBtn text="Submit" />
      </form>
    </div>
  );
};

export default ResetPasswordForm;
