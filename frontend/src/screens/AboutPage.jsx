import React from "react";
import PageTitleCard from "../components/PageTitleCard";
import AboutInfo from "../components/AboutInfo";

const AboutPage = () => {
  return (
    <>
      <div>
        <PageTitleCard
          title="About Us"
          image="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg"
          imagePosition={"center top"}
        />
      </div>
      <div>
        <AboutInfo />
      </div>
    </>
  );
};

export default AboutPage;
