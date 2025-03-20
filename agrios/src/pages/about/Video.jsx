import React from "react";
import video from "../../assets/images/video.svg";
import vegetables from "../../assets/images/vegetables.svg";
import pusk from "../../assets/images/pusk.svg";

const Video = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <img
          src={video}
          alt="Video"
          className="w-[1920px] h-[616px] mt-[50px]"
        />

        <div className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[-70px]">
          <div className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center ml-[50px]">
            <img src={pusk} alt="Pusk" className="ml-[15px]" />
          </div>
        </div>

        <h2 className="absolute bottom-[140px] left-1/2 transform -translate-x-1/2 text-white text-center font-manrope text-[60px] font-bold leading-[72px] tracking-[-4px] w-[698.8px] ml-[40px]">
          ECO-Friendly Products can be Made from Scratch
        </h2>
      </div>

      <div className="w-[1520px] h-[184px] bg-[#1F1E17] mt-[-63px] relative overflow-visible">
        <img
          src={vegetables}
          alt="Vegetables"
          className="w-[449px] h-[314px] opacity-10 absolute top-[-50px] left-0"
        />

        <div className="w-[1200px] h-[37px] ml-[300px] absolute top-[70px]">
          <ul className="flex gap-25">
            <li>
              <a
                href="#"
                className="w-[175.7px] h-[30px] flex flex-col justify-center flex-shrink-0 text-[#A5A49A] text-center font-manrope text-[18px] font-medium leading-[30px]"
              >
                Agriculture Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[168.5px] h-[30px] flex flex-col justify-center flex-shrink-0 text-[#A5A49A] text-center font-manrope text-[18px] font-medium leading-[30px]"
              >
                Projects Completed
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[139.7px] h-[30px] flex flex-col justify-center flex-shrink-0 text-[#A5A49A] text-center font-manrope text-[18px] font-medium leading-[30px]"
              >
                Satisfied Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[136.7px] h-[30px] flex flex-col justify-center flex-shrink-0 text-[#A5A49A] text-center font-manrope text-[18px] font-medium leading-[30px]"
              >
                Experts Farmers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Video;