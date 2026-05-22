import { products } from '../data/products'
import { ProductCard } from './ProductCard'

export function SeasonalSection() {
  const seasonal = products.filter((p) => p.seasonal)

  return (
    <section
      id="seasonal"
      className="scroll-mt-24 bg-gradient-to-b from-blush/30 to-cream px-4 py-10 sm:px-6 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
              Seasonal collection
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-cocoa sm:text-4xl">
              Spring on the counter
            </h2>
            <p className="mt-2 max-w-md text-sm text-cocoa-light">
              Small-batch treats that rotate with the season. Pre-order to guarantee
              yours before we sell out.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-blush/50">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sage" aria-hidden />
            <span className="text-sm text-cocoa-light">
              <strong className="font-medium text-cocoa">Now baking:</strong> rhubarb &amp; peony
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {seasonal.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
