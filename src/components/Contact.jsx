import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { githubb, linkedin, behance } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Punit Shinde",
          from_email: form.email,
          to_email: "punitshinde1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden -z-50`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.65] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12  flex flex-col gap-8 "
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
      <div className="flex justify-between md:ml-10">
        <img
          src={linkedin}
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/punit-shinde/")
          }
          className={`${styles.contactLinkActive}`}
        />
        <img
          src={githubb}
          onClick={() =>
            (window.location.href = "https://github.com/Punit-Shinde")
          }
          className={`${styles.contactLinkActive}`}
        />
        <img
          src={behance}
          onClick={() =>
            (window.location.href = "https://www.behance.net/punitshinde")
          }
          className={`${styles.contactLinkInactive}`}
        />
      </div>

      <div
        className={`hidden lg:block absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 -z-10`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] md:ml-[70%] md:mt-[15%]"
        >
          <h1 className={`${styles.footerSubText} text-white-100`}>
            I'm actively seeking{" "}
            <span className="text-[#915EFF]">opportunities</span> to apply my
            skills and expertise.
          </h1>
          <p className={`mt-2 text-white-100 md:ml-10`}>
            Feel free to reach out via the{" "}
            <span className="text-[#915EFF]">contact form</span> or{" "}
            <span className="text-[#915EFF]">connect</span> with me on{" "}
            <span className="text-[#915EFF]">LinkedIn</span>,
            <br className="sm:block hidden" />
            or check out my <span className="text-[#915EFF]">github</span>{" "}
            profile via the button below!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
