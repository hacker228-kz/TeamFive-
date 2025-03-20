// import React from 'react'
// import logo from '../../assets/images/logo.png'
// import twitter from '../../assets/icon/twitter.svg'
// import facebook from '../../assets/icon/facebook.svg' 
// import pinterest from '../../assets/icon/pinterest.svg'
// import instagram from '../../assets/icon/instagram.svg'
// import phonee from '../../assets/icon/phonee.svg'
// import mail from '../../assets/icon/mail.svg'
// import locationn from '../../assets/icon/locationn.svg'

// const Header = () => {
//     return (
//         <div>
//             <div className="w-full flex h-1 ">
//             <div className="bg-[rgba(75,175,71,1)] w-1/3" />
//             <div className="bg-[rgba(197,206,56,1)] w-1/3" />
//             <div className="bg-[rgba(238,192,68,1)] w-1/3" />
//             </div>

//         <header className="flex w-[1200px] max-w-full mx-auto items-center gap-5 justify-between mt-[15px] ">
//           <img
//             src={logo}
//             alt="Logo"
//             className="aspect-[3.27] object-contain w-[170px] self-stretch shrink-0 max-w-full my-auto"
//           />
          
//             <div className="flex items-center gap-4">

//             <a
//                 href="#"
//                 className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
//             >
//                 <img src={twitter} alt="twitter" width={14} height={13} />
//             </a>

//             <a
//                 href="#"
//                 className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
//             >
//                 <img src={facebook} alt="facebook" width={14} height={13} />
//             </a>

//             <a
//                 href="#"
//                 className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
//             >
//                 <img src={pinterest} alt="pinterest" width={14} height={13} />
//             </a>

//             <a
//                 href="#"
//                 className="flex justify-center items-center w-[40px] h-[40px] p-[13px] rounded-[20px] bg-[#F8F7F0]"
//             >
//                 <img src={instagram} alt="instagram" width={14} height={13} />
//             </a>
//             </div>

//           <div className="self-stretch flex items-stretch gap-[21px] flex-wrap max-md:max-w-full">
//             <div className="flex flex-col items-stretch my-auto">
//               <div className="flex text-[rgba(135,134,128,1)] text-xs font-semibold leading-loose">
//                 <img src={phonee} alt="telepone" />
//                 Call anytime
//               </div>
//               <div className="text-[rgba(31,30,23,1)] text-sm font-bold leading-none mt-1">
//                 + 98 (000) - 9630
//               </div>
//             </div>
//             <div className="flex items-stretch grow shrink basis-auto max-md:max-w-full">
//               <div className="flex flex-col my-auto pl-[47px] pr-[22px] py-[19px] border-[rgba(228,226,215,1)] border-l max-md:px-5">
//                 <div className="text-[rgba(135,134,128,1)] text-xs font-semibold leading-loose self-center">
//                   <img src={mail} alt="mail" />
//                   Send email
//                 </div>
//                 <div className="text-[rgba(31,30,23,1)] text-sm font-bold leading-none mt-[9px]">
//                   ambed@agrios.com
//                 </div>
//               </div>
//               <div className="flex flex-col pl-[43px] pr-0.5 py-[22px] border-[rgba(228,226,215,1)] border-l max-md:pl-5">
//                 <div className="text-[rgba(135,134,128,1)] text-xs font-semibold leading-loose self-center ml-4">
//                   <img src={locationn} alt="location" />
//                   380 St Kilda Road
//                 </div>
//                 <div className="text-[rgba(31,30,23,1)] text-sm font-bold leading-none mt-[9px]">
//                   Melbourne, Australia
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//         </div>
//       );
//     };

// export default Header





import React from 'react';
import logo from '../../assets/images/logo.png';
import twitter from '../../assets/icon/twitter.svg';
import facebook from '../../assets/icon/facebook.svg';
import pinterest from '../../assets/icon/pinterest.svg';
import instagram from '../../assets/icon/instagram.svg';
import phonee from '../../assets/icon/phonee.svg';
import mail from '../../assets/icon/mail.svg';
import locationn from '../../assets/icon/locationn.svg';

const Header = () => {
  return (
    <div>
      {/* Тонкая цветная полоска сверху (3 цвета) */}
      <div className="w-full flex h-1">
        <div className="bg-[rgba(75,175,71,1)] w-1/3" />
        <div className="bg-[rgba(197,206,56,1)] w-1/3" />
        <div className="bg-[rgba(238,192,68,1)] w-1/3" />
      </div>

      {/* Основная часть шапки */}
      <header className="w-full max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        
        {/* ЛОГОТИП */}
        <div className="flex  ml-[80px] gap-4 ">
          <img
            src={logo}
            alt="Logo"
            className="w-[170px] object-contain"
          />
        </div>

        {/* СОЦИАЛЬНЫЕ СЕТИ (можно оставить по центру или рядом с контактами) */}
        <div className="flex ml-[90px] gap-3">
          <a
            href="#"
            className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#F8F7F0]"
          >
            <img src={twitter} alt="twitter" className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#F8F7F0]"
          >
            <img src={facebook} alt="facebook" className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#F8F7F0]"
          >
            <img src={pinterest} alt="pinterest" className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#F8F7F0]"
          >
            <img src={instagram} alt="instagram" className="w-4 h-4" />
          </a>
        </div>

        {/* КОНТАКТЫ (телефон, email, адрес) */}
        <div className="flex items-center gap-6">
          {/* Телефон */}
          <div className="flex items-center gap-2">
            <img src={phonee} alt="telephone" className="" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold  text-[rgba(135,134,128,1)] ">
                Call anytime
              </span>
              <span className="text-sm font-bold text-black">
                +98 (000) - 9630
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 border-l pl-4 border-[rgba(228,226,215,1)] h-16">
            <img src={mail} alt="mail" className="" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold text-[rgba(135,134,128,1)]">
                Send email
              </span>
              <span className="text-sm font-bold text-black">
                ambed@agrios.com
              </span>
            </div>
          </div>

          {/* Адрес */}
          <div className="flex items-center gap-2 border-l pl-4 border-[rgba(228,226,215,1)] h-16">
            <img src={locationn} alt="location" className="" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold text-[rgba(135,134,128,1)]">
                380 St Kilda Road
              </span>
              <span className="text-sm font-bold text-black">
                Melbourne, Australia
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
