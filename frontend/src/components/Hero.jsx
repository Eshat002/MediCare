import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-8 lg:px-14 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Section: Text Details */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unlock Your Potential
          </h1>
          <p className="text-gray-600 mb-6">
            We provide custom solutions to help your business thrive. Let us
            work together to achieve your goals.
          </p>
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
