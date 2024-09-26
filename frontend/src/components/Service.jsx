import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperImage1 from "../assets/Img/SwiperImage1.png";
import SwiperImage2 from "../assets/Img/SwiperImage2.png";
import SwiperImage3 from "../assets/Img/SwiperImage3.png";
import PrevArrow from "../assets/Img/Prev.png"; // Custom previous arrow
import NextArrow from "../assets/Img/Next.png"; // Custom next arrow

const Service = () => {
  const swiperBreakpoints = {
    // When the window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When the window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // When the window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // When the window width is >= 1280px
    1280: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  return (
    <section className="service relative">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="flex justify-between items-center py-12">
          <h2 className="font-bold lg:text-4xl text-2xl text-primaryBlack">
            Our Services
          </h2>

          {/* Custom Navigation Buttons */}
          <div className="custom-arrows flex space-x-4 z-50">
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
            prevEl: ".swiper-button-prev-custom", // Target custom prev button
            nextEl: ".swiper-button-next-custom", // Target custom next button
          }}
          // spaceBetween={40}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={swiperBreakpoints}
        >
          <SwiperSlide>
            <img
              src={SwiperImage1}
              className="object-cover w-full"
              alt="doctor"
            />
            <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
              Immediate Care
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage2}
              alt="doctor"
            />
            <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
              Dental Care
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage3}
              alt="doctor"
            />
            <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
              Diagnostic Center
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={SwiperImage1}
              className="object-cover w-full"
              alt="doctor"
            />
            <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
              Immediate Care
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage3}
              alt="doctor"
            />
            <h4 className="font-medium text-xl capitalize text-primaryBlack my-4">
              Diagnostic Center
            </h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
