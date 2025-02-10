"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectsBtn from "../components/ProjectsBtn";
import { fadeIn, fadeUp } from "./variants";
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
// import { fadeUp } from "./effects";
// import "./globals.css";
export default function page() {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary via-black/30 to-black ">
        <div className="text-center flex flex-col justify-center pt-56 xl:text-left h-full container mx-auto z-50">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Inro
            <span className="text-accent"> Digital </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Ut tempor mollit sunt ullamco. Ea nisi excepteur proident occaecat
            veniam. Do incididunt aute pariatur velit proident eiusmod qui minim
            ut. Laboris reprehenderit ea qui eiusmod nulla nisi consequat anim
            sit id. Aliqua enim consequat dolore consectetur ipsum deserunt non
            ex aute irure.
          </motion.p>
          {/* btn */}
          {/* <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div> */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bt img */}
          <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
          {/* particles */}
          {<ParticlesContainer />}

          {/* Avatar */}
          <motion.div
            variants={fadeIn("up", 1)} // Example with direction "up" and delay 0.5
            initial="hidden"
            animate={{
              y: [0, 80], // Moving up and down
              opacity: 1, // Keep opacity to 1
              x: 0,
              transition: {
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity, // Loop the animation
                repeatType: "reverse", // This makes the animation go back and forth
              },
            }}
            whileInView="animate"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
