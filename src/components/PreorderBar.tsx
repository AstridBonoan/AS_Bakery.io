import { usePreorder } from '../context/PreorderContext'

export function PreorderBar() {
  const { itemCount, subtotal, openModal } = usePreorder()

  if (itemCount === 0) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-cream-dark bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(92,74,66,0.08)] backdrop-blur-md sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cocoa">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your bag
          </p>
          <p className="text-xs text-cocoa-light">Subtotal ${subtotal.toFixed(2)}</p>
        </div>
        <button
          type="button"
          onClick={openModal}
          className="min-h-12 flex-1 max-w-xs rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition active:scale-95 hover:bg-rose/90 sm:flex-none"
        >
          Review pre-order
        </button>
      </div>
    </div>
  )
}
