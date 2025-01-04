import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-2 p-5 ">
      <img
        src="https://i.pinimg.com/236x/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.jpg"
        alt=""
        className="w-24"
      />
      <div className="flex flex-col gap-1 text-white text-sm sm:text-base">
        <span>Copyright ©2025. All rights reserved by</span>
        <span> ACSES || CWC </span>
      </div>
    </footer>
  );
};

export default Footer;
