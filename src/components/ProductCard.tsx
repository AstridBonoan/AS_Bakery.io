import type { Product } from '../types'
import { usePreorder } from '../context/PreorderContext'

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const { addItem } = usePreorder()

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-cream-dark/80 transition hover:shadow-md ${
        featured ? 'md:flex-row md:items-stretch' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-cream-dark ${
          featured ? 'aspect-[4/5] md:aspect-auto md:w-2/5 md:min-h-[280px]' : 'aspect-[4/5]'
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-rose shadow-sm backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        {product.preOrderOnly && (
          <span className="absolute bottom-3 right-3 rounded-full bg-cocoa/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cream backdrop-blur-sm">
            Pre-order
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-4 ${featured ? 'md:justify-center md:p-6' : ''}`}>
        <h3 className="font-serif text-xl font-semibold text-cocoa">{product.name}</h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-cocoa-light">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-medium text-cocoa">${product.price.toFixed(2)}</span>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="min-h-11 min-w-[100px] rounded-full bg-blush px-4 py-2.5 text-sm font-medium text-cocoa transition active:scale-95 hover:bg-blush-deep"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
