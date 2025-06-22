import PageTitleCard from "../components/PageTitleCard";
import NewDoctors from "../components/NewDoctors";

const DoctorPage = () => {
  return (
    <div>
    <PageTitleCard />

    <div className="mt-8">
       <NewDoctors />
    </div>
   
    </div>
  );
};

export default DoctorPage;
