import Image from "next/image";
import { client, urlFor } from "../lib/sanity";

async function getData() {
  const query = "*[_type=='heroImage'][0]";
  const data = await client.fetch(query);

  return data;
}
async function Navbar() {
  const data = await getData();
  return (
    <div>
      Hello From Navbar
      <Image src={urlFor(data.image1).url()} alt="image 01" className="" />
    </div>
  );
}

export default Navbar;
