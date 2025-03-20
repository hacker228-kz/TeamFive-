import React from "react";
import Icon from "../../assets/images/Icon.svg";
import fon from "../../assets/images/fon.svg";
import track from "../../assets/images/track.svg";
import women from "../../assets/images/women.svg"

const Agriculture = () => {
  return (
    <div className="w-[1520px] h-[603.2px] flex justify-center items-start mt-[50px] ml-[-40px]">
      <div className="w-[600px] h-[603.2] relative">
        <img
          src={fon}
          alt="Fon"
          className="ml-[200px] mt-[300px] absolute top-[-70px] left-[-20px] z-[-10]"
        />
        <img src={track} alt="Track" className="ml-[250px] mt-[30px] " />
        <img src={women} alt="Women" className="ml-[120px] mt-[-322px] z-20" />
      </div>

      <div className="flex flex-col justify-center items-start px-4 w-[600px] h-[603.2px] flex-shrink-0 ml-[170px]">
        <h5 className="w-[570px] h-[15px] flex flex-col justify-center flex-shrink-0 text-[#EEC044] font-first text-[20px] font-normal leading-9">
          Get to Know Us
        </h5>
        <h2 className="w-[570px] h-[130px] flex flex-col justify-center flex-shrink-0 text-[#1F1E17] font-manrope text-[45px] font-extrabold leading-[57.6px]">
          The Best Agriculture Market
        </h2>
        <h3 className="w-[570px] h-[60px] flex items-center shrink-0 pr-[18.8px] pb-[30.5px] flex-col justify-center text-[#4BAF47] font-manrope text-[18px] font-bold leading-[30px] mt-[15px]">
          There are many variations of passa of lorem available, but the
          majority have suffered alteration.
        </h3>
        <h4 className="w-[570px] h-[80px] flex items-center flex-shrink-0 pr-[43.38px] pb-[38px] flex-col justify-center text-[#878680] font-manrope text-[15px] font-medium leading-[30px] mt-[25px]">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </h4>
        <div className="w-[570px] h-[100px] mt-[5px]">
          <img src={Icon} alt="Icon" className="w-[16px] h-[16px]" />
          <h3 className="w-[350px] h-[26px] flex flex-col justify-center flex-shrink-0 text-[#1F1E17] font-manrope text-[16px] font-bold leading-[36px] ml-[25px] mt-[-20px] whitespace-nowrap">
            Suspe ndisse suscipit sagittis leo
          </h3>
          <img src={Icon} alt="Icon" className="w-[16px] h-[16px] mt-[10px]" />
          <h3 className="w-[350px] h-[36px] flex flex-col justify-center flex-shrink-0 text-[#1F1E17] font-manrope text-[16px] font-bold leading-[36px] ml-[25px] mt-[-25px] whitespace-nowrap">
            Entum estibulum disgnissim posuere
          </h3>
          <img src={Icon} alt="Icon" className="w-[16px] h-[16px] mt-[5px]" />
          <h3 className="w-[350px] h-[36px] flex flex-col justify-center flex-shrink-0 text-[#1F1E17] font-manrope text-[16px] font-bold leading-[36px] ml-[25px] mt-[-25px] whitespace-nowrap">
            Lorem Ipsum on the tend to repeat
          </h3>
        </div>
        <div className="cursor-pointer w-[196.3px] h-[60px] flex justify-center items-center flex-shrink-0 px-[49.651px] py-[15px] rounded-[10px] bg-[#4BAF47] mt-[10px]">
          <span className="flex flex-col justify-center flex-shrink-0 w-[96.7px] h-[30px] text-white font-manrope text-[14px] font-bold leading-[30px]">
            Discover More
          </span>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;