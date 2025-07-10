import PageTitleCard from "../components/PageTitleCard";
import NewService from "../components/NewService";

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
    </div>
  );
};

export default ServicePage;
