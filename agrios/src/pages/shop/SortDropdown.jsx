import React, { useState } from "react";

const sortOptions = [
  "Default sorting",
  "Sort by popularity",
  "Sort by price: low to high",
  "Sort by price: high to low",
];

export const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[270px] h-[76px] border flex items-center relative cursor-pointer px-[30px] rounded-[10px] border-[#ECE7E2]"
      >
        <span>{selected}</span>
        <svg
          className="absolute right-[30px]"
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.75H10L5 5.75L0 0.75Z" fill="#808080" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#ECE7E2] rounded-[10px] shadow-lg z-10">
          {sortOptions.map((option) => (
            <button
              key={option}
              className="w-full text-left px-[30px] py-3 hover:bg-[#ECE7E2]/10 transition-colors"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
