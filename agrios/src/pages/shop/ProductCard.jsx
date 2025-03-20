
import React from "react";
import star from "../../assets/icon/star.svg"

export const ProductCard = ({ product }) => {
  return (
    <article className="flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-[10px] mb-[20px]"
      />
      <h3 className="text-[22px] font-extrabold text-[#1F1E17]">
        {product.name}
      </h3>
      <div className="text-base font-bold text-[#4BAF47]">
        ${product.price.toFixed(2)}
      </div>
      <img
        src={star}
        alt="Rating"
        className="w-[100px] -mt-[50px] ml-[300px]"
      />
    </article>
  );
};
