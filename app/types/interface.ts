export interface ILinks {
  href: string;
  name: string;
}
export interface IProducts {
  _id: string
  imageUrl: string
  price: number
  slug: string
  categoryName: string
  name: string
}

export interface ISingleProduct {
  _id: string
  images: any
  price: number
  slug: string
  categoryName: string
  name: string
  description: string
  price_id: string
}