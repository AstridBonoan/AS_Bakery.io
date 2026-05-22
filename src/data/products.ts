import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'lavender-honey-croissant',
    name: 'Lavender Honey Croissant',
    description: 'Buttery layers brushed with local honey and a whisper of lavender.',
    price: 4.5,
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=750&fit=crop&q=80',
    category: 'pastry',
    badge: 'Bestseller',
  },
  {
    id: 'rose-macaron-box',
    name: 'Rose Macaron Box',
    description: 'Six delicate shells filled with raspberry rose ganache.',
    price: 14,
    image:
      'https://images.unsplash.com/photo-1569860876660-933c8e009b8f?w=600&h=750&fit=crop&q=80',
    category: 'pastry',
  },
  {
    id: 'sourdough-boule',
    name: 'Country Sourdough Boule',
    description: '48-hour ferment, crackly crust, open crumb — baked at dawn.',
    price: 9,
    image:
      'https://images.unsplash.com/photo-1549935660-e0999f309c52?w=600&h=750&fit=crop&q=80',
    category: 'bread',
  },
  {
    id: 'olive-focaccia',
    name: 'Olive & Rosemary Focaccia',
    description: 'Olive oil–rich, dimpled top with Castelvetrano olives.',
    price: 7.5,
    image:
      'https://images.unsplash.com/photo-1604067695446-682369c1770a?w=600&h=750&fit=crop&q=80',
    category: 'bread',
  },
  {
    id: 'strawberry-chiffon',
    name: 'Strawberry Chiffon Slice',
    description: 'Cloud-light sponge, mascarpone cream, macerated berries.',
    price: 8.5,
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=750&fit=crop&q=80',
    category: 'cake',
    badge: 'New',
  },
  {
    id: 'chocolate-torte',
    name: 'Midnight Chocolate Torte',
    description: '70% cacao ganache on almond dacquoise — rich, not too sweet.',
    price: 10,
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=750&fit=crop&q=80',
    category: 'cake',
  },
  {
    id: 'spring-rhubarb-tart',
    name: 'Spring Rhubarb Tart',
    description: 'Vanilla custard, pink rhubarb ribbons, pistachio crumble.',
    price: 9.5,
    image:
      'https://images.unsplash.com/photo-1486427944299-d1955d23a34d?w=600&h=750&fit=crop&q=80',
    category: 'seasonal',
    seasonal: true,
    badge: 'Seasonal',
    preOrderOnly: true,
  },
  {
    id: 'peony-cupcake',
    name: 'Peony Buttercream Cupcake',
    description: 'Vanilla bean cake crowned with hand-piped peony frosting.',
    price: 5.5,
    image:
      'https://images.unsplash.com/photo-1616541823724-86f5e1a8e1c3?w=600&h=750&fit=crop&q=80',
    category: 'seasonal',
    seasonal: true,
    badge: 'Limited',
    preOrderOnly: true,
  },
  {
    id: 'lemon-poppy-scone',
    name: 'Lemon Poppy Scone',
    description: 'Bright citrus glaze, tender crumb — perfect with morning tea.',
    price: 4,
    image:
      'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&h=750&fit=crop&q=80',
    category: 'pastry',
  },
]

export const specials = [
  {
    id: 'weekend-box',
    title: 'Weekend Pastry Box',
    subtitle: 'Pick any 4 pastries — save 15%',
    detail: 'Build your box from the gallery. Add four items and the discount applies at checkout.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop&q=80',
    code: 'WEEKEND15',
  },
  {
    id: 'early-bird',
    title: 'Early Bird Bread',
    subtitle: 'Pre-order by Thursday, 20% off loaves',
    detail: 'Reserve sourdough or focaccia for Saturday pickup. Limited batches each week.',
    image:
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&h=500&fit=crop&q=80',
    code: 'DAWN20',
  },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'pastry', label: 'Pastries' },
  { id: 'bread', label: 'Bread' },
  { id: 'cake', label: 'Cakes' },
] as const
