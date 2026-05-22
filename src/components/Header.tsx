import { usePreorder } from '../context/PreorderContext'

const navLinks = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#seasonal', label: 'Seasonal' },
  { href: '#specials', label: 'Specials' },
  { href: '#preorder', label: 'Pre-order' },
] as const

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href !== '#preorder') return
  e.preventDefault()
  document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Header() {
  const { itemCount, openModal } = usePreorder()

  return (
    <header className="sticky top-0 z-40 border-b border-cream-dark/60 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-tight text-cocoa sm:text-3xl">
            A&amp;S
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-light">
            Bakery
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-cocoa-light transition hover:text-cocoa"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openModal}
          className="relative flex min-h-11 items-center gap-2 rounded-full bg-cocoa px-4 py-2.5 text-sm font-medium text-cream transition active:scale-95 hover:bg-cocoa/90"
          aria-label={`Open pre-order bag with ${itemCount} items`}
        >
          <BagIcon />
          <span className="hidden sm:inline">Bag</span>
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose px-1 text-[11px] font-semibold text-white">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      <nav
        className="flex gap-1 overflow-x-auto border-t border-cream-dark/40 px-4 py-2 md:hidden"
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="shrink-0 rounded-full px-4 py-2 text-sm text-cocoa-light transition hover:bg-cream-dark hover:text-cocoa"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function BagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 8h12l-1 12H7L6 8zm3-3h6a3 3 0 0 1 3 3v2H6v-2a3 3 0 0 1 3-3z"
      />
    </svg>
  )
}
