import useAuthStore from "../stores/authStore";
import HeadlineSection from "../components/SectionHeadline";
import { useNavigate } from "react-router-dom";
import { AuthBtn } from "../components/AuthBtn";
import { useState } from "react";
import { CiMail } from "react-icons/ci";

const ResendActivation = () => {
  const { resendActivationEmail } = useAuthStore();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [formError, setFormError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError({}); // Clear previous errors

    const result = await resendActivationEmail(email);

    if (result.success) {
      alert("resent successful!");
      //   navigate("/");
    } else {
      console.log("Error result:", result.error);
      if (result.error && typeof result.error === "object") {
        setFormError(result.error); // Map backend errors to formError state
      } else {
        setFormError({ general: "An unexpected error occurred." });
      }
    }
  };

  // Helper function to format error messages
  const formatError = (error) => {
    if (error === "This field may not be blank.")
      return "This field is required";

    return error; // Return the original message for other cases
  };

  // Render multiple error messages (if present in an array)
  const renderErrorMessages = (error) => {
    if (Array.isArray(error)) {
      return error.map((err, index) => (
        <p
          key={index}
          className="text-red-500 text-sm text-start font-medium rounded-lg mb-4"
        >
          {formatError(err)}{" "}
        </p>
      ));
    } else if (typeof error === "string") {
      // Handle single error strings
      return (
        <p className="text-red-500 text-sm text-start font-medium rounded-lg mb-2">
          {formatError(error)}
        </p>
      );
    }
    return null; // Return nothing if error is not valid
  };
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="w-1/4">
        <div className="headline-container mb-8">
          <HeadlineSection text="Resend Email" />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            {" "}
            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <CiMail color="gray" size={24} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
                placeholder="Email"
              />
            </div>
            {renderErrorMessages(formError.email)}
          </div>

          {/* Display Non-Field Errors */}
          {/* {formError.non_field_errors &&
            renderErrorMessages(formError.non_field_errors)} */}
          {/* General Error */}
          {/* Display Token Errors */}
          {formError.token && renderErrorMessages(formError.token)}
          {/* General Error */}
          {formError.general && (
            <p className="text-red-500 text-sm text-center font-medium rounded-lg mb-4">
              {formError.general}
            </p>
          )}
          <AuthBtn text="Submit" type="Resend" />
        </form>
      </div>
    </div>
  );
};

export default ResendActivation;
