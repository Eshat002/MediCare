import React from "react";
import CountingAnimation from "./CountingAnimation";

const Statistics = () => {
  return (
    <section className="mt-0 py-14 bg-primaryBlack" id="statistics">
      <div className="container mx-auto lg:px-24 px-6 flex lg:flex-row flex-col items-center text-center">
        <div className="lg:w-1/3 w-full lg:border-r border-white/20 lg:py-5 py-6">
          <h3 className="font-extrabold text-5xl text-white mb-2">
            <CountingAnimation target={99} sign="%" />
          </h3>
          <p className="font-medium text-xl text-primary">Positive Feedback</p>
        </div>
        <div className="lg:w-1/3 w-full lg:border-r  border-white/20 lg:py-5 py-6">
          <h3 className="font-extrabold text-5xl text-white mb-2">
            <CountingAnimation target={7300} sign="+" />
          </h3>
          <p className="font-medium text-xl text-primary">
            Happy Patients a week
          </p>
        </div>
        <div className="lg:w-1/3 w-full lg:py-5 py-6">
          <h3 className="font-extrabold text-5xl text-white mb-2">
            <CountingAnimation target={43} sign="" />
          </h3>
          <p className="font-medium text-xl text-primary">
            Professional Doctors
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
