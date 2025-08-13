import React, { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [frontendVisibleWords, setFrontendVisibleWords] = useState(0);
  const [showFrontendHeading, setShowFrontendHeading] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [backendVisibleWords, setBackendVisibleWords] = useState(0);
  const [showBackendHeading, setShowBackendHeading] = useState(false);

  const frontend =
    " I work with React.js, Tailwind CSS, JavaScript and Framer Motion to build responsive and interactive user interfaces. I ensure that users can interact with websites and applications effortlessly while enjoying a visually pleasing experience.";

  const backend =
    " I primarily use Ruby on Rails to build scalable and secure APIs, with additional knowledge of Node.js and Express.js. I have worked with databases like MongoDB and PostgreSQL for data management. I am comfortable integrating authentication, handling RESTful APIs, and using tools like Git, GitHub and Postman for efficient development workflows.";

  const frontendWords = frontend.split(" ");
  const backendWords = backend.split(" ");

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setShowFrontendHeading(false);
      setShowFrontend(false);
      setFrontendVisibleWords(0);

      setShowBackendHeading(false);
      setShowBackend(false);
      setBackendVisibleWords(0);

      setTimeout(() => setShowFrontendHeading(true), 500);
      setTimeout(() => setShowBackendHeading(true), 2000);
    }
  }, [inView]);

  useEffect(() => {
    if (showFrontend && frontendVisibleWords < frontendWords.length) {
      const timeout = setTimeout(() => {
        setFrontendVisibleWords(frontendVisibleWords + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [frontendVisibleWords, frontendWords.length, showFrontend]);

  useEffect(() => {
    if (showBackend && backendVisibleWords < backendWords.length) {
      const timeout = setTimeout(() => {
        setBackendVisibleWords(backendVisibleWords + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [backendVisibleWords, backendWords.length, showBackend]);

  return (
    <div
      ref={ref}
      name="About Me"
      className=" text-white md:mx-8 lg:mx-20 rounded-2xl p-3 mb-10 mx-4 mt-3"
    >
      <h2 className="text-2xl md:text-4xl text-center font-bold">About Me</h2>

      <div className="flex flex-col lg:flex-row mt-8 lg:justify-evenly">
        <div className="w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center px-4">
          <motion.p
            className="text-white text-xl space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <p>
              Hello, I am Neha Sawant, a passionate web developer from Buldhana,
              Maharashtra. I love transforming ideas into scalable and elegant
              solutions. I am always eager to learn, build and be part of
              innovative teams that push boundaries.
            </p>
          </motion.p>

          {showFrontendHeading && (
            <motion.div
              className="flex text-lg md:text-2xl sm:text-start text-green-500 pt-3 tracking-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              onAnimationComplete={() => setShowFrontend(true)}
            >
              <IoArrowForward className="mt-1 mr-2" /> Frontend
            </motion.div>
          )}

          {showFrontend && (
            <p className="text-lg md:text-xl pt-3 pb-6 min-h-[3.5rem]">
              {frontendWords.slice(0, frontendVisibleWords).join(" ")}
              {frontendVisibleWords < frontendWords.length && (
                <span className="animate-pulse"></span>
              )}
            </p>
          )}

          {showBackendHeading && (
            <motion.div
              className="flex text-lg md:text-2xl text-green-500 pt-3 tracking-tight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 5 }}
              onAnimationComplete={() => setShowBackend(true)}
            >
              <IoArrowForward className="mt-1 mr-2" /> Backend
            </motion.div>
          )}

          {showBackend && (
            <p className="text-lg md:text-xl pt-3 pb-6 min-h-[3.5rem]">
              {backendWords.slice(0, backendVisibleWords).join(" ")}
              {backendVisibleWords < backendWords.length && (
                <span className="animate-pulse"></span>
              )}
            </p>
          )}

          <div className=""></div>
        </div>

        <div className="w-full md:w-4/5 lg:w-2/5 md:ml-16 mt-2 sm:mt-7">
          <motion.div
            className="border border-purple-500 p-5 pl-10 rounded-xl shadow-md hover:scale-105 hover:shadow-emerald-500"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <h1 className="text-green-600 text-3xl mb-10 font-semibold text-center">
              Education
            </h1>
            <h1 className="text-purple-500 border border-purple-300 rounded-3xl w-48 p-1 text-sm bg-fuchsia-900 bg-opacity-30">
              🎓 Bachelors of Technology
            </h1>
            <div className="md:pl-7 md:pr-10 mt-2">
              <h1 className="font-semibold text-lg">
                BTech, Electronics and Communication
              </h1>
              <p className="text-cyan-400">
                Indian Institute of Information Technology, Nagpur
              </p>
              <h1 className="text-gray-300">2021-2025</h1>
            </div>

            <h1 className="text-purple-500 border border-purple-300 rounded-3xl w-48 p-1 text-sm bg-fuchsia-900 bg-opacity-30 mt-8">
              🎓 Higher Secondary
            </h1>
            <div className="md:pl-7 md:pr-10 mt-2">
              <h1 className="font-semibold text-lg">Science Stream</h1>
              <p className="text-cyan-400">
                Shree Shivaji Maharaj Kanishth Mahavidyalaya, Barad
              </p>
              <h1 className="text-gray-300">2020-2021</h1>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row mt-3 md:mt-6 gap-5">
            <motion.div
              className="border border-purple-500 pt-3 p-3 rounded-xl shadow-md hover:scale-105 hover:shadow-emerald-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              <p className="text-2xl text-center text-green-500">10+</p>
              <p className="text-center mt-2">Projects completed</p>
            </motion.div>

            <motion.div
              className="border border-purple-500 pt-3 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-emerald-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 4 }}
            >
              <p className="text-2xl text-center text-green-500">300+</p>
              <p className="text-center mt-2">Problems solved</p>
            </motion.div>

            <motion.div
              className="border border-purple-500 pt-3 p-4 rounded-xl shadow-md hover:scale-105 hover:shadow-emerald-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 5 }}
            >
              <p className="text-2xl text-center text-green-500">3+</p>
              <p className="text-center mt-2">Languages known</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
