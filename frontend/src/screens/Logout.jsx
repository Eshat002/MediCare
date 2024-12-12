import useAuthStore from "../stores/authStore";
import HeadlineSection from "../components/SectionHeadline";
import { useNavigate } from "react-router-dom";
import { AuthBtn } from "../components/AuthBtn";

const Logout = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="max-w-md">
        <div className="headline-container mb-8">
          <HeadlineSection text="Logout Account" />
        </div>

        <form onSubmit={handleSubmit}>
          <AuthBtn text="Logout" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Logout;
