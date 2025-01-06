import React, { useState } from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const images = [img1, img2, img3 , img4, img5, img6, img7, img8, img9, img10];
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
      className="max-w-6xl mt-8 mx-auto text-center py-8 px-2"
      id="gallery"
      data-aos="fade-up"
    >
      <header className="text-4xl text-white font-semibold mb-6">GALLERY</header>
      <div className="bg-red-300 relative inline-block rounded-xl overflow-hidden">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition"
          onClick={prevImage}
        >
          <FaArrowLeft />
        </button>
        <div className="flex justify-center items-center w-full">
          <img
            className="w-[600px] h-[400px] max-h-[500px] md:w-[800px] object-cover"
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
