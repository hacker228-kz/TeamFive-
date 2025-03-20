// import React from 'react';

// const Home = () => {
//   return (
    
//       {/* Контейнер для секций */}
//       <div className="relative z-10 w-full">
//     {/* Верхняя надпись */}
//     <div className="text-center mb-8">
//         <h1 className="text-2xl font-secondary text-[#EEC044]">Our Services </h1>
//       <h2 className="text-3xl font-bold text-gray-800">What We Offer</h2>
//     </div>

//     {/* Горизонтальные секции */}
//     <div className="flex flex-col md:flex-row justify-center items-center gap-6">
//       {/* Секция Agriculture Products */}
//       <div
//         className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
//         style={{ width: '280px', height: '320px' }}
//       >
//         <div className="relative w-full h-36 mb-4">
//           <img
//             src="/images/img-1.png"
//             alt="Agriculture"
//             className="w-full h-36 object-cover rounded-lg"
//           />
//           {/* Зеленая иконка */}
//           <img
//             src="/images/iconka1.png"
//             alt="Green Icon"
//             className="absolute -bottom-4 right-2 w-12 h-12" />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-800">Agriculture Products</h3>
//         <p className="text-gray-600 mt-2 text-sm">
//           Lorem ipsum is simply free available.
//           Aenean leo quam. Pellentesque
//           semornare vestibulum.
//         </p>
//       </div>

//       {/* Секция Organic Products */}
//       <div
//         className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
//         style={{ width: '280px', height: '320px' }}
//       >
//         <div className="relative w-full h-36 mb-4">
//           <img
//             src="/images/img-2.png"
//             alt="Organic"
//             className="w-full h-36 object-cover rounded-lg"
//           />
//           {/* Зеленая иконка */}
//           <img
//             src="/images/iconka2.png"
//             alt="Green Icon"
//             className="absolute -bottom-4  right-2 w-12 h-12"
//           />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-800">Organic Products</h3>
//         <p className="text-gray-600 mt-2 text-sm">
//           Lorem ipsum is simply free available.
//           Aenean leo quam. Pellentesque
//           semornare vestibulum.
//         </p>
//       </div>

//       {/* Секция Dairy Products */}
//       <div
//         className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
//         style={{ width: '280px', height: '320px' }}
//       >
//         <div className="relative w-full h-36 mb-4">
//           <img
//             src="/images/img-3.png"
//             alt="Dairy"
//             className="w-full h-36 object-cover rounded-lg"
//           />
//           {/* Зеленая иконка */}
//           <img
//             src="/images/iconka3.png"
//             alt="Green Icon"
//             className="absolute -bottom-4 right-2 w-12 h-12"
//           />
//         </div>
//         <h3 className="text-xl font-semibold text-gray-800">Dairy Products</h3>
//         <p className="text-gray-600 mt-2 text-sm">
//           Lorem ipsum is simply free available.
//           Aenean leo quam. Pellentesque
//           semornare vestibulum.
//         </p>
//         </div>
//       </div>
//     );
//   };

// export default Home;







import React from 'react';

const Home = () => {
return (
 <div className="relative z-10 w-full bg-[url('./images/img-4.png')]  bg-cover bg-center py-[150px]">
   {/* Контейнер для секций */}
   {/* Верхняя надпись */}
   <div className="text-center mb-8">
     <h1 className="text-2xl font-first text-[#EEC044]">Our Services</h1>
     <h2 className="text-3xl font-semibold text-gray-800">What We Offer</h2>
   </div>

   {/* Горизонтальные секции */}
   <div className="flex flex-col md:flex-row justify-center items-center gap-6">
     {/* Секция Agriculture Products */}
     <div
       className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
       style={{ width: '280px', height: '320px' }}
     >
       <div className="relative w-full h-36 mb-4">
         <img
           src="/images/img-1.png"
           alt="Agriculture"
           className="w-full h-36 object-cover rounded-lg"
         />
         {/* Зеленая иконка */}
         <img
           src="/images/iconka1.png"
           alt="Green Icon"
           className="absolute -bottom-4 right-2 w-12 h-12"
         />
       </div>
       <h3 className="text-xl font-semibold text-gray-800">Agriculture Products</h3>
       <p className="text-gray-600 mt-2 text-sm">
         Lorem ipsum is simply free available.
         Aenean leo quam. Pellentesque
         semornare vestibulum.
       </p>
     </div>

     {/* Секция Organic Products */}
     <div
       className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
       style={{ width: '280px', height: '320px' }}
     >
       <div className="relative w-full h-36 mb-4">
         <img
           src="/images/img-2.png"
           alt="Organic"
           className="w-full h-36 object-cover rounded-lg"
         />
         {/* Зеленая иконка */}
         <img
           src="/images/iconka2.png"
           alt="Green Icon"
           className="absolute -bottom-4 right-2 w-12 h-12"
         />
       </div>
       <h3 className="text-xl font-semibold text-gray-800">Organic Products</h3>
       <p className="text-gray-600 mt-2 text-sm">
         Lorem ipsum is simply free available.
         Aenean leo quam. Pellentesque
         semornare vestibulum.
       </p>
     </div>

     {/* Секция Dairy Products */}
     <div
       className="flex flex-col items-start text-left bg-gray-50 rounded-lg p-4 shadow-md"
       style={{ width: '280px', height: '320px' }}
     >
       <div className="relative w-full h-36 mb-4">
         <img
           src="/images/img-3.png"
           alt="Dairy"
           className="w-full h-36 object-cover rounded-lg"
         />
         {/* Зеленая иконка */}
         <img
           src="/images/iconka3.png"
           alt="Green Icon"
           className="absolute -bottom-4 right-2 w-12 h-12"
         />
       </div>
       <h3 className="text-xl font-semibold text-gray-800">Dairy Products</h3>
       <p className="text-gray-600 mt-2 text-sm">
         Lorem ipsum is simply free available.
         Aenean leo quam. Pellentesque
         semornare vestibulum.
       </p>
     </div>
   </div>
 </div>
);
};

export default Home;