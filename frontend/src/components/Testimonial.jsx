import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrevArrow from "../assets/Img/Prev.png"; // Custom previous arrow
import NextArrow from "../assets/Img/Next.png"; // Custom next arrow
import SectionHeadline from "./SectionHeadline";
import TestimonialCard from "./TestimonialCard";
import Sofia from "../assets/Img/Sofia.png";
import Jordan from "../assets/Img/Jordan.png";

const Testimonial = () => {
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
  };
  return (
    <section id="testimonial" className="relative">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="flex justify-between items-center py-12">
          <div className="section-headline-container">
            <SectionHeadline text="Testimonials" />
          </div>

          {/* Custom Navigation Buttons */}
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
            prevEl: ".swiper-button-prev-custom", // Target custom prev button
            nextEl: ".swiper-button-next-custom", // Target custom next button
          }}
          // spaceBetween={40}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={swiperBreakpoints}
        >
          <SwiperSlide>
            <TestimonialCard
              img={Sofia}
              name="Sofia Potter"
              rating={5}
              review="These guys are incredible to work with. Like
               seriously! They did everything so good, 
               that I did not even imagine it would come up this awesome!
               Really looking forward to working with them again."
            />
          </SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
