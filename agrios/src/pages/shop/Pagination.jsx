
import React, { useState } from "react";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center gap-2 mt-[30px]">
      <button
        onClick={() => setCurrentPage(1)}
        className={`w-10 h-10 font-semibold rounded-[10px] ${
          currentPage === 1
            ? "bg-[#4BAF47] text-white"
            : "border text-[#878680] border-[#ECE7E2]"
        }`}
      >
        1
      </button>
      <button
        onClick={() => setCurrentPage(2)}
        className={`w-10 h-10 font-semibold rounded-[10px] ${
          currentPage === 2
            ? "bg-[#4BAF47] text-white"
            : "border text-[#878680] border-[#ECE7E2]"
        }`}
      >
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center border rounded-[10px] border-[#ECE7E2]">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.29688 7.06848L1.73828 11.6271C1.62891 11.7365 1.49609 11.7911 1.33984 11.7911C1.18359 11.7911 1.05078 11.7365 0.941406 11.6271L0.414062 11.088C0.304688 10.9786 0.25 10.8478 0.25 10.6954C0.25 10.5431 0.304688 10.4083 0.414062 10.2911L4.02344 6.67004L0.414062 3.04895C0.304688 2.93176 0.25 2.797 0.25 2.64465C0.25 2.49231 0.304688 2.36145 0.414062 2.25208L0.941406 1.71301C1.05078 1.60364 1.18359 1.54895 1.33984 1.54895C1.49609 1.54895 1.62891 1.60364 1.73828 1.71301L6.29688 6.27161C6.40625 6.38098 6.46094 6.51379 6.46094 6.67004C6.46094 6.82629 6.40625 6.95911 6.29688 7.06848Z"
            fill="#878680"
          />
        </svg>
      </button>
    </div>
  );
};
