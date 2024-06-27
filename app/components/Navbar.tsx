import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { cache } from "react";

async function getData() {
  const query = "*[_type=='heroImage'][0]";
  const data = await client.fetch(query, { cache: "no-store" });

  return data;
}
// export const revalidate = 30; // revalidate at most every hour
async function Navbar() {
  const data = await getData();
  return (
    <div>
      Hello From Navbar b
      <Image
        src={urlFor(data.image1).url()}
        alt="image 01"
        className=""
        width={320}
        height={320}
      />
      <Image
        src={urlFor(data.image2).url()}
        alt="image 02"
        className=""
        width={320}
        height={320}
      />
    </div>
  );
}

export default Navbar;
