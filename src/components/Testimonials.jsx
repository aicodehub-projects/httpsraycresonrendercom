import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    title: 'CTO, TechVentures',
    initials: 'SC',
    quote: 'RayCres transformed our digital infrastructure with exceptional precision. Their team brought strategic clarity, flawless execution, and a level of technical maturity that elevated our entire platform.',
    gradient: 'from-accent-500 to-emerald-600',
  },
  {
    name: 'Michael Rodriguez',
    title: 'VP Engineering, DataFlow',
    initials: 'MR',
    quote: 'Their AI solutions exceeded expectations across performance, reliability, and business impact. RayCres felt like an extension of our internal engineering team from day one.',
    gradient: 'from-navy-700 to-accent-500',
  },
  {
    name: 'Priya Patel',
    title: 'CEO, InnovateCo',
    initials: 'PP',
    quote: 'Outstanding team, delivered on time and budget while maintaining an uncompromising focus on quality. RayCres helped us launch with confidence and scale with speed.',
    gradient: 'from-emerald-600 to-accent-500',
  },
]

function StarRating() {
  return (
    <div className="mb-5 flex items-center gap-1.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-4 w-4 fill-amber-400" aria-hidden="true">
          <path d="M12 2.5l2.95 6.28 6.93.83-5.1 4.73 1.36 6.83L12 17.77l-6.14 3.4 1.36-6.83-5.1-4.73 6.93-.83L12 2.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-dark scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              className="glass card-hover rounded-2xl p-8"
            >
              <div className="mb-3 text-5xl leading-none text-accent-500/20">&ldquo;</div>
              <StarRating />
              <p className="text-slate-300 italic leading-8">{testimonial.quote}</p>
              <div className="section-divider my-6" />
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-sm font-bold text-white`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.title}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
