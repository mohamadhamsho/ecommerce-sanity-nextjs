import React from "react";
import { getCategoryProducts } from "../lib/category-products";
import { IProducts } from "../types/interface";
import Product from "../components/Product";
import { getAllProducts } from "../lib/newest-products";

const allProductPage = async () => {
  const data: IProducts[] = await getAllProducts();

  console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Newest Products for All Products
        </h2>
        <Product data={data} />
      </div>
    </div>
  );
};

export default allProductPage;