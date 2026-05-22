import type { Product } from '../types'
import { assetUrl } from '../utils/assetUrl'

export const products: Product[] = [
  {
    id: 'lavender-honey-croissant',
    name: 'Lavender Honey Croissant',
    description: 'Buttery layers brushed with local honey and a whisper of lavender.',
    price: 4.5,
    image: assetUrl('images/croissant.jpg'),
    category: 'pastry',
    badge: 'Bestseller',
  },
  {
    id: 'rose-macaron-box',
    name: 'Rose Macaron Box',
    description: 'Six delicate shells filled with raspberry rose ganache.',
    price: 14,
    image: assetUrl('images/macarons.jpg'),
    category: 'pastry',
  },
  {
    id: 'sourdough-boule',
    name: 'Country Sourdough Boule',
    description: '48-hour ferment, crackly crust, open crumb — baked at dawn.',
    price: 9,
    image: assetUrl('images/sourdough.jpg'),
    category: 'bread',
  },
  {
    id: 'olive-focaccia',
    name: 'Olive & Rosemary Focaccia',
    description: 'Olive oil–rich, dimpled top with Castelvetrano olives.',
    price: 7.5,
    image: assetUrl('images/focaccia.jpg'),
    category: 'bread',
  },
  {
    id: 'strawberry-chiffon',
    name: 'Strawberry Chiffon Slice',
    description: 'Cloud-light sponge, mascarpone cream, macerated berries.',
    price: 8.5,
    image: assetUrl('images/strawberry-cake.jpg'),
    category: 'cake',
    badge: 'New',
  },
  {
    id: 'chocolate-torte',
    name: 'Midnight Chocolate Torte',
    description: '70% cacao ganache on almond dacquoise — rich, not too sweet.',
    price: 10,
    image: assetUrl('images/chocolate-torte.jpg'),
    category: 'cake',
  },
  {
    id: 'spring-rhubarb-tart',
    name: 'Spring Rhubarb Tart',
    description: 'Vanilla custard, pink rhubarb ribbons, pistachio crumble.',
    price: 9.5,
    image: assetUrl('images/rhubarb-tart.jpg'),
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
    image: assetUrl('images/cupcakes.jpg'),
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
    image: assetUrl('images/pastry-tart.jpg'),
    category: 'pastry',
  },
]

export const specials = [
  {
    id: 'weekend-box',
    title: 'Weekend Pastry Box',
    subtitle: 'Pick any 4 pastries — save 15%',
    detail: 'Build your box from the gallery. Add four items and the discount applies at checkout.',
    image: assetUrl('images/pastry-box.jpg'),
    code: 'WEEKEND15',
  },
  {
    id: 'early-bird',
    title: 'Early Bird Bread',
    subtitle: 'Pre-order by Thursday, 20% off loaves',
    detail: 'Reserve sourdough or focaccia for Saturday pickup. Limited batches each week.',
    image: assetUrl('images/bread-loaf.jpg'),
    code: 'DAWN20',
  },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'pastry', label: 'Pastries' },
  { id: 'bread', label: 'Bread' },
  { id: 'cake', label: 'Cakes' },
] as const
