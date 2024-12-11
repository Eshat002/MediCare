import useAuthStore from "../stores/authStore";
import HeadlineSection from "../components/SectionHeadline";
import { useNavigate } from "react-router-dom";
import { AuthBtn } from "../components/AuthBtn";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Activate = () => {
  const { verifyAccount } = useAuthStore();

  const navigate = useNavigate();
  const [formError, setFormError] = useState({});

  const { uid, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError({}); // Clear previous errors

    const result = await verifyAccount(uid, token);

    if (result.success) {
      alert("Activation successful!");
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

  const handleResend = async () => {
    navigate("/resend/activation");
  };

  // Helper function to format error messages
  const formatError = (error) => {
    if (error === "Invalid user id or user doesn't exist.")
      return "User does not exist";

    if (error === "Invalid token for given user.")
      return "The activation link is invalid. Please request a new one.";

    if (error === "Stale token for given user.")
      return "Your account is already activated. You can log in to continue.";

    return error; // Return the original message for other cases
  };

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
      <div className="max-w-md">
        <div className="headline-container mb-8">
          <HeadlineSection text="Activate Account" />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Display Non-Field Errors */}
          {/* {formError.non_field_errors &&
            renderErrorMessages(formError.non_field_errors)} */}

          {/* User not found */}
          {formError.uid && renderErrorMessages(formError.uid)}
          {/* Display Token Errors */}
          {formError.token && renderErrorMessages(formError.token)}
          {/* Already used token Errors */}
          {formError.detail && renderErrorMessages(formError.detail)}

          {/* Resend Button */}
          {(formError.token || formError.detail) && (
            <button
              onClick={handleResend}
              className="text-primaryBlack underline text-sm font-medium mb-4"
            >
              Resend
            </button>
          )}

          {/* General Error */}
          {formError.general && (
            <p className="text-red-500 text-sm text-center font-medium rounded-lg mb-2">
              {formError.general}
            </p>
          )}

          <AuthBtn text="Activate" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Activate;
