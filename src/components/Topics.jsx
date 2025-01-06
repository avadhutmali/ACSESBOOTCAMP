import React from "react";
import CircleComponent from "./CircleComponent";

const Topics = () => {
  return (
    <div className="mx-auto max-w-7xl h-auto lg:h-[70vh] flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:mt-20">
      
      <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
        <CircleComponent />
      </div>
    </div>
  );
};

export default Topics;
