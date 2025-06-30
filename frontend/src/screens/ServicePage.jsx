import PageTitleCard from "../components/PageTitleCard";
import Services from "../components/Services";

const ServicePage = () => {
  return (
    <div>
      <PageTitleCard
        title="Services"
        image="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg"
      />

      <div className="mt-8">
        <Services />
      </div>
    </div>
  );
};

export default ServicePage;
