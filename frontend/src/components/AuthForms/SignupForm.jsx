import useAuthStore from "../../stores/authStore";
import HeadlineSection from "../SectionHeadline";
import { CiLock, CiMail, CiMedal } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AuthBtn } from "../AuthBtn";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const SignupForm = () => {
  const { signup } = useAuthStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigate = useNavigate();
  const [formError, setFormError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError({}); // Clear previous errors

    const result = await signup(
      firstName,
      lastName,
      email,
      password,
      rePassword
    );

    if (result.success) {
      // alert("Signup success");
      navigate("/login");
    } else {
      console.log("Error result:", result.error);
      if (result.error && typeof result.error === "object") {
        setFormError(result.error);
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
          className="text-red-500 text-sm text-start font-medium rounded-lg mb-4 first-letter:uppercase"
        >
          {formatError(err)}{" "}
        </p>
      ));
    } else if (typeof error === "string") {
      // Handle single error strings
      return (
        <p className="text-red-500 text-sm text-start font-medium rounded-lg mb-2 first-letter:uppercase">
          {formatError(error)}
        </p>
      );
    }
    return null; // Return nothing if error is not valid
  };

  return (
    <div className="flex flex-col">
      <div className="headline-container mb-8">
        <HeadlineSection text="Sign up" />
        <p className="text-base text-primaryBlack/70 font-normal mt-2">
          Experience smarter, more affordable healthcare solutions with
          SmileCare.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* First name Field */}
        <div>
          {" "}
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiUser color="gray" size={24} />
            </div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
              placeholder="First name"
            />
          </div>
          {renderErrorMessages(formError.first_name)}
        </div>

        {/* Last name Field */}
        <div>
          {" "}
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiUser color="gray" size={24} />
            </div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
              placeholder="Last name"
            />
          </div>
          {renderErrorMessages(formError.last_name)}
        </div>

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
          {renderErrorMessages(formError.password)}
        </div>

        {/* Retype Password Field */}
        <div>
          <div className="relative mb-4">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CiLock color="gray" size={24} />
            </div>
            <input
              type="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
              placeholder="Retype Password"
            />
          </div>{" "}
          {renderErrorMessages(formError.re_password)}
        </div>

        {/* Display Non-Field Errors */}
        {formError.non_field_errors &&
          renderErrorMessages(formError.non_field_errors)}
        {/* General Error */}

        {/* General Error */}
        {formError.general && (
          <p className="text-red-500 text-sm text-center font-medium rounded-lg mb-4">
            {formError.general}
          </p>
        )}
        <div className="pt-4">
          <AuthBtn text="Sign up" type="submit" />
        </div>
      </form>
      <p className="text-center text-base text-primaryBlack font-normal py-4">
        Already have an account?
        <Link className="font-medium px-1" to="/login">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default SignupForm;
