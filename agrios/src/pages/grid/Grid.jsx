import React from 'react';
import { Link } from 'react-router-dom'; 

import easyHarvesting from '../../assets/images/easyharvesting.webp.svg';    
import AgricultureFarming from '../../assets/images/AgricultureFarming.webp.svg';
import EcologicalFarming from '../../assets/images/EcologicalFarming.webp.svg'; 
import OrganicSolutions from '../../assets/images/OrganicSolutions.webp.svg';
import FreshProducts from '../../assets/images/FreshProducts.webp.svg'; 
import HealthyFood from '../../assets/images/HealthyFood.webp.svg';
const Grid = () => {
  return (
    <div id='projects' className="min-h-screen ">
      <div
       
      >
       
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
              backgroundImage: `url(${AgricultureFarming})`,
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
              backgroundImage: `url(${EcologicalFarming})`,
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
              backgroundImage: `url(${OrganicSolutions})`,
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
              backgroundImage: `url(${FreshProducts})`,
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
              backgroundImage: `url(${HealthyFood})`,
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
     
    </div>
  );
};

export default Grid;