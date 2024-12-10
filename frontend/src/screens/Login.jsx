import React from "react";
import Doctor from "../assets/Img/Doctor.jpg";
import LoginForm from "../components/AuthForms/LoginForm";

const Login = () => {
  return (
    <section className="login mt-4">
      <div className="flex">
        {/* image-container */}
        <div className="md:w-1/2 md:flex hidden">
          <img
            className="min-h-screen w-full object-cover rounded-r-[60px]"
            src={Doctor}
            alt="doctor-image"
          />
        </div>
        {/* form container */}
        <div className="md:w-1/2 w-full flex justify-center md:mt-20 mt-14 xl:px-36 px-6">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
