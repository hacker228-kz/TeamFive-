import React from 'react';
import { Link } from 'react-router-dom'; 
import backgroundImage from '../assets/background.png'; 
import firstNewImage from '../assets/firstnew.webp.svg';
import byIcon from '../assets/byIcon.png';
import commentIcon from '../assets/commentIcon.png';
import secondNewImage from '../assets/secondNewImage.webp.svg';
import thirdNewImage from '../assets/thirdNewImage.webp.svg';
import fourthNewImage from '../assets/fourthNewImage.webp.svg';
import fifthNewImage from '../assets/fifthNewImage.webp.svg';
import sixthNewImage from '../assets/sixthNewImage.webp.svg';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="w-full h-[200px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-[10px] font-thin tracking-[1.4px] leading-[20px]">HOME   /   NEWS GRID</p>
          <h1 className="text-4xl font-semibold">News Grid</h1>
        </div>
      </div>

      <div className="flex justify-center mt-20 mb-20">
        <div className="w-[800px] h-[800px] grid grid-cols-3 gap-[20px] place-items-center">
          {/* Див 1 */}
          <div
            className="w-[250px] h-[360px] bg-white rounded-lg relative overflow-hidden shadow-sm" 
          >
            <div
              className="w-full h-[60%] bg-cover bg-center" 
              style={{
                backgroundImage: `url(${firstNewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95px] h-[9%] bg-[#4BAF47] flex items-center justify-center rounded-lg"
              style={{ top: '60%' }} 
            >
              <p className="text-white text-[10px] font-md">05 July 2022</p>
            </div>

            <div className="absolute bottom-[28%] left-0 right-0 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img src={byIcon} alt="by" className="w-[12px] h-[17px]" /> 
                <p className="text-[10px] font-md text-[#878680]">by Kevin Martin</p>
              </div>

              <div className="flex items-center gap-1">
                <img src={commentIcon} alt="comments" className="w-[12px] h-[10px]" /> 
                <p className="text-[10px] font-md text-[#878680]">1 Comment</p> 
              </div>
            </div>

            <div className="w-full h-[30%] flex items-center justify-center mt-9 mb-8"> 
              <h1 className="text-xl font-semibold text-black text-center">
                Bringing Food <br /> Production Back To <br /> Cities
              </h1>
            </div>
          </div>
          
          {/* Див 2 */}
          <div
            className="w-[250px] h-[360px] bg-white rounded-lg relative overflow-hidden shadow-sm"
          >
            <div
              className="w-full h-[60%] bg-cover bg-center" 
              style={{
                backgroundImage: `url(${secondNewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95px] h-[9%] bg-[#4BAF47] flex items-center justify-center rounded-lg"
              style={{ top: '60%' }} 
            >
              <p className="text-white text-[10px] font-md">05 July 2022</p>
            </div>
            <div className="absolute bottom-[28%] left-0 right-0 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img src={byIcon} alt="by" className="w-[12px] h-[17px]" /> 
                <p className="text-[10px] font-md text-[#878680]">by Kevin Martin</p>
              </div>

              <div className="flex items-center gap-1">
                <img src={commentIcon} alt="comments" className="w-[12px] h-[10px]" /> 
                <p className="text-[10px] font-md text-[#878680]">0 Comment</p> 
              </div>
            </div>

            <div className="w-full h-[30%] flex items-center justify-center mt-9 mb-8"> 
              <h1 className="text-xl font-semibold text-black text-center">
                The Future of <br /> Farming, Smart <br /> Irrigation Solutions
              </h1>
            </div>
          </div>
          
          {/* Див 3 */}
          <div
            className="w-[250px] h-[360px] bg-white rounded-lg relative overflow-hidden shadow-sm" 
          >
            <div
              className="w-full h-[60%] bg-cover bg-center" 
              style={{
                backgroundImage: `url(${thirdNewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95px] h-[9%] bg-[#4BAF47] flex items-center justify-center rounded-lg"
              style={{ top: '60%' }} 
            >
              <p className="text-white text-[10px] font-md">05 July 2022</p>
            </div>

            <div className="absolute bottom-[28%] left-0 right-0 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img src={byIcon} alt="by" className="w-[12px] h-[17px]" /> 
                <p className="text-[10px] font-md text-[#878680]">by Kevin Martin</p> 
              </div>

              <div className="flex items-center gap-1">
                <img src={commentIcon} alt="comments" className="w-[12px] h-[10px]" /> 
                <p className="text-[10px] font-md text-[#878680]">0 Comment</p> 
              </div>
            </div>

            <div className="w-full h-[30%] flex items-center justify-center mt-9 mb-8"> 
              <h1 className="text-xl font-semibold text-black text-center">
                Agronomy and <br /> Relation to Other <br /> Sciences
              </h1>
            </div>
          </div>

          {/* Див 4 */}
          <div
            className="w-[250px] h-[360px] bg-white rounded-lg relative overflow-hidden shadow-sm" 
          >
            <div
              className="w-full h-[60%] bg-cover bg-center"
              style={{
                backgroundImage: `url(${fourthNewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95px] h-[9%] bg-[#4BAF47] flex items-center justify-center rounded-lg"
              style={{ top: '60%' }} 
            >
              <p className="text-white text-[10px] font-md">05 July 2022</p>
            </div>

            <div className="absolute bottom-[28%] left-0 right-0 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img src={byIcon} alt="by" className="w-[12px] h-[17px]" /> 
                <p className="text-[10px] font-md text-[#878680]">by Kevin Martin</p> 
              </div>

              <div className="flex items-center gap-1">
                <img src={commentIcon} alt="comments" className="w-[12px] h-[10px]" /> 
                <p className="text-[10px] font-md text-[#878680]">0 Comment</p>
              </div>
            </div>

            <div className="w-full h-[30%] flex items-center justify-center mt-9 mb-8"> 
              <h1 className="text-xl font-semibold text-black text-center">
                We grow products <br /> with the organic <br /> farming
              </h1>
            </div>
          </div>

          {/* Див 5 */}
          <div
            className="w-[250px] h-[360px] bg-white rounded-lg relative overflow-hidden shadow-sm" 
          >
            <div
              className="w-full h-[60%] bg-cover bg-center"
              style={{
                backgroundImage: `url(${fifthNewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95px] h-[9%] bg-[#4BAF47] flex items-center justify-center rounded-lg"
              style={{ top: '60%' }}
            >
              <p className="text-white text-[10px] font-md">05 July 2022</p>
            </div>

            <div className="absolute bottom-[28%] left-0 right-0 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img src={byIcon} alt="by" className="w-[12px] h-[17px]" />
                <p className="text-[10px] font-md text-[#878680]">by Kevin Martin</p> 
              </div>

              <div className="flex items-center gap-1">
                <img src={commentIcon} alt="comments" className="w-[12px] h-[10px]" /> 
                <p className="text-[10px] font-md text-[#878680]">0 Comment</p> 
              </div>
            </div>

            <div className="w-full h-[30%] flex items-center justify-center mt-9 mb-8"> 
              <h1 className="text-xl font-semibold text-black text-center">
                A Quick Solution to <br /> Low Milk Production <br /> in Zimbabwe
              </h1>
            </div>
          </div>

          {/* Див 6 */}
          <div
            className="w-[250px] h-[360px] bg-white rounded-lg relative overflow-hidden shadow-sm"
          >
            <div
              className="w-full h-[60%] bg-cover bg-center"
              style={{
                backgroundImage: `url(${sixthNewImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>

            <div
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95px] h-[9%] bg-[#4BAF47] flex items-center justify-center rounded-lg"
              style={{ top: '60%' }} 
            >
              <p className="text-white text-[10px] font-md">05 July 2022</p>
            </div>

            <div className="absolute bottom-[28%] left-0 right-0 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <img src={byIcon} alt="by" className="w-[12px] h-[17px]" /> 
                <p className="text-[10px] font-md text-[#878680]">by Kevin Martin</p> 
              </div>

              <div className="flex items-center gap-1">
                <img src={commentIcon} alt="comments" className="w-[12px] h-[10px]" /> 
                <p className="text-[10px] font-md text-[#878680]">0 Comment</p> 
              </div>
            </div>

            <div className="w-full h-[30%] flex items-center justify-center mt-9 mb-8"> 
              <h1 className="text-xl font-semibold text-black text-center">
                Winter wheat harvest <br /> organic gather nice <br /> moment
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="mt-8 text-blue-600 hover:text-blue-800 underline transition-colors"
      >
        ← Back to Projects
      </Link>
      <Link
  to="/contact"
  className="text-blue-600 hover:text-blue-800 underline transition-colors"
>
  Contact Us
</Link>
    </div>
  );
};

export default News;