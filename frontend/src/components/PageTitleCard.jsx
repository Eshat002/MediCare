const PageTitleCard = ({ title, image }) => {
  return (
    <div className="relative h-[400px] w-full">
      {/* Background Image from online source */}
      <img
        src={image}
        alt="Scenic landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Page Title on Top */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-3xl lg:text-5xl font-bold text-white text-center p-5 bg-primaryBlack/70 rounded-2xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageTitleCard;
