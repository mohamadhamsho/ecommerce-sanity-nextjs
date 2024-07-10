import React from "react";
import { getCategoryProducts } from "../lib/category-products";
import { IProducts } from "../types/interface";
import Product from "../components/Product";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const data: IProducts[] = await getCategoryProducts(params.category);

  console.log(data);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Newest Products for {params.category}
        </h2>
        <Product data={data} />
      </div>
    </div>
  );
};

export default CategoryPage;
