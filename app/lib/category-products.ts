import { client } from "../lib/sanity";

export async function getCategoryProducts(category: string) {
    const query = `
          *[_type == "product" && category->name == "${category}"]{
              _id,
              price,
              name,
              "slug": slug.current,
              "categoryName": category -> name,
              "imageUrl": images[0].asset->url,
              }`;
    const data = await client.fetch(query);
  
    return data;
  }
export async function getSimilarProducts(category: string) {
    const query = `
          *[_type == "product" && category->name == "${category}"][0...3]{
              _id,
              price,
              name,
              "slug": slug.current,
              "categoryName": category -> name,
              "imageUrl": images[0].asset->url,
              }`;
    const data = await client.fetch(query);
  
    return data;
  }