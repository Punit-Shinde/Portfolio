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
      <div className="bg-[#100D25]  p-5 mt-5 rounded-xl">
        <Carousel
          autoPlay
          autoFocus
          infiniteLoop
          centerMode
          interval={2000}
          showThumbs={false}
          showArrows={true}
          selectedItem={0} // Ensure only one item is visible at a time
          centerSlidePercentage={100} // Ensure only one item is visible at a time
          className="crsl w-full"
        >
          {certi.map((certi) => (
            <div
              key={certi.id}
              className="h-[90%] bg-[#915eff54] border-2 border-primary rounded-xl"
            >
              <img src={certi.img} className="h-full p-6" />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "Certi");
