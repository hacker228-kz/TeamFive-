import React from "react";
import team1 from "../../assets/images/team1.svg";
import span from "../../assets/images/span.svg";
import team2 from "../../assets/images/team2.svg";
import team3 from "../../assets/images/team3.svg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <h4 className="w-[180px] h-[36px] justify-center flex-shrink-0 text-[#EEC044] text-center font-first text-[24px] leading-[36px] mt-[43px] ml-[690px]">
        Team Members
      </h4>
      <h3 className="w-[417.2px] h-[57.6px] text-[#1F1E17] text-center font-manrope text-[48px] font-extrabold leading-[57.6px] ml-[570px] ">
        Meet Our Farmers
      </h3>

      <div className="w-[1170px] h-[450px] flex justify-center items-center text-[#1F1E17] text-center font-manrope text-[48px] font-extrabold leading-[57.6px]  relative ml-[-210px]">
        <div className="relative">
          <img
            src={team1}
            alt="Team1"
            className="w-[370px] h-[440px] flex justify-center items-end bg-cover bg-center"
          />

          <div className="absolute bottom-0 left-0 w-[245px] h-[92px] rounded-l-[10px] border border-[rgba(0,0,0,0.06)] bg-white shadow-[(-5px_0px_10px_0px_rgba(0,0,0,0.1))] ml-[125px]">
            <img src={span} alt="Span" className="mt-[20px] ml-[-25px]" />
            <div>
              <h4 className="w-[117.9px] h-[26px] text-[#1F1E17] text-[15px] font-manrope font-extrabold mt-[-68px] ml-[70px]">
                Kevin Smith
              </h4>
              <p className="w-[52.4px] h-[20px] text-[#878680] text-[16px] font-manrope font-medium ml-[135px]">
                Farmer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1170px] h-[450px] flex justify-center items-center text-[#1F1E17] text-center font-manrope text-[48px] font-extrabold leading-[57.6px] mt-[-450px] relative ml-[190px]">
        <div className="relative">
          <img
            src={team2}
            alt="Team2"
            className="w-[370px] h-[440px] flex justify-center items-end bg-cover bg-center"
          />

          <div className="absolute bottom-0 left-0 w-[245px] h-[92px] rounded-l-[10px] border border-[rgba(0,0,0,0.06)] bg-white shadow-[(-5px_0px_10px_0px_rgba(0,0,0,0.1))] ml-[125px]">
            <img src={span} alt="Span" className="mt-[20px] ml-[-25px]" />
            <div>
              <h4 className="w-[139.3px] h-[26px] text-[#1F1E17] text-[15px] font-manrope font-extrabold mt-[-68px] ml-[70px]">
                Jessica Brown
              </h4>
              <p className="w-[52.4px] h-[20px] text-[#878680] text-[16px] font-manrope font-medium ml-[155px]">
                Farmer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1170px] h-[450px] flex justify-center items-center text-[#1F1E17] text-center font-manrope text-[48px] font-extrabold leading-[57.6px] mt-[-450px] relative ml-[590px]">
        <div className="relative">
          <img
            src={team3}
            alt="Team3"
            className="w-[370px] h-[440px] flex justify-center items-end bg-cover bg-center"
          />

          <div className="absolute bottom-0 left-0 w-[245px] h-[92px] rounded-l-[10px] border border-[rgba(0,0,0,0.06)] bg-white shadow-[(-5px_0px_10px_0px_rgba(0,0,0,0.1))] ml-[125px]">
            <img src={span} alt="Span" className="mt-[20px] ml-[-25px]" />
            <div>
              <h4 className="w-[123.9px] h-[26px] text-[#1F1E17] text-[15px] font-manrope font-extrabold mt-[-68px] ml-[70px]">
                David Martin
              </h4>
              <p className="w-[52.4px] h-[20px] text-[#878680] text-[16px] font-manrope font-medium ml-[140px]">
                Farmer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;