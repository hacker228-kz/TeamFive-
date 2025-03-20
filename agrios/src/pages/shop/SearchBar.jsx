
import React from "react";
import { useFilter } from "../context/FilterContext";

export const SearchBar = () => {
  const { search, setSearch } = useFilter();

  const handleSearchChange = (e) => {
    console.log("Search value:", e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="w-full h-[76px] bg-[#EEC044] flex items-center px-[30px] rounded-[10px]">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className="bg-transparent text-sm text-white w-full border-none placeholder-white/70 focus:outline-none"
      />
    </div>
  );
};


// import React from "react";
// import { useFilter } from "../context/FilterContext";

// export const SearchBar = () => {
//   const { search, setSearch } = useFilter();

//   const handleSearchChange = (e) => {
//     console.log("Search value:", e.target.value);
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="w-full h-[76px] bg-[#EEC044] flex items-center px-[30px] rounded-[10px]">
//       <input
//         type="text"
//         value={search}
//         onChange={handleSearchChange}
//         placeholder="Search products..."
//         className="bg-transparent text-sm text-white w-full border-none placeholder-white/70 focus:outline-none"
//       />
//     </div>
//   );
// };
