import React from "react";
import Hero from "../components/Hero";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import Doctors from "../components/Doctors";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <WhyUs />
      <Doctors />
      <Statistics />
      <Testimonial />
      <Appointment />
    </div>
  );
};

export default Home;
