import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Card from "./partials/Card"
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";



const Tech = () => {
  return (
<>
<motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have honed my skills in various technologies and  tools over the years. 
        I have a diverse background in web / app development and design with skills in HTML5, CSS3, JavaScript,  ReactJS, Nodejs and tools like Vs-Code, Figma, Filmora, PhotoShop and many more.
      </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-38 h-28' key={index}>
          <Card icon={technology.icon} title={technology.title} />
        </div>
      ))}
    </div>
</>
    
  );
};

export default SectionWrapper(Tech, "tech");
