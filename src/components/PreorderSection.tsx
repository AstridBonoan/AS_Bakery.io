import { usePreorder } from '../context/PreorderContext'

const steps = [
  {
    step: '1',
    title: 'Browse & add',
    detail: 'Tap Add on gallery or seasonal items to fill your bag.',
  },
  {
    step: '2',
    title: 'Choose pickup',
    detail: 'Pick a Saturday date and leave any notes for the bakers.',
  },
  {
    step: '3',
    title: 'Confirm',
    detail: 'Place your pre-order — we’ll email your pickup details.',
  },
]

export function PreorderSection() {
  const { itemCount, subtotal, openModal } = usePreorder()

  return (
    <section
      id="preorder"
      className="scroll-mt-28 border-t border-cream-dark/60 bg-gradient-to-b from-cream to-cream-dark/50 px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose">
            Pre-order
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-cocoa sm:text-4xl">
            Reserve your pickup
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-cocoa-light">
            Order ahead for Saturday pickup. Seasonal items are baked in small
            batches — pre-ordering guarantees yours.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl bg-white/90 p-5 ring-1 ring-cream-dark"
            >
              <span className="font-serif text-2xl font-semibold text-honey">
                {item.step}
              </span>
              <h3 className="mt-2 font-medium text-cocoa">{item.title}</h3>
              <p className="mt-1 text-sm text-cocoa-light">{item.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-cream-dark sm:p-8">
          {itemCount > 0 ? (
            <p className="text-center text-sm text-cocoa-light">
              <span className="font-medium text-cocoa">
                {itemCount} {itemCount === 1 ? 'item' : 'items'}
              </span>{' '}
              in your bag · Subtotal{' '}
              <span className="font-medium text-rose">${subtotal.toFixed(2)}</span>
            </p>
          ) : (
            <p className="text-center text-sm text-cocoa-light">
              Your bag is empty — add treats from the gallery to get started.
            </p>
          )}
          <button
            type="button"
            onClick={openModal}
            className="min-h-12 w-full max-w-sm rounded-full bg-cocoa px-8 py-3 text-sm font-semibold text-cream transition active:scale-95 hover:bg-cocoa/90"
          >
            {itemCount > 0 ? 'Review & place pre-order' : 'Open pre-order bag'}
          </button>
          <a
            href="#gallery"
            className="text-sm text-cocoa-light underline-offset-4 transition hover:text-cocoa hover:underline"
          >
            Browse the gallery
          </a>
        </div>
      </div>
    </section>
  )
}
