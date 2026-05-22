export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23a34d?w=1200&h=800&fit=crop&q=85"
            alt="Fresh pastries on a marble counter"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cream/90">
              Handcrafted daily
            </p>
            <h1 className="mt-2 max-w-xl font-serif text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
              Bakes made to be admired — and savored
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/90 sm:text-base">
              Browse our gallery, reserve seasonal favorites, and pick up your
              pre-order in a tap.
            </p>
            <a
              href="#gallery"
              className="mt-6 inline-flex min-h-12 items-center rounded-full bg-cream px-6 py-3 text-sm font-medium text-cocoa transition hover:bg-white"
            >
              Explore the gallery
            </a>
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-3 gap-3 text-center sm:gap-4">
          {[
            { value: '48h', label: 'Sourdough ferment' },
            { value: '100%', label: 'Butter croissants' },
            { value: 'Sat', label: 'Pickup windows' },
          ].map((stat) => (
            <li
              key={stat.label}
              className="rounded-2xl bg-white/80 px-2 py-4 ring-1 ring-cream-dark sm:px-4"
            >
              <span className="font-serif text-xl font-semibold text-rose sm:text-2xl">
                {stat.value}
              </span>
              <p className="mt-1 text-[10px] leading-snug text-cocoa-light sm:text-xs">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
