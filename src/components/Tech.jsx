import React from "react";

import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Card = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[fit] flex justify-evenly items-center group hover:scale-100 :"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain group-hover:scale-125"
          />

          <h3 className="hidden md:block text-white select-none text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary select-none text-[17px] max-w-3xl leading-[30px]"
      >
        I have honed my skills in various technologies and tools over the years.
        I have a diverse background in web / app development and design with
        skills in HTML5, CSS3, JavaScript, ReactJS, Nodejs and tools like
        Vs-Code, Figma, Filmora, PhotoShop and many more.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-38 h-28" key={index}>
            <Card icon={technology.icon} title={technology.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
