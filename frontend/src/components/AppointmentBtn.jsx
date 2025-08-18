const AppointmentBtn = ({ text, icon, onClick, CustomPadding = "py-3" }) => {
  return (
    <button
      className={`bg-primary shadow-lg shadow-primary/35 text-lg font-normal flex items-center text-white px-6 ${CustomPadding} rounded-full hover:bg-sky-500`}
      onClick={onClick}
    >
      <span className="me-2">{text}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default AppointmentBtn;
