const NewDoctorCardSkeleton = () => (
  <div className="animate-pulse flex flex-col sm:flex-row gap-7">
    {/* Image skeleton */}
    <div className="w-full sm:w-1/3">
      <div className="w-full h-80 bg-gray-300 rounded-3xl"></div>
    </div>

    {/* Right section */}
    <div className="w-full sm:w-2/3 flex sm:flex-row flex-col-reverse gap-7">
      {/* Left info panel */}
      <div className="sm:w-1/4 w-full bg-primaryOrange/10 p-4 gap-6 rounded-3xl flex flex-row sm:flex-col text-center justify-center items-center">
        <div>
          <div className="h-6 w-16 bg-gray-300 rounded mb-3 mx-auto"></div>
          <div className="h-4 w-20 bg-gray-200 rounded mx-auto"></div>
        </div>
        <div>
          <div className="h-6 w-16 bg-gray-300 rounded mb-3 mx-auto"></div>
          <div className="h-4 w-24 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>

      {/* Bio and name section */}
      <div className="sm:w-3/4 w-full flex flex-col justify-center">
        <div className="h-6 w-40 bg-gray-300 rounded mb-3"></div>
        <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-full bg-gray-200 rounded mb-3"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);
export default NewDoctorCardSkeleton;
