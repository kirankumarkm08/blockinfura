import React from "react";
import { FeaturesGrid } from "./../constants";
import { FeaturesType } from "@/types";
import HeroAnimationData from "./animation/Animation";

const Features = () => {
  return (
    <div className="dark:bg-black  ">
      <div className="max-w-[1440px] mx-auto min-h-screen py-10 px-20  ">
        <h1 className="text-4xl font-bold text-light-black-90 dark:text-light-white-90 mb-10 text-center font-boldonse py-20">
          Features of Blockinfura
        </h1>
        <div className="grid md:grid-cols-3 gap-10 justify-center items-center ">
          {FeaturesGrid.map((feature: FeaturesType) => (
            <div
              className="relative p-6 bg-white dark:bg-black border-gray-50 rounded-xl border shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group h-fit"
              key={feature.title}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-52 h-52 mb-4">
                  <HeroAnimationData animation={feature.animation} />
                </div>

                <div className="text-center text-light-black-80 dark:text-light-white-80">
                  <h3 className="text-xl  mb-2 group-hover:text-[#E99710] text-dark950_light-950    transition-colors font-boldonse font-light">
                    {feature.title}
                  </h3>
                  <p className=" group-hover:text-gray-900 transition-colors font-mono text-light950_dark-950 ">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
