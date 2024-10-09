import React from "react";
import SectionHeadline from "./SectionHeadline";
import DoctorCard from "./DoctorCard";
import { TiArrowRight } from "react-icons/ti";
import { useEffect, useState } from "react";
import axios from "axios";

const BaseUrl = import.meta.env.VITE_API_URL;

const Doctors = ({ count = 6 }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/doctors?count=${count}`
        );
        console.log("data", response);
        setDoctors(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [count]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="mt-20 pt-10 pb-24 bg-bronze/5" id="Doctors">
      <div className="container mx-auto justify-center lg:px-24 px-6">
        <div className="section-headline-container mb-14 flex flex-col lg:flex-row lg:justify-between items-center gap-5">
          <SectionHeadline text="Our Qualified Doctors" />
          <button className="bg-transparent border-2 border-bronze shadow-lg text-lg font-medium flex items-center text-bronze px-6 py-3 rounded-full hover:bg-bronze hover:text-white">
            <span className="me-2">See All Doctors</span>
            <TiArrowRight size={24} />
          </button>
        </div>
        <div className="doctor-card-container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-7 gap-0">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              full_name={doctor.full_name}
              avatar={doctor.avatar}
              happy_patients={doctor.happy_patients}
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

export default Doctors;

// const DoctorList = ({ count = 4 }) => {
//     const [doctors, setDoctors] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await axios.get(`/api/doctors?count=${count}`); // Adjust the API endpoint as needed
//                 setDoctors(response.data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDoctors();
//     }, [count]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="doctor-list">
//             <h2>Doctor List</h2>
//             <ul>
//                 {doctors.map((doctor) => (
//                     <li key={doctor.id}>
//                         <h3>{doctor.name}</h3>
//                         <p>Specialization: {doctor.specialization}</p>
//                         <p>Contact: {doctor.contact}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default DoctorList;
