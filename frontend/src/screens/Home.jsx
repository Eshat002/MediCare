import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import Test from "../components/Test";
import Doctors from "../components/Doctors";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <WhyUs />
      <Doctors />
      {/* <Test /> */}
    </div>
  );
};

export default Home;
