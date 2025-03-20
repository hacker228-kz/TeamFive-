import React from "react";
import logo from '../../assets/images/logo.png'
import arrow from '../../assets/icon/arrow.svg'
import wtwitter from '../../assets/icon/wtwitter.svg'
import wfacebook from '../../assets/icon/wfacebook.svg' 
import wpinterest from '../../assets/icon/wpinterest.svg'
import winstagram from '../../assets/icon/winstagram.svg'
import phone from '../../assets/icon/phone.svg'
import email from '../../assets/icon/email.svg'
import location from '../../assets/icon/location.svg' 
import bsubmit from '../../assets/images/bsubmit.png'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[rgba(36,35,29,1)] self-stretch flex w-full flex-col overflow-hidden items-center text-[rgba(165,164,154,1)] font-medium justify-center mt-[122px] px-[70px] py-[122px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
        <div className="flex mb-[-25px] w-[1170px] max-w-full gap-10 justify-between max-md:mb-2.5">
          <div className="text-[15px] leading-[30px] flex-1">
            <img
              src={logo}
              alt="Footer Logo"
              className="aspect-[3.33] object-contain w-[170px] max-w-full"
            />
            <p className="mt-[31px] max-md:mr-0.5">
              There are many variations of passages
              <br />
              of lorem ipsum available, but the
              <br />
              majority suffered.
            </p>
            <div className="flex items-center gap-4 py-[20px]">
            
                        <a
                            href="#"
                            className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#1F1E17]"
                        >
                            <img src={wtwitter} alt="twitter" width={14} height={13} />
                        </a>
            
                        <a
                            href="#"
                            className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#1F1E17]"
                        >
                            <img src={wfacebook} alt="facebook" width={14} height={13} />
                        </a>
            
                        <a
                            href="#"
                            className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#1F1E17]"
                        >
                            <img src={wpinterest} alt="pinterest" width={14} height={13} />
                        </a>
            
                        <a
                            href="#"
                            className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#1F1E17]"
                        >
                            <img src={winstagram} alt="instagram" width={14} height={13} />
                        </a>
                        </div>
          </div>

          <div className="flex flex-col text-[15px] leading-loose mt-[11px] flex-1">
            <h3 className="text-white text-xl font-bold leading-[1.8]">
              Explore
            </h3>
            <div className="flex w-[55px] shrink-0 h-1 mt-[15px] rounded-sm border-t-4 border-[rgba(75,175,71,1)]" />
            <div className="w-[7px] h-[7px] bg-[rgba(75,175,71,1)] rounded-full ml-[65px] -mt-[5px]" />
            <nav className="mt-7">
              {[
                "About",
                "Services",
                "Our Projects",
                "Meet the Farmers",
                "Latest News",
                "Contact",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-stretch gap-3.5 mt-[23px] first:mt-0"
                >
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="aspect-[1.1] object-contain w-[11px] shrink-0"
                  />
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div className="self-stretch flex flex-col text-white font-bold my-auto flex-1 mt-[15px]">
            <h3 className="text-xl">News</h3>
            <div className="bg-[rgba(75,175,71,1)] flex w-[45px] shrink-0 h-1 mt-[19px] rounded-sm" />
            <div className="w-[7px] h-[7px] bg-[rgba(75,175,71,1)] rounded-full ml-[55px] -mt-[5px]" />
            <div className="flex w-[200px] max-w-full flex-col items-stretch text-base leading-[26px] mt-7">
              <article>
                <h4 className="max-md:mr-1.5">
                  Bringing Food Production
                  <br />
                  Back To Cities
                </h4>
                <time className="text-[rgba(238,192,68,1)] text-[15px] font-normal leading-loose mt-[17px] block">
                  July 5, 2022
                </time>
              </article>
              <article className="mt-10">
                <h4>
                  The Future of Farming,
                  <br />
                  Smart Irrigation Solutions
                </h4>
                <time className="text-[rgba(238,192,68,1)] text-[15px] font-normal leading-loose mt-[13px] block">
                  July 5, 2022
                </time>
              </article>
            </div>
          </div>

          <div className="flex flex-col text-[15px] mt-[11px] flex-1">
            <h3 className="text-white text-xl font-bold leading-[1.8]">
              Contact
            </h3>
            <div className="flex w-[55px] shrink-0 h-1 mt-[19px] rounded-sm border-t-4 border-[rgba(75,175,71,1)]" />
            <div className="w-[7px] h-[7px] bg-[rgba(75,175,71,1)] rounded-full ml-[65px] -mt-[5px]" />
            <div className="mt-[22px] space-y-4">
              <div className="flex items-center gap-2 leading-loose space-x-2">
                <img
                  src={phone}
                  alt="Phone"
                  className="aspect-[0.83] object-contain w-[15px] shrink-0"
                />
                <span>666 888 0000</span>
              </div>
              <div className="flex items-center gap-[9px] whitespace-nowrap leading-loose">
                <img
                  src={email}
                  alt="Email"
                  className="aspect-[1] object-contain w-3.5 shrink-0"
                />
                <a
                  href="mailto:needhelp@company.com"
                  className="hover:text-white transition-colors"
                >
                  needhelp@company.com
                </a>
              </div>
              <div className="flex items-start gap-[9px] leading-[26px]">
                <img
                  src={location}
                  alt="Location"
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
                <address className="not-italic">
                  80 broklyn golden street line
                  <br />
                  New York, USA
                </address>
              </div>
            </div>
            <form className="mt-[31px]">
              <div className="bg-white border self-stretch flex items-stretch gap-5 text-xs text-[rgba(135,134,128,1)] font-semibold justify-between pl-[21px] rounded-[10px] border-[rgba(248,247,240,1)] border-solid max-md:pl-5">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-transparent border-none outline-none py-4 flex-1"
                />
                <button type="submit">
                  <img
                    src={bsubmit}
                    alt="Submit"
                    className="aspect-[1] object-contain w-[50px] shrink-0 rounded-[0px_10px_10px_0px]"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(31,30,23,1)] self-stretch flex w-full flex-col items-center text-[rgba(165,164,154,1)] font-semibold justify-center px-[70px] py-[27px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[1170px] max-w-full gap-5 flex-wrap justify-between">
          <div className="flex items-stretch gap-[3px]">
            <p className="text-sm leading-loose grow">
              © All Copyright 2024 by{" "}
            </p>
            <a
              href="#"
              className="text-[15px] leading-loose basis-auto hover:text-white transition-colors"
            >
              shawonetc Themes
            </a>
          </div>
          <div className="flex items-stretch gap-3.5 text-sm text-right ">
            <a
              href="#"
              className=" my-auto hover:text-white transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="px-[18px]  border-[rgba(165,164,154,1)] border-l hover:text-white transition-colors  mt-[5px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;