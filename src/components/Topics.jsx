import React from "react";
import CircleComponent from "./CircleComponent";

const Topics = () => {
  return (
    <div className="mx-auto max-w-7xl h-auto lg:h-[70vh] flex flex-col lg:flex-row items-center justify-center px-4 py-8 md:mt-20">
      <div className="flex flex-col w-full lg:w-1/3 text-white">
      <h1 className="text-3xl font-bold">Heading</h1>
      <p className="text-xl mt-4 font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nam
        saepe modi sint dolorem, magni ut. Ullam inventore sed accusantium nulla
        maxime, ipsam saepe facere quia! Repudiandae culpa assumenda eligendi!
      </p>
      </div>

      <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
        <CircleComponent />
      </div>
    </div>
  );
};

export default Topics;
