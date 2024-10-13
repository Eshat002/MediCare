import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import Doctors from "../components/Doctors";
import Statistics from "../components/Statistics";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <WhyUs />
      <Doctors />
      <Statistics />
    </div>
  );
};

export default Home;
