import React from "react";
import { collabApps } from "../constants";

const CircleComponent = () => {
  return (
    <div className="w-full flex justify-center mt-8 sm:mt-0">
      <div className="relative flex w-[18rem] md:w-[28rem] lg:w-[32rem] aspect-square border-4 border-white rounded-full shadow-xl shadow-indigo-500/50">
        {/* Inner rotating circle with brainwave icon */}
        <div className="flex w-[12rem] md:w-[18rem] aspect-square m-auto border-4 border-white rounded-full">
          <div className="w-[6rem] md:w-[9rem] aspect-square m-auto p-[0.5rem] bg-gradient-to-tr from-purple-400 to-blue-500 rounded-full shadow-lg shadow-purple-400/50">
            <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full">
              <img
                src="https://i.pinimg.com/236x/c5/bd/6c/c5bd6c8871de81a6fec171843c177f1e.jpg"
                width={50}
                height={50}
                alt="brainwave"
              />
            </div>
          </div>
        </div>

        {/* Rotating apps around the central icon */}
        <ul className="absolute inset-0 animate-spin-slow">
          {collabApps.map((app, index) => (
            <li
              key={app.id}
              style={{
                transform: `rotate(${index * (360 / collabApps.length)}deg)`,
              }}
              className="absolute top-0 left-1/2 h-1/2 -ml-[2rem] md:-ml-[2.5rem] lg:-ml-[3rem] origin-bottom"
            >
              <div className="relative -top-[3rem] md:-top-[4rem] flex w-[4.5rem] md:w-[6rem] h-[4.5rem] md:h-[6rem] bg-gradient-to-r from-gray-200 to-gray-300 border-4 border-white rounded-xl shadow-lg animate-spin-reverse">
                <img
                  className="m-auto"
                  width={app.width + 15}
                  height={app.height + 15}
                  alt={app.title}
                  src={app.icon}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CircleComponent;
