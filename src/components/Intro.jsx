import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Welcome from "./Welcome";
import { Config } from "../Config";

const visible = { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10, x: -75 },
  visible,
};
const linkLight = (
  <svg 
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg" 
    stroke="#000000">
      <g 
        id="SVGRepo_bgCarrier"
        stroke-width="0"
      />
      <g 
        id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier"> 
        <path 
          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
          stroke="#082f49"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
          stroke="#082f49"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </svg>
);

const linkDark = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#d6d3d1" stroke-width="1.5" stroke-linecap="round" /> 
        <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#d6d3d1" stroke-width="1.5" stroke-linecap="round" />
      </g>
    </svg>
)

function Intro({ theme }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const downloadResume = () => {
    // Generate a data: URI with the MIME type text/csv.
    const uri = Config.resume;
    const pom = document.createElement('a');
    pom.href = uri;
    pom.setAttribute('download', 'HARIHARAN_K CV');
    pom.setAttribute('target', 'new');
    document.body.appendChild(pom);
    pom.click();
    pom.remove();
  }

  const bgColor = theme === "dark" ? "#d6d3d1" : "#082f49";
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          width: "100vw",
          height: "20px",
          background: bgColor,
          bottom: 0,
          left: 0,
          position: "fixed",
          zIndex: 100,
        }}
      />
      <Welcome />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        whileHover={{ scale: 1.1 }}
      >
        <img
          src="/assets/hari.jpg"
          className="rounded-full w-40 h-40 object-cover"
          height="160px"
          width="160px"
        />
      </motion.div>
      <motion.div
        className="text-base mb-3 font-medium pt-2 md:text-2xl flex"
        initial={{ opacity: 0, y: 0, x: -500 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        {Config.role}
      </motion.div>
      {Config.resume ? (
          <motion.p className="flex cursor-pointer" onClick={downloadResume}>
            <span className="w-5">{theme === "light" ? linkLight : linkDark}</span>
            <span className="ml-2">{'Professional Showcase'}</span>
          </motion.p>
        ) : null}
      <motion.p
        className="text-sm max-w-xl mb-6 text-justify rounded-lg p-4"
        initial={{
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
          borderColor: "transparent",
        }}
        animate={{
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
          borderColor: "#ccc",
        }}
        transition={{ duration: 0.5 }}
      >
        {Config.desc}
      </motion.p>
    </div>
  );
}

export default Intro;
