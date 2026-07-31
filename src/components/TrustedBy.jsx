const LOGOS = ['Microsoft', 'Google', 'Amazon', 'Salesforce', 'IBM', 'Oracle', 'SAP', 'Deloitte']

export default function TrustedBy() {
  const items = [...LOGOS, ...LOGOS]

  return (
    <section className="section-dark py-14 md:py-18 lg:py-20">
      <div className="section-divider" />
      <div className="container-custom py-10 md:py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#060D1B] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#060D1B] to-transparent" />

          <div className="animate-marquee flex w-max min-w-full items-center gap-16 whitespace-nowrap">
            {items.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="text-2xl font-bold text-slate-600 opacity-60 transition-opacity duration-300 hover:opacity-100"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  )
}
