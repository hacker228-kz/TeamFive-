// import React, { createContext, useContext, useState } from "react";

// const FilterContext = createContext();

// export const FilterProvider = ({ children }) => {
//   const [search, setSearch] = useState("");
//   const [priceRange, setPriceRange] = useState({ min: 20, max: 100 });
  
//   return (
//     <FilterContext.Provider
//       value={{
//         search,
//         setSearch,
//         priceRange,
//         setPriceRange
//       }}
//     >
//       {children}
//     </FilterContext.Provider>
//   );
// };

// export const useFilter = () => useContext(FilterContext);

import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext({
  searchTerm: '',
  setSearchTerm: () => {},
  priceRange: { min: 0, max: 100 },
  setPriceRange: () => {},
});

export const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  return (
    <FilterContext.Provider value={{ 
      search, 
      setSearch, 
      priceRange, 
      setPriceRange 
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};