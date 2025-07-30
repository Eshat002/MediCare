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
    <section className="my-20" id="Achivements">
      <div className="container mx-auto justify-center xl:max-w-6xl px-5">
        <SectionHeadline text="Achievements" />
        <div className="achieve-card-container lg:space-y-24 space-y-16 gap-5 lg:mt-20 mt-12">
          {achivements.map((achievement, index) => (
            <AchivementCard
              key={achievement.id}
              name={achievement.name}
              description={achievement.description}
              certificate={achievement.certificate}
              reverse={index % 2 === 1} // true for even index
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
