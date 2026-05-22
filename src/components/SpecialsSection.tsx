import { specials } from '../data/products'

export function SpecialsSection() {
  return (
    <section id="specials" className="scroll-mt-24 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-honey">
            This week&apos;s specials
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-cocoa sm:text-4xl">
            Sweet deals
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {specials.map((special, index) => (
            <article
              key={special.id}
              className={`overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-cream-dark ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } flex flex-col lg:flex-row`}
            >
              <div className="aspect-[16/10] lg:aspect-auto lg:w-1/2">
                <img
                  src={special.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold text-cocoa sm:text-3xl">
                  {special.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-rose">{special.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-light">{special.detail}</p>
                <p className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-cream-dark px-4 py-2 text-xs font-medium text-cocoa">
                  Mention at pickup:
                  <code className="rounded bg-white px-2 py-0.5 font-mono text-rose">
                    {special.code}
                  </code>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
