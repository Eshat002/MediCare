import React from "react";

const Statistics = () => {
  return (
    <section className="mt-20 py-16 bg-primaryBlack" id="statistics">
      <div className="container mx-auto lg:px-24 px-6 flex text-center">
        <div className="w-1/3">
          <h3 className="font-extrabold text-5xl text-white mb-2">99%</h3>
          <p className="font-medium text-xl text-primary">Positive Feedback</p>
        </div>
        <div className="w-1/3">
          <h3 className="font-extrabold text-5xl text-white mb-2">2,300+</h3>
          <p className="font-medium text-xl text-primary">
            Happy Patients a week
          </p>
        </div>
        <div className="w-1/3">
          <h3 className="font-extrabold text-5xl text-white mb-2">43</h3>
          <p className="font-medium text-xl text-primary">
            Professional Doctors
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
