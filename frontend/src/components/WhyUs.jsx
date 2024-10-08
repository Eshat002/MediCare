import React from "react";
import SectionHeadline from "./SectionHeadline";
import WhyUsCard from "./WhyUsCard";
import DNA from "../assets/Img/DNA.png";
import Lab from "../assets/Img/Lab.png";
import MediSupport from "../assets/Img/MediSupport.png";
import Insurance from "../assets/Img/Insurance.png";
import Training from "../assets/Img/Training.png";
import Clean from "../assets/Img/Clean.png";

const WhyUs = () => {
  return (
    <section className="mt-20" id="whyUs">
      <div className="container mx-auto justify-center lg:px-24 px-6">
        <div className="section-headline-container mb-14 lg:text-start text-center">
          <SectionHeadline text="why us?" />
        </div>
        <div className="why-us-card-container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-0">
          <WhyUsCard
            img={DNA}
            title="DNA Diagnostics"
            text="We are proud to announce that we provide high quality diagnostics for DNA"
          />
          <WhyUsCard
            img={Insurance}
            title="Insurance"
            text="You can get our insurance to not care of any financial difficulties in future."
            customClass="bg-white drop-shadow-[0_25px_45px_rgba(135,206,235,0.3)]"
          />
          <WhyUsCard
            img={MediSupport}
            title="Medical Support"
            text="We have a huge amount of high quality medicine from Germany"
          />
          <WhyUsCard
            img={Lab}
            title="Lab Achievements"
            text="iMedical has 12 laboratory achievements that have world level impact in medicine."
          />
          <WhyUsCard
            img={Clean}
            title="24/7 Clean"
            text="We care about having a clean and safe rooms for our patients"
          />
          <WhyUsCard
            img={Training}
            title="Training Routine"
            text="Our doctors will help you get personal training routine to get the best results"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
