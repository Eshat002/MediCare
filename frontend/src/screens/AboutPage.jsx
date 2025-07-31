import PageTitleCard from "../components/PageTitleCard";
import AboutInfo from "../components/AboutInfo";
import Achievements from "../components/Achivements";

import Doctors from "../components/Doctors";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";
import Appointment from "../components/Appointment";

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
      <div>
        <Achievements />
      </div>
      <div>
        <Doctors />
      </div>
      <div>
        <Statistics />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Appointment />
      </div>
    </>
  );
};

export default AboutPage;
