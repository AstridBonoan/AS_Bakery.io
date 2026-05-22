import { useState } from 'react'
import { usePreorder } from '../context/PreorderContext'

function minPickupDate() {
  const d = new Date()
  d.setDate(d.getDate() + 2)
  return d.toISOString().split('T')[0]
}

export function PreorderModal() {
  const {
    items,
    isModalOpen,
    closeModal,
    updateQuantity,
    removeItem,
    subtotal,
    form,
    updateForm,
    submitPreorder,
    lastOrderId,
  } = usePreorder()

  const [error, setError] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  if (!isModalOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const ok = submitPreorder()
    if (ok) {
      setConfirmed(true)
      setTimeout(() => setConfirmed(false), 5000)
    } else {
      setError('Please add items and fill in name, email, and pickup date.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-cocoa/40 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="preorder-title"
    >
      <div className="flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[2rem] bg-cream sm:rounded-[2rem]">
        <div className="flex items-center justify-between border-b border-cream-dark px-5 py-4">
          <h2 id="preorder-title" className="font-serif text-2xl font-semibold text-cocoa">
            Your pre-order
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa-light transition hover:bg-cream-dark hover:text-cocoa"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {confirmed && lastOrderId ? (
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage/30 text-2xl">
              ✓
            </div>
            <p className="font-serif text-xl text-cocoa">You&apos;re on the list!</p>
            <p className="mt-2 text-sm text-cocoa-light">
              Confirmation <strong className="text-cocoa">{lastOrderId}</strong>. We&apos;ll
              email your pickup details.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 min-h-11 rounded-full bg-cocoa px-8 py-2.5 text-sm font-medium text-cream"
            >
              Continue browsing
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <li className="py-8 text-center text-sm text-cocoa-light">
                  Your bag is empty. Add treats from the gallery.
                </li>
              ) : (
                items.map(({ product, quantity }) => (
                  <li
                    key={product.id}
                    className="flex gap-3 border-b border-cream-dark py-4 last:border-0"
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="h-16 w-16 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-cocoa">{product.name}</p>
                      <p className="text-sm text-cocoa-light">
                        ${product.price.toFixed(2)} each
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-cream-dark"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-medium">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-cream-dark"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(product.id)}
                          className="ml-auto text-xs text-rose"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>

            <form onSubmit={handleSubmit} className="border-t border-cream-dark bg-white p-5">
              {error && (
                <p className="mb-3 rounded-xl bg-rose/10 px-3 py-2 text-sm text-rose" role="alert">
                  {error}
                </p>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium text-cocoa-light">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-cream-dark bg-cream px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-cocoa-light">Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-cream-dark bg-cream px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-cocoa-light">Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm({ phone: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-cream-dark bg-cream px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium text-cocoa-light">Pickup date</span>
                  <input
                    type="date"
                    required
                    min={minPickupDate()}
                    value={form.pickupDate}
                    onChange={(e) => updateForm({ pickupDate: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-cream-dark bg-cream px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium text-cocoa-light">Notes (optional)</span>
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) => updateForm({ notes: e.target.value })}
                    placeholder="Allergies, gift message, pickup time preference…"
                    className="mt-1 w-full resize-none rounded-xl border border-cream-dark bg-cream px-3 py-2.5 text-sm outline-none focus:border-blush-deep"
                  />
                </label>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-medium text-cocoa">
                  Total <span className="text-rose">${subtotal.toFixed(2)}</span>
                </span>
                <button
                  type="submit"
                  disabled={items.length === 0}
                  className="min-h-12 rounded-full bg-cocoa px-6 py-3 text-sm font-semibold text-cream transition enabled:hover:bg-cocoa/90 disabled:opacity-40"
                >
                  Place pre-order
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
