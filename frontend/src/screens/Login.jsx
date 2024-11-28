import React, { useState } from "react";
import useAuthStore from "../stores/authStore";
import Doctor from "../assets/Img/Doctor.jpg";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <section className="login">
      <div className="container mx-auto flex justify-center">
        {/* image-container */}
        <div className="w-1/2">
          <img className="h-screen w-full object-cover" src={Doctor} alt="" />
        </div>
        {/* form container */}
        <div className="flex justify-start w-1/2">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
