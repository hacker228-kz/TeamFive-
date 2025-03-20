
import React from "react";
import { ProductCard } from "./ProductCard";
import { useFilter } from "../context/FilterContext";
import apples from "../../assets/fruits/apples.png";
import bananas from "../../assets/fruits/bananas.png";
import carrot from "../../assets/fruits/carrot.png";
import garlic from "../../assets/fruits/garlic.png";
import grapes from "../../assets/fruits/grapes.png";
import lettuce from "../../assets/fruits/lettuce.png";
import onions from "../../assets/fruits/onions.png";
import potatos from "../../assets/fruits/potatos.png";
import redgrapes from "../../assets/fruits/redgrapes.png"


const products = [
    {
      id: "1",
      name: "Apples",
      price: 50.0,
      image: apples,
      rating: 5,
    },
    {
      id: "2",
      name: "Bananas",
      price: 20.0,
      image: bananas,
      rating: 5,
    },
    {
      id: "3",
      name: "Carrot",
      price: 50.0,
      image: carrot,
      rating: 5,
    },
    {
      id: "4",
      name: "Garlic",
      price: 20.0,
      image: garlic,
      rating: 5,
    },
    {
      id: "5",
      name: "Grapes",
      price: 100.0,
      image: grapes,
      rating: 5,
    },
    {
      id: "6",
      name: "Lettuce",
      price: 30.0,
      image: lettuce,
      rating: 5,
    },
    {
      id: "7",
      name: "Onions",
      price: 20.0,
      image: onions,
      rating: 5,
    },
    {
      id: "8",
      name: "Potatos",
      price: 30.0,
      image: potatos,
      rating: 5,
    },
    {
      id: "9",
      name: "Red Grapes",
      price: 100.0,
      image: redgrapes,
      rating: 5,
    },
  ];

export const ProductGrid = () => {
  const { search, priceRange } = useFilter();
  
  // Filter products based on search and price range
  const filteredProducts = products.filter(product => {
    // Check if product name matches search
    const matchesSearch = product.name.toLowerCase().includes((search || "").toLowerCase());
    
    // Check if product price is within range
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="grid grid-cols-3 gap-[30px] max-md:grid-cols-2 max-sm:grid-cols-1 ">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product}  />
        ))
      ) : (
        <div className="col-span-3 text-center py-10 text-gray-500">
          No products match your search criteria
        </div>
      )}
    </div>
  );
};