import React, { useState } from "react";
import session1 from "./images/session1.png";
import session2 from "./images/session2.png";
import session3 from "./images/session3.png";
import session4 from "./images/session4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Gallery = () => {
  const images = [session1, session2, session3, session4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };


return (
    <div
        className="max-w-6xl mx-auto text-center py-8"
        id="gallery"
        data-aos="fade-up"
    >
        <header className="text-3xl font-semibold mb-6">GALLERY</header>
        <div className="relative inline-block rounded-xl overflow-hidden">
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
                onClick={prevImage}
            >
                <FaArrowLeft />
            </button>
            <div className="flex justify-center items-center w-full">
                <img
                    className="max-w-full h-auto max-h-[500px] object-cover"
                    src={images[currentIndex]}
                    alt={`session-${currentIndex + 1}`}
                />
            </div>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
                onClick={nextImage}
            >
                <FaArrowRight />
            </button>
        </div>
    </div>
);
};

export default Gallery;
