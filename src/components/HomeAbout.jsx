import React from "react";
import wheat from "../assets/wheat.svg";

const HomeAbout = () => {
  return (
    <div className="w-full">
      <img src={wheat} alt="Wheat" className="w-full" />

      <div className="max-w-[1170px] mx-auto flex flex-col justify-center items-center mt-[-200px] ml-[190px]">
        <h3 className="text-white/70 font-manrope text-[14px] font-semibold leading-[26.25px] tracking-[1.4px] uppercase">
          Home / About
        </h3>

        <h1 className="text-white font-manrope text-[50px] font-extrabold leading-[60px] mt-2">
          About
        </h1>
      </div>
    </div>
  );
};

export default HomeAbout;
