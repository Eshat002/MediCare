const DoctorCardSkeleton = () => (
  <div className="animate-pulse flex flex-col px-8 py-10 border rounded-3xl shadow-lg bg-white">
    <div className="rounded-full bg-gray-300 h-20 w-20 mb-5"></div>
    <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-300 rounded w-full"></div>
  </div>
);
export default DoctorCardSkeleton;
