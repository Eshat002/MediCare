import { motion } from "framer-motion";

const AchievementCard = ({ name, description, certificate, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`AchivementCard flex sm:flex-row flex-col gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full sm:w-1/3">
        <img
          className="w-full h-auto object-cover border rounded-3xl"
          src={certificate}
          alt="doctor"
        />
      </div>

      <div className="w-full sm:w-2/3 flex sm:flex-row flex-col-reverse gap-7">
        {name}
        <br></br>
        {description}
      </div>
    </motion.div>
  );
};

export default AchievementCard;
