import useAuthStore from "../../stores/authStore";
import HeadlineSection from "../SectionHeadline";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AuthBtn } from "../AuthBtn";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPasswordConfirmForm = () => {
  const { confirmPasswordReset } = useAuthStore();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const [formError, setFormError] = useState({});

  const { uid, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError({}); // Clear previous errors

    const result = await confirmPasswordReset(
      uid,
      token,
      password,
      newPassword
    );

    if (result.success) {
      alert("Password reset successful!");
      navigate("/login");
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
    if (error === "Invalid token for given user.")
      return "The password reset link is invalid. Please request a new one.";

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
    <div className="flex flex-col">
      <div className="headline-container mb-8">
        <HeadlineSection text="Set New Password" />
      </div>

      <form onSubmit={handleSubmit}>
        {/* Password Field */}
        <div>
          {" "}
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiLock color="gray" size={24} />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
              placeholder="Password"
            />
          </div>
          {renderErrorMessages(formError.new_password)}
        </div>

        {/* Retype Password Field */}
        <div>
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiLock color="gray" size={24} />
            </div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
              placeholder="Retype Password"
            />
          </div>{" "}
          {renderErrorMessages(formError.re_new_password)}
        </div>

        {/* Display Non-Field Errors */}
        {formError.non_field_errors &&
          renderErrorMessages(formError.non_field_errors)}
        {/* General Error */}

        {/* Display Token Errors */}
        {formError.token && renderErrorMessages(formError.token)}
        {/* General Error */}
        {formError.general && (
          <p className="text-red-500 text-sm text-center font-medium rounded-lg mb-4">
            {formError.general}
          </p>
        )}

        <AuthBtn text="Submit" type="submit" />
      </form>
    </div>
  );
};

export default ResetPasswordConfirmForm;
