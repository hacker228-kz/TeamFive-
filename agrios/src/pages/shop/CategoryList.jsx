
import React from "react";

const categories = [
  { name: "Agriculture", href: "#" },
  { name: "Farming", href: "#" },
  { name: "Fresh Vegetables", href: "#" },
  { name: "Harvest", href: "#" },
  { name: "Organic Food", href: "#" },
];

const ChevronIcon = () => (
  <svg
    width="7"
    height="39"
    viewBox="0 0 7 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[6px]"
  >
    <path
      d="M5.78906 20.082L1.99023 23.8809C1.89909 23.972 1.78841 24.0176 1.6582 24.0176C1.52799 24.0176 1.41732 23.972 1.32617 23.8809L0.886719 23.4316C0.795573 23.3405 0.75 23.2314 0.75 23.1045C0.75 22.9775 0.795573 22.8652 0.886719 22.7676L3.89453 19.75L0.886719 16.7324C0.795573 16.6348 0.75 16.5225 0.75 16.3955C0.75 16.2686 0.795573 16.1595 0.886719 16.0684L1.32617 15.6191C1.41732 15.528 1.52799 15.4824 1.6582 15.4824C1.78841 15.4824 1.89909 15.528 1.99023 15.6191L5.78906 19.418C5.88021 19.5091 5.92578 19.6198 5.92578 19.75C5.92578 19.8802 5.88021 19.9909 5.78906 20.082Z"
      fill="#878680"
    />
  </svg>
);

export const CategoryList = () => {
  return (
    <div className="border mt-[30px] p-[30px] rounded-[10px] border-[#ECE7E2]">
      <div className="text-xl font-extrabold text-[#1F1E17] mb-5">
        Categories
      </div>
      <div className="flex flex-col gap-6">
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.href}
            className="flex items-center justify-between text-base text-[#878680] hover:text-[#1F1E17] transition-colors"
          >
            <span>{category.name}</span>
            <ChevronIcon />
          </a>
        ))}
      </div>
    </div>
  );
};
