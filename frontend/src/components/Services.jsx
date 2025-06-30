import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { unauthenticatedApiClient } from "../utils/axiosClient";

// const BaseUrl = import.meta.env.VITE_API_URL;

const Services = ({ count = 6 }) => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      // const token = localStorage.getItem("accessToken");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`, // Add the token here
      //   },
      // };

      try {
        const response = await unauthenticatedApiClient.get(
          `/api/services/?count=${count}`
        );

        setServices(response.data);
        console.log(response);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchServices();
  }, [count]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="mt-2" id="Services">
      <div className="container mx-auto justify-center lg:px-24 px-6">
        <div className="service-card-container grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:gap-7 gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              content={service.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
