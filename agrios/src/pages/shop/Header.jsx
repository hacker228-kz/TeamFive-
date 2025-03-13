import React from 'react'
import logo from '../../assets/images/logo.png'
import twitter from '../../assets/icon/twitter.svg'
import facebook from '../../assets/icon/facebook.svg' 
import pinterest from '../../assets/icon/pinterest.svg'
import instagram from '../../assets/icon/instagram.svg'

const Header = () => {
    return (
        <div>
            <div className="w-full flex h-1 px-[10px]">
            <div className="bg-[rgba(75,175,71,1)] w-1/3" />
            <div className="bg-[rgba(197,206,56,1)] w-1/3" />
            <div className="bg-[rgba(238,192,68,1)] w-1/3" />
            </div>

        <header className="flex w-[1200px] max-w-full mx-auto items-center gap-5 justify-between mt-[36px] ">
          <img
            src={logo}
            alt="Logo"
            className="aspect-[3.27] object-contain w-[170px] self-stretch shrink-0 max-w-full my-auto"
          />
          
            <div className="flex items-center gap-4">

            <a
                href="#"
                className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
            >
                <img src={twitter} alt="twitter" width={14} height={13} />
            </a>

            <a
                href="#"
                className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
            >
                <img src={facebook} alt="facebook" width={14} height={13} />
            </a>

            <a
                href="#"
                className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
            >
                <img src={pinterest} alt="pinterest" width={14} height={13} />
            </a>

            <a
                href="#"
                className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
            >
                <img src={instagram} alt="instagram" width={14} height={13} />
            </a>
            </div>

          <div className="self-stretch flex items-stretch gap-[21px] flex-wrap max-md:max-w-full">
            <div className="flex flex-col items-stretch my-auto">
              <div className="text-[rgba(135,134,128,1)] text-xs font-semibold leading-loose">
                Call anytime
              </div>
              <div className="text-[rgba(31,30,23,1)] text-sm font-bold leading-none mt-1">
                + 98 (000) - 9630
              </div>
            </div>
            <div className="flex items-stretch grow shrink basis-auto max-md:max-w-full">
              <div className="flex flex-col my-auto pl-[47px] pr-[22px] py-[19px] border-[rgba(228,226,215,1)] border-l max-md:px-5">
                <div className="text-[rgba(135,134,128,1)] text-xs font-semibold leading-loose self-center">
                  Send email
                </div>
                <div className="text-[rgba(31,30,23,1)] text-sm font-bold leading-none mt-[9px]">
                  ambed@agrios.com
                </div>
              </div>
              <div className="flex flex-col pl-[43px] pr-0.5 py-[22px] border-[rgba(228,226,215,1)] border-l max-md:pl-5">
                <div className="text-[rgba(135,134,128,1)] text-xs font-semibold leading-loose self-center ml-4">
                  380 St Kilda Road
                </div>
                <div className="text-[rgba(31,30,23,1)] text-sm font-bold leading-none mt-[9px]">
                  Melbourne, Australia
                </div>
              </div>
            </div>
          </div>
        </header>
        </div>
      );
    };

export default Header
