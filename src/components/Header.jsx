import React from 'react';

function Header() {
  return (
    <div className="">
      <div className="flex items-center md:flex-row flex-col justify-between p-6">
        <img className="h-20 md:h-24" src="/3.png" alt="Logo 1" />
        <img className="h-20 md:h-20" src="/4.png" alt="Logo 2" />
      </div>
      <h1 className="text-white font-bold font-rubikVinyl text-center md:text-7xl text-5xl md:-mt-10 pt-10">
        CPP BOOTCAMP
      </h1>
    </div>
  );
}

export default Header;
