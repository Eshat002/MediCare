import React from "react";
import Calender from "../assets/svg/Calender.jsx";
import { BsPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import BtnWithIcon from "./BtnWithIcon.jsx";
import HeroImage from "../assets/Img/HeroImage.png";

const Hero = () => {
  return (
    <section className="mt-20">
      <div className="container mx-auto px-8 lg:px-6 flex flex-col-reverse gap-16 lg:flex-row justify-center items-start">
        {/* Left Section: Text Details */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="flex flex-col text-7xl font-bold text-balance text-primaryBlack leading-[5rem]	 mb-3">
            {/* <span className="mb-4">Feel Comfort</span>
            <span>Be Healthy</span> */}
            Feel Comfort Be Healthy
          </h1>
          <p className="text-xl font-normal text-primaryBlack opacity-70 mb-6 py-5 text-balance">
            Our professional team will take care of you, we value your time and
            health.
          </p>
          <div className="note flex gap-5 p-14 rounded-3xl space-x-4 mb-16 mt-12 bg-primaryOrange/5">
            <div className="flex flex-col">
              <div className="flex items-start gap-3 mb-5">
                <Calender />

                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Make an Appointment
                  </p>
                  <p className="text-sm font-medium text-primaryBlack leading-7">
                    Select best time for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaLocationDot size="24px" color="#CF7D4E" className="mt-1" />
                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Visit the clinic
                  </p>
                  <p className="text-sm font-medium text-primaryBlack leading-7">
                    take care of your issues
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <BsPeopleFill size="24px" color="#CF7D4E" className="mt-1" />
                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Find the Best Doctor
                  </p>
                  <p className="text-sm font-medium text-primaryBlack leading-7">
                    find the best doctor in a minute
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IoMailOpen size="26px" color="#CF7D4E" className="mt-1" />
                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Ask Questions
                  </p>
                  <p className="text-sm font-medium text-primaryBlack leading-7">
                    Ask questions any time
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-n-time-container items-center gap-8 flex mt-5">
            <BtnWithIcon
              text="Make Appointment"
              icon={<TiArrowRight size={24} />}
            />
            <div className="time text-primaryOrange font-medium text-base">
              <p>
                <span className="mr-4">Mon-Fri </span>10AM-9PM
              </p>
              <p>
                <span className="mr-4">Sat</span> 10AM-2PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
//         {/* Left Section: Text Details */}
//         <div className="md:w-1/2 text-center md:text-left px-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Unlock Your Potential
//           </h1>
//           <p className="text-gray-600 mb-6">
//             We provide custom solutions to help your business thrive. Let us
//             work together to achieve your goals.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
//             Get Started
//           </button>
//         </div>

//         {/* Right Section: Image */}
//         <div className="md:w-1/2 px-6 mb-8 md:mb-0">
//           <img
//             src="https://via.placeholder.com/400x300"
//             alt="Hero"
//             className="w-full h-auto object-cover rounded-md shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
