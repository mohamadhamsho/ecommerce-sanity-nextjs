import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import { getSingleProduct } from "@/app/lib/single-product";
import { ISingleProduct } from "@/app/types/interface";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function SingleProduct({ params }: { params: { slug: string } }) {
  const data: ISingleProduct = await getSingleProduct(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span>{data.categoryName}</span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-2xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="gap-x-2 rounded-full">
                <span className="text-sm pr-1">4.2</span>
                <Star className="size-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                76 Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-gray-400 line-through">
                  ${(data.price + 30).toFixed(2)}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Inc. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="size-6" />
              <span className="text-sm">2-4 days shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
              />
              <Button variant={"secondary"}>Checkout now</Button>
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
