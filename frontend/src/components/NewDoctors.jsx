import React from "react";
import SectionHeadline from "./SectionHeadline";
import NewDoctorCard from "./NewDoctorCard";
import { TiArrowRight } from "react-icons/ti";
import { useEffect, useState } from "react";
import DoctorCardSkeleton from "./DoctorCardSkeleton";
import { unauthenticatedApiClient } from "../utils/axiosClient";

// const BaseUrl = import.meta.env.VITE_API_URL;

const NewDoctors = ({ count = 4 }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      // const token = localStorage.getItem("accessToken");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`, // Add the token here
      //   },
      // };

      try {
        const response = await unauthenticatedApiClient.get(
          `/api/doctors/?count=${count}`
        );

        setDoctors(response.data);
        console.log(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchDoctors();
  }, [count]);

  if (loading) {
    return (
      <>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:px-24 px-6 mb-12 items-center">
          <div className="h-5 bg-gray-300 rounded lg:w-1/4 sm:w-1/2 w-full mb-3"></div>
          <div className="h-5 bg-gray-300 rounded lg:w-1/4 sm:w-1/2 w-full mb-3"></div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-7 gap-5 lg:px-24 px-6 mb-10">
          {/* Render 6 skeleton doctor cards in 2 rows of 3 items each */}
          {[...Array(6)].map((_, index) => (
            <DoctorCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="pb-28" id="NewDoctors">
      <div className="container mx-auto justify-center lg:px-52 px-6">
        <div className="doctor-card-container space-y-6 gap-5">
          {doctors.map((doctor) => (
            <NewDoctorCard
              key={doctor.id}
              full_name={doctor.full_name}
              bio={doctor.bio}
              avatar={doctor.avatar}
              happy_patients={doctor.happy_patients}
              certificates={doctor.certificates}
              specialization={doctor.specialization}
              doctor_at={doctor.doctor_at}
              shadow={doctor.shadow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewDoctors;
