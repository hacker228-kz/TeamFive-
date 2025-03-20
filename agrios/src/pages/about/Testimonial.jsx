import React from "react";
import Section from "../../assets/images/Section.svg";
import avatarM from "../../assets/images/avatarM.svg";
import avatarW from "../../assets/images/avatarW.svg";

function Testimonial() {
  return (
    <div className="w-full relative mt-[-68px]">
      <img src={Section} alt="Section" className="w-full h-[661.6px]" />

      <h4 className="absolute top-[130px] ml-[770px] transform -translate-x-1/2 text-[#EEC044] text-center font-first text-[24px]">
        Our Testimonials
      </h4>
      <h2 className="absolute top-[150px] ml-[770px] transform -translate-x-1/2 text-[#1F1E17] text-center font-manrope text-[48px] font-extrabold">
        What They Say
      </h2>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-[500px] h-[240px] bg-white rounded-[10px] p-4 shadow-lg mt-[-410px] ml-[-300px]">
        <img
          src={avatarM}
          alt="AvatarM"
          className="w-[140px] h-[160px] rounded-[10px] mt-[20px] ml-[-80px]"
        />
        <p className="w-[324px] h-[120px] text-[17.5px] text-[#878680] font-manrope font-regular leading-[36px] mt-[-180px] ml-[100px]">
          There are many variations of passage of available but the majority
          have suffered alteration in some form by injected humor or randomed.
        </p>

        <h4 className="w-[135.7px] h-[26px] text-[#1F1E17] text-[18px] font-manrope font-extrabold ml-[300px] mt-[20px]">
          Bonnie Tolbet
        </h4>
        <h5 className="w-[75.1px] h-[26px] text-[#878680] text-[16px] font-manrope font-medium ml-[350px]">
          Customer
        </h5>

        <div className="absolute top-[100px] left-[25px] w-[50px] h-[50px] rounded-full bg-[#4BAF47] flex justify-end items-center p-[33px_8.544px_16px_16px] ml-[20px]"></div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-[500px] h-[240px] bg-white rounded-[10px] p-4 shadow-lg mt-[-410px] ml-[350px]">
        <img
          src={avatarW}
          alt="AvatarW"
          className="w-[140px] h-[160px] rounded-[10px] mt-[20px] ml-[-80px]"
        />
        <p className="w-[324px] h-[120px] text-[17.5px] text-[#878680] font-manrope font-regular leading-[36px] mt-[-180px] ml-[100px]">
          There are many variations of passage of available but the majority
          have suffered alteration in some form by injected humor or randomed.
        </p>

        <h4 className="w-[135.7px] h-[26px] text-[#1F1E17] text-[18px] font-manrope font-extrabold ml-[300px] mt-[20px]">
          Sarah Albert
        </h4>
        <h5 className="w-[75.1px] h-[26px] text-[#878680] text-[16px] font-manrope font-medium ml-[350px]">
          Customer
        </h5>

        <div className="absolute top-[100px] left-[25px] w-[50px] h-[50px] rounded-full bg-[#4BAF47] flex justify-end items-center p-[33px_8.544px_16px_16px] ml-[20px]"></div>
      </div>
    </div>
  );
}

export default Testimonial;