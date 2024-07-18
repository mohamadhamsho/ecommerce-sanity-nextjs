import Link from "next/link";
import { IProducts } from "../types/interface";
import { ArrowRight } from "lucide-react";
import { getNewestProduct } from "../lib/newest-products";
import Product from "./Product";

async function Newest() {
  const data: IProducts[] = await getNewestProduct();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Title & Link See All */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>
          <Link
            href="/products"
            className="text-primary flex items-center gap-x-1"
          >
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        {/* Product Array*/}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newest;
