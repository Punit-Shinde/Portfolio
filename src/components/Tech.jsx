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
        I'm a skilled software developer with experience in 
        React-Native, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-38 h-28' key={technology.name}>
          <Card icon={technology.icon} />
        </div>
      ))}
    </div>
</>
    
  );
};

export default SectionWrapper(Tech, "tech");
