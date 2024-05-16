import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { mobProjects } from "../constants";
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
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex-col"
      >
        <div className="flex">
          <div className="relative group w-full h-[230px] hover:object-contain hover:scale-100 hover:cursor-zoom-out">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-contain rounded-2xl hover:scale-150 cursor-zoom-in"
            />
          </div>

          <div className="relative flex flex-col w-2/3">
            <div className="absolute inset-0 flex justify-end card-img_hover ">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer z-20"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-2/3/4 h-2/3 object-contain hover:scale-125"
                />
              </div>
              <div className="absolute inset-0 flex justify-end items-end card-img_hover">
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

            <h3 className="text-white select-none font-bold text-[24px] w-5">
              {name}
            </h3>
            <p className="mt-2 text-secondary text-[14px] select-none">
              {description}
            </p>
          </div>
        </div>

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

const WorksMob = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} select-none`}>
          My React-Native work
        </p>
        <h2 className={`${styles.sectionHeadText} select-none`}>
          Mobile Apps.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary select-none text-[17px] max-w-3xl leading-[30px]"
      >
        Over time, I have refined my mobile app development skills by exploring
        a diverse range of technologies and tools. My journey began with
        creating simple mobile applications, which then progressed to more
        dynamic ones. Subsequently, I delved into various frameworks,
        culminating in the development of full-stack applications using
        technologies like React Native. This progression has significantly
        enhanced my proficiency in mobile app development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {mobProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WorksMob, "Mwork");
