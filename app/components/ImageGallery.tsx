"use client";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface IImageGalleryProps {
  images: any;
}

function ImageGallery({ images }: IImageGalleryProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleChangeImage = (image: any) => {
    setBigImage(image)
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="photo"
              priority
              width={200}
              height={300}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={()=>handleChangeImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="big photo"
          priority
          width={500}
          height={500}
          className="h-full w-full object-cover object-center cursor-pointer"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-primary px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
      </div>
    </div>
  );
}

export default ImageGallery;
