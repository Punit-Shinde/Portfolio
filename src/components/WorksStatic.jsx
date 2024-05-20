import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { staticProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative group w-full h-[230px] hover:object-contain hover:scale-100 hover:cursor-zoom-out">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition duration-300 transform  group-hover:object-contain group-hover:cursor-zoom-out"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20"
            >
              <img
                src={github}
                alt="source code"
                className="w-2/3 h-2/3 object-contain hover:scale-125"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-start items-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_live_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20"
            >
              <img
                src={live}
                alt="source code"
                className="w-2/3 h-2/3 object-contain hover:scale-125"
              />
            </div>
          </div>
        </div>

        <h3 className="text-white select-none font-bold text-[24px]">
          {name}
        </h3>
        <p className="mt-2 text-secondary select-none text-[14px]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] hover:scale-125 cursor-zoom-in ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const WorksStatic = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} select-none`}>
          HTML, CSS, JavaScript
        </p>
        <h2 className={`${styles.sectionHeadText} select-none`}>
          Web Sites.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary select-none text-[17px] max-w-3xl leading-[30px]"
      >
        I started my web development journey with HTML, CSS, and JavaScript. Over time, I transitioned from static websites to dynamic, interactive ones. My exploration of various technologies and tools led me to proficiency in full-stack MERN applications. Continuous learning has greatly enhanced my web development capabilities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {staticProjects.slice(0, 3).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorksStatic, "Swork");
