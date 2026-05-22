export function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-cream-dark/40 px-4 py-10 pb-28 sm:px-6 sm:pb-10">
      <div className="mx-auto max-w-6xl text-center sm:text-left">
        <p className="font-serif text-2xl font-semibold text-cocoa">A&amp;S Bakery</p>
        <p className="mt-2 text-sm text-cocoa-light">
          Open Fri–Sun · 7am – 2pm · Pre-orders encouraged
        </p>
        <p className="mt-6 text-xs text-cocoa-light/80">
          © {new Date().getFullYear()} A&amp;S Bakery. Images via Unsplash.
        </p>
      </div>
    </footer>
  )
}
