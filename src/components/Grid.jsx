import React from 'react';
import { Link } from 'react-router-dom'; 
import backgroundImage from '../assets/background.png';
import easyHarvesting from '../assets/easyharvesting.webp.svg'; 
import agricultureFarming from '../assets/AgricultureFarming.webp.svg';
import ecologicalFarming from '../assets/EcologicalFarming.webp.svg'; 
import organicSolutions from '../assets/OrganicSolutions.webp.svg';
import freshProducts from '../assets/FreshProducts.webp.svg'; 
import healthyFood from '../assets/HealthyFood.webp.svg';
const Grid = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="w-full h-[200px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-[10px] font-thin tracking-[1.4px] leading-[20px]">HOME   /   PROJECTS</p>
          <h1 className="text-4xl font-semibold">Projects</h1>
        </div>
      </div>

      <div className="flex justify-center mt-20 mb-20">
        <div className="w-[800px] h-[800px] grid grid-cols-3 gap-[20px] place-items-center">
          <div
            className="w-[250px] h-[390px] bg-white rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${easyHarvesting})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
            ></div>
            <h1 className="absolute bottom-7 left-7 text-xl font-semibold text-white">Easy <br /> Harvesting</h1>
          </div>

          <div
            className="w-[250px] h-[390px] bg-white rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${agricultureFarming})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
            ></div>
            <h1 className="absolute bottom-7 left-7 text-xl font-semibold text-white">Agriculture <br /> Farming</h1>
          </div>

          <div
            className="w-[250px] h-[390px] bg-white rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${ecologicalFarming})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
            ></div>
            <h1 className="absolute bottom-7 left-7 text-xl font-semibold text-white">Ecological <br /> Farming</h1>
          </div>

          <div
            className="w-[250px] h-[390px] bg-white rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${organicSolutions})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
            ></div>
            <h1 className="absolute bottom-7 left-7 text-xl font-semibold text-white">Organic <br /> Solutions</h1>
          </div>

          <div
            className="w-[250px] h-[390px] bg-white rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${freshProducts})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
            ></div>
            <h1 className="absolute bottom-7 left-7 text-xl font-semibold text-white">Fresh <br /> Products</h1>
          </div>

          <div
            className="w-[250px] h-[390px] bg-white rounded-lg relative overflow-hidden"
            style={{
              backgroundImage: `url(${healthyFood})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
            ></div>
            <h1 className="absolute bottom-7 left-7 text-xl font-semibold text-white">Healthy <br /> Food</h1>
          </div>
        </div>
      </div>
      <div className="text-center mb-8">
        <Link 
          to="/news" 
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          View Latest News →
        </Link>
        <Link
  to="/contact"
  className="text-blue-600 hover:text-blue-800 underline transition-colors"
>
  Contact Us
</Link>
      </div>
    </div>
  );
};

export default Grid;