import { client } from "../lib/sanity";

export async function getNewestProduct() {
    const query = `
          *[_type == "product"][0...4] | order(releaseDate desc) {
              _id,
              price,
              name,
              "slug": slug.current,
              "categoryName": category -> name,
              "imageUrl": images[0].asset->url,
              description
              }`;
    const data = await client.fetch(query);
  
    return data;
  }