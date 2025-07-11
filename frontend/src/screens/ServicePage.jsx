import PageTitleCard from "../components/PageTitleCard";
import NewService from "../components/NewService";
import WhyUs from "../components/WhyUs";
import Statistics from "../components/Statistics";
import Appointment from "../components/Appointment";

const ServicePage = () => {
  return (
    <div>
      <PageTitleCard
        title="Services"
        image="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg"
      />

      <div className="mt-8">
        <NewService />
      </div>
      <div>
        <WhyUs />
      </div>
      <div>
        <Statistics />
      </div>
      <div>
        <Appointment />
      </div>
    </div>
  );
};

export default ServicePage;
