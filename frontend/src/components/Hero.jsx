import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Calender from "../assets/svg/Calender.jsx";

const Hero = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-8 lg:px-14 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Section: Text Details */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="flex flex-col text-6xl font-bold text-primaryBlack">
            <span className="mb-4">Feel Comfort</span>
            <span>Be Healthy</span>
          </h1>
          <p className="text-xl font-normal text-primaryBlack opacity-70 mb-6">
            Our professional team will take care of you, we value your time and
            health.
          </p>
          <div className="note flex gap-5 bg-primaryOrange/10">
            <div className="">
              <div className="flex items-start gap-3">
                {/* <BsFillCalendarDateFill
                  size="24px"
                  color="#CF7D4E"
                  className="mt-1"
                /> */}
                <Calender />

                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Make an Appointment
                  </p>
                  <p className="text-sm font-medium text-primaryBlack">
                    Select best time for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BsFillCalendarDateFill
                  size="24px"
                  color="#CF7D4E"
                  className="mt-1"
                />
                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Make an Appointment
                  </p>
                  <p className="text-sm font-medium text-primaryBlack">
                    Select best time for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-start gap-3">
                <BsFillCalendarDateFill
                  size="24px"
                  color="#CF7D4E"
                  className="mt-1"
                />
                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Make an Appointment
                  </p>
                  <p className="text-sm font-medium text-primaryBlack">
                    Select best time for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BsFillCalendarDateFill
                  size="24px"
                  color="#CF7D4E"
                  className="mt-1"
                />
                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Make an Appointment
                  </p>
                  <p className="text-sm font-medium text-primaryBlack">
                    Select best time for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://via.placeholder.com/400x300"
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
