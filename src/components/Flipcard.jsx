import React, { useState } from "react";
import "./styles.css"; // Add your custom styles here

const FlipCard = ({EventName , des}) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); // Toggle flip state
  };

  return (
    <div className="flex justify-center">
      <div className="group perspective-1000 md:w-[60vh] md:h-[60vh] w-[30vh] h-[30vh]">
        <div
          className={`flip-card-inner transition-transform duration-700 relative w-full h-full ${flipped ? "rotate-y-180" : ""}`}
          onClick={handleClick}
        >
          {/* Front */}
          <div className="flip-card-front absolute w-full h-full bg-gray-500 text-white flex justify-center items-center rounded-2xl">
            <div className="text-center">
              <h2 className="text-2xl font-bold">{EventName}</h2>
              <p className="mt-2">This is the front of the card.</p>
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-back absolute w-full h-full bg-blue-500 text-white flex justify-center items-center rounded-2xl transform rotate-y-180">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Back Side Title</h2>
              <p className="mt-2">Here you can add more information or actions.</p>
              <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full">Click Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
