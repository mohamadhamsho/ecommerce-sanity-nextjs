import Image from "next/image";
import Link from "next/link";

interface IProductsProps {
  _id: string
  imageUrl: string
  price: number
  slug: string
  categoryName: string
  name: string
}
function Product({ _id, categoryName,imageUrl,name, price, slug }: IProductsProps) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
        <Image
          src={imageUrl}
          alt="Product Image"
          width={300}
          height={300}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${slug}`}>{name}</Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{categoryName}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
}

export default Product;
