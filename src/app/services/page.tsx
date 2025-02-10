"use client";
import React from "react";

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export default function page() {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 ">
              Voluptate non tempor exercitation sunt commodo dolor anim
              reprehenderit dolor do occaecat excepteur minim. Ad pariatur
              mollit quis elit. Pariatur elit id laborum ullamco voluptate
              reprehenderit quis et veniam Lorem velit. Laboris officia mollit
              do nisi commodo ullamco adipisicing.
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            {/* slider */}
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}
