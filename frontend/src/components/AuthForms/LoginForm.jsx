import useAuthStore from "../../stores/authStore";
import HeadlineSection from "../SectionHeadline";
import Google from "../../assets/svg/Google";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthBtn } from "../AuthBtn";
import { useState } from "react";

const LoginForm = () => {
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [formError, setFormError] = useState(""); //

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(""); // Clear previous errors

    const result = await login(email, password);
    if (result.success) {
      navigate("/");
    } else {
      setFormError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="headline-container mb-8">
        <HeadlineSection
          className="font-bold lg:text-4xl text-2xl capitalize text-primaryBlack"
          text="Welcome Back"
        />

        <p className="text-base text-primaryBlack/70 font-normal mt-2">
          Experience smarter, more affordable healthcare solutions with
          SmileCare.
        </p>
      </div>
      <form>
        <Link
          to="/google-login"
          className="flex items-center justify-center font-medium text-base text-primaryBlack gap-2 py-3 px-3 bg-white border border-primaryBlack rounded-lg"
        >
          <Google /> Log in with Google
        </Link>
      </form>

      {/* OR */}
      <div className="flex items-center w-full my-6">
        {/* Left Border */}
        <div className="flex-1 border-t border-primaryBlack"></div>

        {/* OR Text */}
        <span className="px-4 text-primaryBlack font-medium">OR</span>

        {/* Right Border */}
        <div className="flex-1 border-t border-primaryBlack"></div>
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
        <div className="relative">
          {/* Password Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <CiLock color="gray" size={24} />
            {/* Replace with the lock icon from react-icons */}
          </div>

          {/* Password Input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 outline-none font-normal text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-300"
            placeholder="Password"
          />
        </div>
        {formError && (
          <div className="p-5 bg-primary/20 text-red-500 text-sm text-center font-medium rounded-lg mt-6">
            {formError}
          </div>
        )}
        {/* Forgot password */}
        <div className="flex justify-between py-4">
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <label className="px-3 text-base text-primaryBlack font-normal">
              Remember Me
            </label>
          </div>

          <div>
            <Link
              to="/forgot-password"
              className="text-base text-primaryBlack font-normal underline"
            >
              Forget Password?
            </Link>
          </div>
        </div>
        <AuthBtn text="Log in" />
      </form>
      <p className="text-center text-base text-primaryBlack font-normal py-4">
        Not member yet?
        <Link className="font-medium px-1" to="/signup">
          Create an account
        </Link>{" "}
      </p>
    </div>
  );
};

export default LoginForm;
