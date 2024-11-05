// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import SwiperImage1 from "../assets/Img/SwiperImage1.png";
// import SwiperImage2 from "../assets/Img/SwiperImage2.png";
// import SwiperImage3 from "../assets/Img/SwiperImage3.png";
// import PrevArrow from "../assets/Img/Prev.png"; // Custom previous arrow
// import NextArrow from "../assets/Img/Next.png"; // Custom next arrow
// import SectionHeadline from "./SectionHeadline";

// const Service = () => {
//   const swiperBreakpoints = {
//     // When the window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     // When the window width is >= 640px
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     // When the window width is >= 1024px
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     // When the window width is >= 1280px
//     1280: {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//   };

//   return (
//     <section className="service relative">
//       <div className="container mx-auto px-8 lg:px-24">
//         <div className="flex justify-between items-center py-12">
//           <div className="section-headline-container">
//             <SectionHeadline text={"our services"} />
//           </div>

//           {/* Custom Navigation Buttons */}
//           <div className="custom-arrows flex space-x-4 z-60">
//             <div className="swiper-button-prev-custom">
//               <img src={PrevArrow} alt="Previous" />
//             </div>
//             <div className="swiper-button-next-custom">
//               <img src={NextArrow} alt="Next" />
//             </div>
//           </div>
//         </div>

//         <Swiper
//           modules={[Pagination, Navigation]}
//           navigation={{
//             prevEl: ".swiper-button-prev-custom", // Target custom prev button
//             nextEl: ".swiper-button-next-custom", // Target custom next button
//           }}
//           // spaceBetween={40}
//           slidesPerView={4}
//           pagination={{ clickable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log("slide change")}
//           breakpoints={swiperBreakpoints}
//         >
//           <SwiperSlide>
//             <img
//               src={SwiperImage1}
//               className="object-cover w-full"
//               alt="doctor"
//             />
//             <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
//               Immediate Care
//             </h4>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className="object-cover w-full"
//               src={SwiperImage2}
//               alt="doctor"
//             />
//             <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
//               Dental Care
//             </h4>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className="object-cover w-full"
//               src={SwiperImage3}
//               alt="doctor"
//             />
//             <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
//               Diagnostic Center
//             </h4>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               src={SwiperImage1}
//               className="object-cover w-full"
//               alt="doctor"
//             />
//             <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
//               Immediate Care
//             </h4>
//           </SwiperSlide>
//           <SwiperSlide>
//             <img
//               className="object-cover w-full"
//               src={SwiperImage3}
//               alt="doctor"
//             />
//             <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
//               Diagnostic Center
//             </h4>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Service;

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion"; // Import framer-motion
import SwiperImage1 from "../assets/Img/SwiperImage1.png";
import SwiperImage2 from "../assets/Img/SwiperImage2.png";
import SwiperImage3 from "../assets/Img/SwiperImage3.png";
import PrevArrow from "../assets/Img/Prev.png"; // Custom previous arrow
import NextArrow from "../assets/Img/Next.png"; // Custom next arrow
import SectionHeadline from "./SectionHeadline";

const Service = () => {
  const swiperBreakpoints = {
    320: { slidesPerView: 1, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 40 },
    1280: { slidesPerView: 4, spaceBetween: 50 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="service relative">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="flex justify-between items-center py-12">
          <div className="section-headline-container">
            <SectionHeadline text={"our services"} />
          </div>

          <div className="custom-arrows flex space-x-4 z-60">
            <div className="swiper-button-prev-custom">
              <img src={PrevArrow} alt="Previous" />
            </div>
            <div className="swiper-button-next-custom">
              <img src={NextArrow} alt="Next" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{ clickable: true }}
          breakpoints={swiperBreakpoints}
        >
          <SwiperSlide>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={SwiperImage1}
                className="object-cover w-full"
                alt="doctor"
              />
              <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
                Immediate Care
              </h4>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={SwiperImage2}
                className="object-cover w-full"
                alt="doctor"
              />
              <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
                Dental Care
              </h4>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={SwiperImage3}
                className="object-cover w-full"
                alt="doctor"
              />
              <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
                Diagnostic Center
              </h4>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={SwiperImage1}
                className="object-cover w-full"
                alt="doctor"
              />
              <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
                Immediate Care
              </h4>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={SwiperImage3}
                className="object-cover w-full"
                alt="doctor"
              />
              <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
                Diagnostic Center
              </h4>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
