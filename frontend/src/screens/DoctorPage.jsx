import PageTitleCard from "../components/PageTitleCard";
import NewDoctors from "../components/NewDoctors";
import Appointment from "../components/Appointment";

const DoctorPage = () => {
  return (
    <div>
      <PageTitleCard />

      <div className="mt-8">
        <NewDoctors />
      </div>
      <Appointment />
    </div>
  );
};

export default DoctorPage;
