import React from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/product1.svg";
import productIcon from "../assets/productIcon.svg";
import product2 from "../assets/product2.svg";
import product3 from "../assets/product3.svg";
import product4 from "../assets/product4.svg";
import arrow from "../assets/arrow.svg";

const ProductList = () => {
  return (
    <div className="w-[1200px] h-[1692px] mt-[200px] ml-[200px]">
      <div className="w-[370px] h-[377px] pt-[42px] px-[50px] pb-[36px] rounded-[10px] bg-[#F8F7F0]">
        <h4 className="w-[110px] h-[30px] text-[#1F1E17] text-[20px] font-manrope font-extrabold leading-[30px]">
          Categories
        </h4>

        <p className="w-[170.px] h-[40px] text-[#878680] text-[16px] font-manrope font-semibold leading-[40px] mt-[15px]">
          Agriculture Products
        </p>

        <p className="w-[170.px] h-[40px] text-[#878680] text-[16px] font-manrope font-semibold leading-[40px] mt-[13px]">
          Organic Products
        </p>

        <p className="w-[170.px] h-[40px] text-[#878680] text-[16px] font-manrope font-semibold leading-[40px] mt-[15px]">
          Fresh Vegetables
        </p>

        <p className="w-[170.px] h-[40px] text-[#878680] text-[16px] font-manrope font-semibold leading-[40px] mt-[15px]">
          Dairy Products
        </p>

        <p className="w-[170.px] h-[40px] text-[#878680] text-[16px] font-manrope font-semibold leading-[40px] mt-[15px]">
          Harvest
        </p>
      </div>

      <div className="w-[370px] h-[400px] rounded-[10px] mt-[30px]">
        <img src={product2} alt="Product2" />

        <h4 className="w-[134px] h-[30px] text-[#FFF] text-[24px] font-manrope font-extrabold leading-[30px] mt-[-380px] ml-[125px]">
          Need Help?
        </h4>

        <p className="w-[254.2px] h-[120px] text-[#C3F5C1] text-[16px] font-manrope font-medium leading-[30px] ml-[60px] mt-[20px] text-center">
          Speak with a human to filling out a form? call corporate office and we
          will connect you with a team member help.
        </p>

        <h6 className="w-[280px] h-[67.5] text-[#FFF] text-[25px] font-covered font-normal leading-[67.5px] ml-[90px]">
          +92 (000) -9630
        </h6>

        <div className="w-[235.4px] h-[60px] rounded-[10px] bg-[#EEC044] mt-[30px] ml-[70px] absolute">
          <span className="cursor-pointer absolute w-[140px] h-[30px] text-[#FFF] text-[14px] font-manrope font-bold mt-[18px] ml-[50px]">
            Start Shopping Now
          </span>
        </div>
      </div>

      <div className="w-[800px] h-[1692px] mt-[-807px] ml-[400px]">
        <img src={product1} alt="Product1" className="w-[770px] h-[420px]" />
        <img
          src={productIcon}
          alt="ProductIcon"
          className="mt-[-83px] ml-[670px]"
        />

        <h2 className="w-[413.7px] h-[56px] text-[#1F1E17] text-[40px] font-manrope font-extrabold mt-[30px] leading-[56px]">
          Agriculture Products
        </h2>

        <p className="w-[764.4px] h-[150px] text-[#878680] text-[16px] font-manrope font-medium mt-[30px] leading-[30px]">
          Lorem ipsum is simply free text used by copytyping refreshing. Neque
          porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
          enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the ndustry standard dummy text ever since the
          1500s.
        </p>

        <p className="w-[770.2px] h-[120px] text-[#878680] text-[16px] font-manrope font-medium mt-[30px] leading-[30px]">
          It has survived not only five centuries. Lorem Ipsum is simply dummy
          text of the new design printng and type setting Ipsum take a look at
          our round. When an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting.
        </p>

        <div className="w-[800px] h-[384px] mt-[50px]">
          <div className="w-[400px] h-[384px]">
            <img src={product3} alt="Product3" />
            <h4 className="w-[185px] h-[36px] text-[#1F1E17] text-[30px] font-manrope font-extrabold mt-[15px]">
              Our Benefits
            </h4>
            <p className="w-[365.5px] h-[90px] text-[#878680] text-[16px] font-manrope font-medium mt-[20px] leading-[30px]">
              It has survived not only five centuries em simply dummy text. Duis
              aute irure dolor in eprehenderit in voluptate velit esse cillum.
            </p>
          </div>

          <div className="w-[400px] h-[384px] ml-[400px] mt-[-384px]">
            <img src={product4} alt="Product4" />
            <h5 className="w-[282.1px] h-[144px] text-[#1F1E17] text-[16px] font-manrope font-bold mt-[15px] leading-[36px]">
              Nsectetur cing elit. Suspe ndisse suscipit sagittis leo. Entum
              estibulum dignissim posuere. Lorem Ipsum on the tend to repeat.
            </h5>
          </div>
        </div>
      </div>

      <div className="w-[770px] h-[440px] ml-[400px] mt-[-350px]">
        <div className="relative w-[770px] h-[80px] rounded-[10px] bg-[#F8F7F0]">
          <h4 className=" absolute w-[388px] h-[30px] text-[#1F1E17] text-[20px] font-manrope font-extrabold leading-[30px] mt-[25px] ml-[38px]">
            World’s hottest destinations for vegans
          </h4>

          <img
            src={arrow}
            alt="Arrow"
            className="cursor-pointer absolute mt-[10px] ml-[700px]"
          />
        </div>

        <div className="relative w-[770px] h-[80px] rounded-[10px] bg-[#F8F7F0] mt-[20px]">
          <h4 className="absolute w-[388px] h-[30px] text-[#1F1E17] text-[20px] font-manrope font-extrabold leading-[30px] mt-[25px] ml-[38px]">
            Let’s grow naturaly and live naturaly
          </h4>

          <img
            src={arrow}
            alt="Arrow"
            className="cursor-pointer absolute mt-[10px] ml-[700px]"
          />
        </div>

        <p className="w-[719px] h-[90px] text-[#878680] text-[16px] font-manrope font-medium leading-[30px] mt-[30px] ml-[40px]">
          Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum
          leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl.
          Nulla facilisi. Pellentesque est metus many of some form.
        </p>

        <div className="relative w-[770px] h-[80px] rounded-[10px] bg-[#F8F7F0] mt-[30px]">
          <h4 className="absolute w-[388px] h-[30px] text-[#1F1E17] text-[20px] font-manrope font-extrabold leading-[30px] mt-[25px] ml-[38px]">
            Best vegetables for your healthy hair
          </h4>

          <img
            src={arrow}
            alt="Arrow"
            className="cursor-pointer absolute mt-[10px] ml-[700px]"
          />
        </div>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/">last slide</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
