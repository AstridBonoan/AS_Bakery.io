import { useMemo, useState } from 'react'
import { galleryCategories, products } from '../data/products'
import { ProductCard } from './ProductCard'

export function ProductGallery() {
  const [active, setActive] = useState<(typeof galleryCategories)[number]['id']>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return products.filter((p) => !p.seasonal)
    return products.filter((p) => !p.seasonal && p.category === active)
  }, [active])

  return (
    <section id="gallery" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-honey">
            Product gallery
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-cocoa sm:text-4xl">
            Our everyday favorites
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-cocoa-light sm:mx-0">
            Swipe through categories and tap Add to build your Saturday pickup bag.
          </p>
        </div>

        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Product categories"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                active === cat.id
                  ? 'bg-cocoa text-cream'
                  : 'bg-white text-cocoa-light ring-1 ring-cream-dark hover:text-cocoa'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-cocoa-light">No items in this category yet.</p>
        )}
      </div>
    </section>
  )
}
