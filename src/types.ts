export type ProductCategory = 'pastry' | 'bread' | 'cake' | 'seasonal'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: ProductCategory
  seasonal?: boolean
  badge?: string
  preOrderOnly?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface PreorderForm {
  name: string
  email: string
  phone: string
  pickupDate: string
  notes: string
}
