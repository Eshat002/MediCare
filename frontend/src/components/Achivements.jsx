import React from "react";
import SectionHeadline from "./SectionHeadline";
import AchivementCard from "./AchivementCard";
import { useEffect, useState } from "react";
import { unauthenticatedApiClient } from "../utils/axiosClient";

const Achievements = ({ count = 3 }) => {
  const [achivements, setAchivements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await unauthenticatedApiClient.get(
          `/api/achievements/?count=${count}`
        );

        setAchivements(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchAchievements();
  }, [count]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="my-16" id="Achivements">
      <div className="container mx-auto justify-center xl:px-52 px-5">
        <div className="doctor-card-container space-y-10 gap-5">
          {achivements.map((achivement, index) => (
            <AchivementCard
              key={achivement.id}
              name={achivement.name}
              description={achivement.description}
              certificate={achivement.certificate}
              reverse={index % 2 === 1} // true for even index
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
