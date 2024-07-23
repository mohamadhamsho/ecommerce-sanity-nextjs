import Link from 'next/link'
import { IProducts } from '../types/interface'
import { ArrowRight } from 'lucide-react'
import { getNewestProduct } from '../lib/newest-products'
import Product from './Product'
import Image from 'next/image'
import banner from '../assets/gradient-horizontal-banner-template-cyber-monday-sale_23-2150842100.jpg'
async function Newest() {
  const data: IProducts[] = await getNewestProduct()

  return (
    <div className="bg-white pt-4">
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
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.slice(0, 4).map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <Image
          src={banner}
          alt="banner"
          width={600}
          height={300}
          className="w-full h-[250px] md:h-[340px] lg:h-[500px] object-cover object-center rounded-lg"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Title & Link See All */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Most Popular Products
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
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.slice(4, 8).map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Newest
