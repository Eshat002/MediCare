import { useNavigate, useLocation } from "react-router-dom";

const AppointmentBtn = ({ text, icon, CustomPadding = "py-3" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToForm = () => {
    const pagesWithoutForm = ["/blog", "/contact"];

    if (pagesWithoutForm.includes(location.pathname)) {
      // Go to the default form page (services or homepage)
      navigate("/#appointment-form");
    } else {
      // Same page – just scroll to the form section
      navigate(`${location.pathname}#appointment-form`);
    }
  };

  return (
    <button
      className={`bg-primary shadow-lg shadow-primary/35 text-lg font-normal flex items-center text-white px-6 ${CustomPadding} rounded-full hover:bg-sky-500`}
      onClick={goToForm}
    >
      <span className="me-2">{text}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default AppointmentBtn;
