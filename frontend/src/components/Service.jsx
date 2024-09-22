import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperImage1 from "../assets/Img/SwiperImage1.png";
import SwiperImage2 from "../assets/Img/SwiperImage2.png";
import SwiperImage3 from "../assets/Img/SwiperImage3.png";

const Service = () => {
  return (
    <section className="service">
      <div className="container mx-auto px-8 lg:px-24">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={4}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src={SwiperImage1}
              className="object-cover w-full"
              alt="doctor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage2}
              alt="doctor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage3}
              alt="doctor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage1}
              alt="doctor"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage2}
              alt="doctor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full"
              src={SwiperImage3}
              alt="doctor"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
