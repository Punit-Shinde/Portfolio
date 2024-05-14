import React from "react";

import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { certi } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Certificates = () => {
  const images = [];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Accomplishments</p>
        <h2 className={styles.sectionHeadText}>Cetifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary select-none text-[17px] max-w-3xl leading-[30px]"
      >
        Over the time, I have earned various certifications that validate my
        expertise in web and app development. They serve as a testament to my
        commitment to continuous learning and proficiency in using various tools
        and technologies. Below, you'll find a detailed list of my
        certifications along with the issuing authority and date of completion.
      </motion.p>

      <Carousel
        className="crsl w-full m-auto mt-7"
        autoPlay
        autoFocus
        infiniteLoop
        centerMode
        interval={2000}
      >
        {certi.map((certi) => (
          <img key={certi.id} src={certi.img} className="h-[90%] mb-2" />
        ))}
      </Carousel>
    </>
  );
};

export default SectionWrapper(Certificates, "Certi");
