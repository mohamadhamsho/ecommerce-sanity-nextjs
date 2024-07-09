import Image from "next/image";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
import { links } from "../constants/nav-links";
import { getData } from "../lib/hero-banner";


const Hero = async () => {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl pb-6 px-4 lg:px-8 lg:max-w-7xl">
      <div className="mb-8 flex flex-wrap justify-between md:mb-2">
        <div
          className="mb-6 flex w-full flex-col justify-center juscecenter
     sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-12"
        >
          <h2 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price
          </h2>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
          Step into style with our collection. Explore the latest fashion trends. Shop now for stylish outfits and exclusive deals to elevate your look.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 md:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="banner 01"
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="banner 02"
              priority
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          {links.slice(1).map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex w-1/3 items-center justify-center text-gray-500 transition hover:bg-gray-100 active:bg-gray-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
