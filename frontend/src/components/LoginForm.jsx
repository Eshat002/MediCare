import React, { useState } from "react";
import useAuthStore from "../stores/authStore";
import HeadlineSection from "../components/SectionHeadline";
import Google from "../assets/svg/Google";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { LoginButton } from "./LoginButton";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/test-login");
      // Redirect or show success message
    } else {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div>
      <div className="headline-container">
        <HeadlineSection
          className="font-bold lg:text-4xl text-2xl capitalize text-primaryBlack"
          text="Welcome Back"
        />
        <p className="text-base text-primaryBlack/70 font-normal">
          Experience smarter, more affordable healthcare solutions with
          SmileCare.
        </p>
      </div>
      <form action="">
        <a
          href="/google-login"
          className="flex items-center justify-center font-medium text-base text-primaryBlack gap-2 py-3 px-3 bg-white border border-primaryBlack rounded-lg"
        >
          <Google /> Log in with Google
        </a>
      </form>

      {/* OR */}
      <div className="flex items-center w-full my-4">
        {/* Left Border */}
        <div className="flex-1 border-t border-gray-400"></div>

        {/* OR Text */}
        <span className="px-4 text-gray-500 font-medium">OR</span>

        {/* Right Border */}
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="relative">
          {/* Email Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <MdEmail className="text-lg" />
          </div>

          {/* Input Field */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 outline-none font-medium text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-400"
            placeholder="Enter Your Email"
          />
        </div>

        {/* <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none flex w-1/2 items-center justify-center font-medium text-base text-primaryBlack gap-2 py-3 bg-white border-2 border-gray-400 rounded-lg"
            placeholder="Enter Your Email"
          />
        </div> */}

        {/* <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border outline-none"
            placeholder="Password"
          />
        </div> */}
        <div className="relative">
          {/* Password Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <MdLock className="text-lg" />{" "}
            {/* Replace with the lock icon from react-icons */}
          </div>

          {/* Password Input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full pl-10 outline-none font-medium text-base text-primaryBlack py-3 bg-white border-2 border-gray-400 rounded-lg placeholder-gray-400"
            placeholder="Password"
          />
        </div>
        {/* Forgot password */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <label>Remember Me</label>
          </div>

          <div>
            <a href="/forgot-password">Forget Password?</a>
          </div>
        </div>

        <LoginButton />
      </form>
      <p className="text-center">
        Not member yet?<a href="">Create an account</a>{" "}
      </p>
    </div>
  );
};

export default LoginForm;
