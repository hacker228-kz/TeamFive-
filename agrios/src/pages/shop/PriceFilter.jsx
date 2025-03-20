// import React, { useState, useEffect } from "react";
// import { useFilter } from "../context/FilterContext";

// export const PriceFilter = () => {
//   const { priceRange, setPriceRange } = useFilter();
//   const [position, setPosition] = useState(80); // percentage
//   const [isDragging, setIsDragging] = useState(false);
//   const [activeHandle, setActiveHandle] = useState(null);

//   // Initialize slider position based on price range
//   useEffect(() => {
//     const maxPossiblePrice = 100;
//     setPosition((priceRange.max / maxPossiblePrice) * 100);
//   }, []);

//   const handleMouseDown = (handle) => (e) => {
//     setIsDragging(true);
//     setActiveHandle(handle);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     setActiveHandle(null);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
    
//     const slider = e.currentTarget;
//     const rect = slider.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left;
//     const width = rect.width;
    
//     // Calculate percentage (clamped between 0-100)
//     let newPosition = Math.max(0, Math.min(100, (offsetX / width) * 100));
    
//     // Update position
//     setPosition(newPosition);
    
//     // Calculate price based on percentage
//     const maxPrice = 100;
//     const minPrice = 20;
//     const price = Math.round(minPrice + (newPosition / 100) * (maxPrice - minPrice));
    
//     // Update price range
//     if (activeHandle === 'max') {
//       setPriceRange({ ...priceRange, max: price });
//     } else {
//       // For simplicity in this example, we just set min to a fixed value
//       setPriceRange({ min: minPrice, max: price });
//     }
//   };

//   const handleApply = () => {
//     console.log("Applying price filter:", priceRange);
//     // Price is already applied through the context
//   };

//   // Add event listeners for mouse up event on window
//   useEffect(() => {
//     window.addEventListener('mouseup', handleMouseUp);
//     window.addEventListener('mouseleave', handleMouseUp);
    
//     return () => {
//       window.removeEventListener('mouseup', handleMouseUp);
//       window.removeEventListener('mouseleave', handleMouseUp);
//     };
//   }, []);

//   return (
//     <div className="border mt-[30px] p-[30px] rounded-[10px] border-[#ECE7E2]">
//       <div className="text-xl font-extrabold text-[#1F1E17] mb-5">Price</div>
//       <div 
//         className="relative w-full h-[5px] bg-[#1F1E17]/20 mb-5 rounded-[5px] cursor-pointer"
//         onMouseMove={handleMouseMove}
//       >
//         <div
//           className="absolute h-full bg-[#EEC044] rounded-[5px] left-0 top-0"
//           style={{ width: `${position}%` }}
//         />
//         <div 
//           className="absolute top-[-5px] w-4 h-4 bg-white rounded-full border-2 border-[#1E1E1E] left-0 cursor-grab"
//           onMouseDown={handleMouseDown('min')}
//           style={{ cursor: isDragging && activeHandle === 'min' ? 'grabbing' : 'grab' }}
//         />
//         <div
//           className="absolute top-[-5px] w-4 h-4 bg-white rounded-full border-2 border-[#1E1E1E] cursor-grab"
//           style={{ 
//             left: `${position}%`, 
//             transform: 'translateX(-50%)',
//             cursor: isDragging && activeHandle === 'max' ? 'grabbing' : 'grab'
//           }}
//           onMouseDown={handleMouseDown('max')}
//         />
//       </div>
//       <div className="flex items-center gap-[5px] text-xs text-[#878680]">
//         <span>${priceRange.min}</span>
//         <span>-</span>
//         <span>${priceRange.max}</span>
//         <button
//           onClick={handleApply}
//           className="bg-[#4BAF47] text-white text-sm font-bold ml-auto px-5 py-2.5 rounded-[5px]"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import { useFilter } from "../context/FilterContext"

export const PriceFilter = () => {
  const { priceRange, setPriceRange } = useFilter();
  const [position, setPosition] = useState(80); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [activeHandle, setActiveHandle] = useState(null);

  // Initialize slider position based on price range
  useEffect(() => {
    const maxPossiblePrice = 100;
    setPosition((priceRange.max / maxPossiblePrice) * 100);
  }, [priceRange.max]);

  const handleMouseDown = (handle) => (e) => {
    setIsDragging(true);
    setActiveHandle(handle);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveHandle(null);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    
    // Calculate percentage (clamped between 0-100)
    let newPosition = Math.max(0, Math.min(100, (offsetX / width) * 100));
    
    // Update position
    setPosition(newPosition);
    
    // Calculate price based on percentage
    const maxPrice = 100;
    const minPrice = 20;
    const price = Math.round(minPrice + (newPosition / 100) * (maxPrice - minPrice));
    
    // Update price range
    if (activeHandle === 'max') {
      setPriceRange({ ...priceRange, max: price });
    } else {
      // For simplicity in this example, we just set min to a fixed value
      setPriceRange({ min: minPrice, max: price });
    }
  };

  const handleApply = () => {
    console.log("Applying price filter:", priceRange);
    // Price is already applied through the context
  };

  // Add event listeners for mouse up event on window
  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  return (
    <div className="border mt-[30px] p-[30px] rounded-[10px] border-[#ECE7E2]">
      <div className="text-xl font-extrabold text-[#1F1E17] mb-5">Price</div>
      <div 
        className="relative w-full h-[5px] bg-[#1F1E17]/20 mb-5 rounded-[5px] cursor-pointer"
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute h-full bg-[#EEC044] rounded-[5px] left-0 top-0"
          style={{ width: `${position}%` }}
        />
        <div 
          className="absolute top-[-5px] w-4 h-4 bg-white rounded-full border-2 border-[#1E1E1E] left-0 cursor-grab"
          onMouseDown={handleMouseDown('min')}
          style={{ cursor: isDragging && activeHandle === 'min' ? 'grabbing' : 'grab' }}
        />
        <div
          className="absolute top-[-5px] w-4 h-4 bg-white rounded-full border-2 border-[#1E1E1E] cursor-grab"
          style={{ 
            left: `${position}%`, 
            transform: 'translateX(-50%)',
            cursor: isDragging && activeHandle === 'max' ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown('max')}
        />
      </div>
      <div className="flex items-center gap-[5px] text-xs text-[#878680]">
        <span>${priceRange.min}</span>
        <span>-</span>
        <span>${priceRange.max}</span>
        <button
          onClick={handleApply}
          className="bg-[#4BAF47] text-white text-sm font-bold ml-auto px-5 py-2.5 rounded-[5px]"
        >
          Apply
        </button>
      </div>
    </div>
  );
};