import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import Flatpickr CSS
import CalenderGray from "../assets/svg/CalenderGray.jsx";
import SectionHeadline from "./SectionHeadline.jsx";
import BtnWithIcon from "./BtnWithIcon.jsx";
import { FaTelegramPlane } from "react-icons/fa";

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    appointmentDateTime: null, // Combined date and time
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateTimeChange = (selectedDates) => {
    setFormData({ ...formData, appointmentDateTime: selectedDates[0] }); // Set combined date and time
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      appointmentDateTime: null, // Combined date and time
      message: "",
    });
    console.log(formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <section className="bg-white flex flex-col items-center justify-center py-20">
      <div className="section-headline-container mb-5">
        <SectionHeadline text="Make Appointment" />
      </div>
      <div className="p-6 w-full max-w-3xl">
        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <input
                className="bg-[#fcfcfc] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-2 gap-7 mb-7">
            <div>
              <input
                className="bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className="bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Appointment Date and Time using Flatpickr */}
          <div className="relative mb-7">
            <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
              <CalenderGray />
            </div>
            <Flatpickr
              className="bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-12 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
              id="dateTime"
              options={{
                enableTime: true,
                dateFormat: "Y-m-d H:i", // Set the date and time format
                time_24hr: false, // Use 12-hour time
              }}
              value={formData.appointmentDateTime} // Use the combined date and time
              onChange={handleDateTimeChange}
              placeholder="Appointment Date and Time" // Placeholder text
              required
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <textarea
              className="bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
              id="message"
              name="message"
              placeholder="Describe what you’re looking for..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <BtnWithIcon text="Send" icon={<FaTelegramPlane size={20} />} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
