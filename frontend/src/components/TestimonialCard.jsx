import React from "react";
import ReactStars from "react-stars";

const TestimonialCard = ({ name, rating, review, img }) => {
  //   const ratingChanged = (newRating) => {
  //     console.log(newRating);
  //   };
  return (
    <div className="bg-bronze/5 flex" id="testimonial-card">
      <img
        className="w-20 h-20 object-cover rounded-full"
        src={img}
        alt="avatar"
      />
      <div>
        <h5>{name}</h5>
        <ReactStars
          count={5}
          value={rating}
          //   onChange={ratingChanged}
          size={28}
          color2="#CF7D4E"
          edit={false}
        />
        <p>{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
