import PageTitleCard from "../components/PageTitleCard";
import NewDoctors from "../components/NewDoctors";
import Appointment from "../components/Appointment";

const DoctorPage = () => {
  return (
    <div>
      <PageTitleCard
        title="Doctors"
        image="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg"
      />

      <div className="mt-8">
        <NewDoctors />
      </div>
      <Appointment />
    </div>
  );
};

export default DoctorPage;
