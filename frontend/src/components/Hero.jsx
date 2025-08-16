// import React from "react";
// import Calender from "../assets/svg/Calender.jsx";
// import { BsPeopleFill } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMailOpen } from "react-icons/io5";
// import { TiArrowRight } from "react-icons/ti";
// import BtnWithIcon from "./BtnWithIcon.jsx";
// import HeroImage from "../assets/Img/HeroImage.png";
// import HeroImageMobile from "../assets/Img/HeroImageMobile.png";

// const Hero = () => {
//   return (
//     <section className="mt-10 lg:mt-20  mb-20">
//       <div className="container mx-auto px-8 lg:px-0 flex flex-col-reverse gap-6 lg:gap-16 lg:flex-row justify-center  items-start">
//         {/* Left Section: Text Details */}
//         <div className="lg:w-1/2 lg:text-left">
//           <h1 className="flex flex-col text-5xl lg:text-7xl font-bold text-balance text-primaryBlack leading-[4rem] sm:leading-[6rem] lg:leading-[5rem]	 mb-4">
//             {/* <span className="mb-4">Feel Comfort</span>
//             <span>Be Healthy</span> */}
//             Feel Comfort Be Healthy
//           </h1>
//           <p className="text-xl font-normal text-primaryBlack opacity-70 py-0 lg:py-5 lg:text-balance pr-12">
//             Our professional team will take care of you, we value your time and
//             health.
//           </p>
//           <div className="note flex flex-col lg:flex-row gap-5 p-8 lg:p-14 rounded-3xl lg:space-x-4 mb-11 lg:mb-14 mt-8 bg-primaryOrange/5">
//             <div className="flex flex-col">
//               <div className="flex items-start gap-3 mb-5">
//                 <Calender />

//                 <div className="opacity-80">
//                   <p className="text-base font-semibold text-primaryBlack">
//                     Make an Appointment
//                   </p>
//                   <p className="text-sm font-medium text-primaryBlack leading-7">
//                     Select best time for you.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <FaLocationDot size="24px" color="#CF7D4E" className="mt-1" />
//                 <div className="opacity-80">
//                   <p className="text-base font-semibold text-primaryBlack">
//                     Visit the clinic
//                   </p>
//                   <p className="text-sm font-medium text-primaryBlack leading-7">
//                     take care of your issues
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <div className="flex items-start gap-3 mb-4">
//                 <BsPeopleFill size="24px" color="#CF7D4E" className="mt-1" />
//                 <div className="opacity-80">
//                   <p className="text-base font-semibold text-primaryBlack">
//                     Find the Best Doctor
//                   </p>
//                   <p className="text-sm font-medium text-primaryBlack leading-7">
//                     find the best doctor in a minute
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <IoMailOpen size="26px" color="#CF7D4E" className="mt-1" />
//                 <div className="opacity-80">
//                   <p className="text-base font-semibold text-primaryBlack">
//                     Ask Questions
//                   </p>
//                   <p className="text-sm font-medium text-primaryBlack leading-7">
//                     Ask questions any time
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="btn-n-time-container lg:items-center gap-8 flex flex-col-reverse md:flex-row  mt-5">
//             <BtnWithIcon
//               text="Make Appointment"
//               icon={<TiArrowRight size={24} />}
//             />
//             <div className="time text-primaryOrange font-medium text-base">
//               <p>
//                 <span className="mr-4">Mon-Fri </span>10AM-9PM
//               </p>
//               <p>
//                 <span className="mr-4">Sat</span> 10AM-2PM
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Image */}
//         <div className="lg:w-1/3 mb-0 rounded-3xl">
//           <img
//             src={HeroImage}
//             alt="Hero"
//             className="lg:block hidden w-full h-auto object-cover rounded-md shadow-3xl"
//           />
//           <img
//             src={HeroImageMobile}
//             alt="Hero-Mobile"
//             className="lg:hidden block w-full h-auto object-cover rounded-3xl shadow-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
import Calender from "../assets/svg/Calender.jsx";
import { BsPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import BtnWithIcon from "./BtnWithIcon.jsx";
import HeroImage from "../assets/Img/HeroImage.png";
import HeroImageMobile from "../assets/Img/HeroImageMobile.png";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToForm = () => {
    const pagesWithoutForm = ["/blog", "/contact"];

    if (pagesWithoutForm.includes(location.pathname)) {
      // Go to the default form page, e.g. /services
      navigate("/#appointment-form");
    } else {
      // Same page - just scroll to the form section
      navigate(`${location.pathname}#appointment-form`);
    }
  };
  return (
    <section className="mt-10 lg:mt-20 mb-20">
      <div className="container mx-auto px-8 lg:px-0 flex flex-col-reverse gap-6 lg:gap-16 lg:flex-row justify-center items-start">
        {/* Left Section: Text Details */}
        <motion.div
          className="lg:w-1/2 lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="flex flex-col text-5xl lg:text-7xl font-bold text-balance text-primaryBlack leading-[4rem] sm:leading-[6rem] lg:leading-[5rem] mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Feel Comfort Be Healthy
          </motion.h1>
          <motion.p
            className="text-xl font-normal text-primaryBlack opacity-70 py-0 lg:py-5 lg:text-balance pr-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our professional team will take care of you, we value your time and
            health.
          </motion.p>

          {/* Animated Note Section */}
          <motion.div
            className="note flex flex-col lg:flex-row gap-5 p-8 lg:p-14 rounded-3xl lg:space-x-4 mb-11 lg:mb-14 mt-8 bg-primaryOrange/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Appointment and Location Details */}
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
                    Take care of your issues
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor and Questions Details */}
            <div className="flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <BsPeopleFill size="24px" color="#CF7D4E" className="mt-1" />
                <div className="opacity-80">
                  <p className="text-base font-semibold text-primaryBlack">
                    Find the Best Doctor
                  </p>
                  <p className="text-sm font-medium text-primaryBlack leading-7">
                    Find the best doctor in a minute
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
          </motion.div>

          {/* Button and Time Animation */}
          <motion.div
            className="btn-n-time-container lg:items-center gap-8 flex flex-col-reverse md:flex-row mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <BtnWithIcon
              text="Make Appointment"
              icon={<TiArrowRight size={24} />}
              onClick={goToForm}
            />
            <div className="time text-primaryOrange font-medium text-base">
              <p>
                <span className="mr-4">Mon-Fri </span>10AM-9PM
              </p>
              <p>
                <span className="mr-4">Sat</span> 10AM-2PM
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="lg:w-1/3 mb-0 rounded-3xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={HeroImage}
            alt="Hero"
            className="lg:block hidden w-full h-auto object-cover rounded-md shadow-3xl"
          />
          <img
            src={HeroImageMobile}
            alt="Hero-Mobile"
            className="lg:hidden block w-full h-auto object-cover rounded-3xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
