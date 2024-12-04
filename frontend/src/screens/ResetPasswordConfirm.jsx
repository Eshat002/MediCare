import React from "react";
import Doctor from "../assets/Img/Doctor.jpg";
import ResetPasswordConfirmForm from "../components/ResetPasswordConfirmForm";

const ResetPasswordConfirm = () => {
  return (
    <section className="ResetPasswordConfirm mt-4">
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
          <ResetPasswordConfirmForm />
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordConfirm;
