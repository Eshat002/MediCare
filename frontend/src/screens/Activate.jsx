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
    if (error === "Invalid token for given user.")
      return "The activation link is invalid. Please request a new one.";

    return error; // Return the original message for other cases
  };

  // Render multiple error messages (if present in an array)
  const renderErrorMessages = (errorArray) => {
    if (Array.isArray(errorArray)) {
      return errorArray.map((err, index) => (
        <p
          key={index}
          className="text-red-500 text-sm text-start font-medium rounded-lg mb-4"
        >
          {formatError(err)}{" "}
          <button
            onClick={handleResend}
            className="text-primaryBlack underline"
          >
            Resend
          </button>
        </p>
      ));
    }
    return null; // Return nothing if the error is not an array
  };

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="max-w-md">
        <div className="headline-container mb-8">
          <HeadlineSection text="Verify Account" />
        </div>

        <form onSubmit={handleSubmit}>
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

          <AuthBtn text="Submit" type="Activate" />
        </form>
      </div>
    </div>
  );
};

export default Activate;
