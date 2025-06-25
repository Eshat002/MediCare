import React from "react";
import SectionHeadline from "./SectionHeadline";
import NewDoctorCard from "./NewDoctorCard";
import { TiArrowRight } from "react-icons/ti";
import { useEffect, useState } from "react";
import DoctorCardSkeleton from "./DoctorCardSkeleton";
import { unauthenticatedApiClient } from "../utils/axiosClient";
import NewDoctorCardSkeleton from "./NewDoctorCardSkeleton";

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
        <div className="flex flex-col space-y-10 container mx-auto justify-center xl:px-52 px-5">
          {/* Render 6 skeleton doctor cards in 2 rows of 3 items each */}
          {[...Array(4)].map((_, index) => (
            <NewDoctorCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="my-16" id="NewDoctors">
      <div className="container mx-auto justify-center xl:px-52 px-5">
        <div className="doctor-card-container space-y-10 gap-5">
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
