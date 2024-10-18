import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
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
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (selectedDates) => {
    setFormData({ ...formData, date: selectedDates[0] });
  };
  const handleTimeChange = (selectedTimes) => {
    // Get the selected time
    const selectedTime = selectedTimes[0];

    // Combine the selected date and time into a single Date object
    const combinedDateTime = new Date(formData.date);
    combinedDateTime.setHours(selectedTime.getHours());
    combinedDateTime.setMinutes(selectedTime.getMinutes());

    // Update formData with the combined date and time
    setFormData({ ...formData, time: combinedDateTime });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className="grid grid-cols-2 gap-7 mb-7">
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                <CalenderGray />
              </div>
              <Flatpickr
                className="bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-12 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                id="date"
                options={{
                  dateFormat: "Y-m-d", // Set the date format
                }}
                value={formData.date}
                onChange={handleDateChange}
                placeholder="Appointment Date" // Placeholder text
                required
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-500 pointer-events-none">
                <AiOutlineClockCircle size={22} color="#7D8B8D" />
              </div>
              <Flatpickr
                className="bg-[#FCFCFC] placeholder:text-primaryBlack/60 placeholder:text-base placeholder:font-medium appearance-none border rounded-lg w-full py-3 px-12 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                id="time"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i", // 24-hour format
                  time_24hr: false, // Use 24-hour time
                }}
                value={formData.time}
                onChange={handleTimeChange}
                placeholder="Appointment Time" // Placeholder text
                required
              />
            </div>
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

// import React, { useState } from "react";

// const Appointment = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Add form submission logic here (e.g., API call)
//   };

//   return (
//     <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {/* Headline outside of form container */}
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Book an Appointment
//       </h2>

//       {/* Form container */}
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//         <form onSubmit={handleSubmit}>
//           {/* First Name and Last Name Side by Side */}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="firstName"
//               >
//                 First Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="lastName"
//               >
//                 Last Name
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Email and Phone Side by Side */}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="phone"
//               >
//                 Phone
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Appointment Date and Time Side by Side */}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="date"
//               >
//                 Appointment Date
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="date"
//                 name="date"
//                 type="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor="time"
//               >
//                 Appointment Time
//               </label>
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 id="time"
//                 name="time"
//                 type="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           {/* Message */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="message"
//             >
//               Message (Optional)
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="message"
//               name="message"
//               placeholder="Any additional info"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Appointment;
