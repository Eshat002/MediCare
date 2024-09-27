import React from "react";
import SectionHeadline from "./SectionHeadline";
import WhyUsCard from "./WhyUsCard";
import DNA from "../assets/Img/DNA.png";

const WhyUs = () => {
  return (
    <section className="mt-20" id="whyUs">
      <div className="container mx-auto justify-center px-24">
        <div className="section-headline-container">
          <SectionHeadline text="why us?" />
        </div>
        <div className="why-us-card-container">
          <WhyUsCard
            img={DNA}
            title="DNA Diagnostics"
            text="We are proud to announce that we provide high quality diagnostics for DNA"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
