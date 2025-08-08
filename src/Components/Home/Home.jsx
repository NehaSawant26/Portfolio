import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import photo from "../../assets/Image.jpeg";
import { motion } from "framer-motion";
import video from "../../assets/Home.mp4";

const Home = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const paragraph =
    "Looking for a beginner role to enhance and explore my technical knowledge. I am seeking a role where I can apply my skills and contribute to the development of innovative software solutions.";

  const words = paragraph.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraph(true), 2500);
    const ButtonTimer = setTimeout(() => setShowButton(true), timer + 7000);
    return () => clearTimeout(timer, ButtonTimer);
  }, []);

  useEffect(() => {
    if (showParagraph && visibleWords < words.length) {
      const timeout = setTimeout(() => {
        setVisibleWords(visibleWords + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, words.length, showParagraph]);

  return (
    <div
      name="Home"
      className="relative flex text-white justify-center mx-auto min-h-screen max-w-screen-2xl"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-15"
      >
        <source src={video} type="Video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col md:flex-row  items-center justify-center w-full">
        <div className="md:w-1/2 md:p-20 p-12 order-2 md:order-1">
          <motion.div
            className="text-white text-xl space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <h2 className="text-xl md:text-4xl ">Hello, I am</h2>
            <h1 className="text-xl md:text-5xl font-bold text-green-500">
              Neha Sawant
            </h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-4xl pt-3 tracking-tight text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            A Full Stack Web Developer
          </motion.p>

          {showParagraph && (
            <p className="text-lg md:text-xl pt-3 pb-6 min-h-[3.5rem]">
              {words.slice(0, visibleWords).join(" ")}
              {visibleWords < words.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          )}
          {showButton && (
            <div className="">
              <a
                href="https://drive.google.com/file/d/1-EOg9nLAzPFjJl9Wqm2rz8337NG42H0Z/view?usp=sharing"
                className="md:md-10 text-white px-3 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-70 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r
              from-green-400 to-blue-500"
              >
                Review Resume
              </a>
              <Link
                to="Contact Me"
                className="md:md-10 text-white mx-10 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-70 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r
              from-green-400 to-blue-500"
              >
                Hire me
              </Link>
            </div>
          )}
        </div>
        <div className="relative md:w-1/2 md:ml-40 md:mt-16 order-1">
          <img
            className="rounded-full md:h-[350px] md:w-[350px] shadow-2xl shadow-blue-300"
            src={photo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
