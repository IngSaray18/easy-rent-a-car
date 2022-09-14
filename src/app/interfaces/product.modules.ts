export interface Product{

  id: number
  title: string
  price: string
  description: string
  category: {
    id: number
    name: string
    image: string
  }
  images : []
}
