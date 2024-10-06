import React from "react";
import SectionHeadline from "./SectionHeadline";
import DoctorCard from "./DoctorCard";
import BtnWithIcon from "./BtnWithIcon";

const Doctors = () => {
  return (
    <section className="mt-20" id="Doctors">
      <div className="container mx-auto justify-center lg:px-24 px-6">
        <div className="section-headline-container mb-14 flex justify-between">
          <SectionHeadline text="Our Qualified Doctors" />
          <BtnWithIcon text="me" />
        </div>
        <div className="doctor-card-container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-0">
          <DoctorCard />
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
