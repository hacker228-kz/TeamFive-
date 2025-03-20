// import Footer from "./pages/shop/Footer"
// import Header from "./pages/shop/Header"
// import Navbar from "./pages/shop/Navbar"
// import ProductLayout from "./pages/shop/ProductLayout"





// function App() {
  

//   return (
//     <div>
//       <Header />
//       <Navbar />
//       <ProductLayout />
//       <Footer />
//     </div>
//   )
// }

// export default App



// // App.jsx
// import React from 'react';
// import { FilterProvider } from './pages/context/FilterContext';
// import { SearchBar } from './pages/shop/SearchBar';
// import { ProductGrid } from './pages/shop/ProductGrid';


// function App() {
//   return (
//     <FilterProvider>
//       <div className="App">
//         <SearchBar />
//         <ProductGrid />
//       </div>
//     </FilterProvider>
//   );
// }

// export default App;



// import React from "react";

// import Footer from "./pages/shop/Footer";
// import Header from "./pages/shop/Header";
// import Navbar from "./pages/shop/Navbar";
// import ProductLayout from "./pages/shop/ProductLayout";
// import { FilterProvider } from "./pages/context/FilterContext";
// import Contact from "./pages/contact/Contact";

// function App() {
//   return (
//     <FilterProvider>
//       <div>
//         <Header />
//         <Navbar />
//         <ProductLayout />
//         <Contact/>
//         <Footer />
//       </div>
//     </FilterProvider>
    
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./pages/shop/Footer";
// import Header from "./pages/shop/Header";
// import Navbar from "./pages/shop/Navbar";
// import ProductLayout from "./pages/shop/ProductLayout";
// import Contact from "./pages/contact/Contact";
// import { FilterProvider } from "./pages/context/FilterContext";

// function App() {
//   return (
//     <Router>
//       <FilterProvider>
//         <Header />
//         <Navbar />
//         <Routes>
//           {/* Маршрут для магазина */}
//           <Route path="/shop" element={<ProductLayout />} />
//           {/* Маршрут для контактов */}
//           <Route path="/contact" element={<Contact />} />
//           {/* Маршрут по умолчанию */}
//           {/* <Route path="/" element={<ProductLayout />} /> */}
//         </Routes>
//         <Footer />
//       </FilterProvider>
//     </Router>
//   );
// }

// export default App;





// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Footer from "./pages/shop/Footer";
// import Header from "./pages/shop/Header";
// import Navbar from "./pages/shop/Navbar";
// import ProductLayout from "./pages/shop/ProductLayout";
// import Contact from "./pages/contact/Contact";
// import { FilterProvider } from "./pages/context/FilterContext";
// import Grid from "./pages/grid/grid";
// import News from "./pages/news/News";
// import About from "./pages/about/About";
// import Services from "./pages/about/Services";
// // import Home2 from "./pages/home/Home2";

// import Home from "./pages/home/Home";

// import HHeader from "./pages/home/HHeader";
// import FAQSection from "./pages/home/FaqSection";
// import HHome from "./pages/home/HHome";



// function App() {
//   return (
//     <FilterProvider>
//       <Header />
//       <Navbar />
//       <Routes>
//         <Route path="/shop" element={<ProductLayout />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/projects" element={<Grid />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Services />} />
        
//       </Routes>
//       <Footer />
//     </FilterProvider>
    
//   );
// }

// export default App;



import React from "react";
import { Routes, Route } from "react-router-dom";
import { FilterProvider } from "./pages/context/FilterContext";

// Компоненты для landing-страницы
import HHome from "./pages/home/HHome";
import HHeader from "./pages/home/HHeader";

// Компоненты для остальных страниц
import Header from "./pages/shop/Header";
import Navbar from "./pages/shop/Navbar";
import Footer from "./pages/shop/Footer";
import ProductLayout from "./pages/shop/ProductLayout";
import Contact from "./pages/contact/Contact";
import Grid from "./pages/grid/grid";
import News from "./pages/news/News";
import About from "./pages/about/About";
import Services from "./pages/about/Services";

function App() {
  return (
    <FilterProvider>
      <Routes>
        
        <Route
          path="/"
          element={
            <>
            
              <HHome />
              <Footer/>
            </>
          }
        />
       
        <Route
          path="/shop"
          element={
            <>
              <Header />
              <Navbar />
              <ProductLayout />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Navbar />
              <Grid />
              <Footer />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <Header />
              <Navbar />
              <News />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <Header />
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
      </Routes>
    </FilterProvider>
  );
}

export default App;
