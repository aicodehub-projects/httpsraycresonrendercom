import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const PLANS = [
  {
    name: 'Starter',
    price: '$2,999',
    period: '/project',
    description: 'Perfect for startups and MVPs',
    featured: false,
    cta: 'Get Started',
    features: [
      'Product discovery workshop',
      'Responsive web experience',
      'Core UI/UX design',
      'Up to 10 key screens',
      'Launch support included',
    ],
  },
  {
    name: 'Professional',
    price: '$9,999',
    period: '/project',
    description: 'For growing businesses',
    featured: true,
    cta: 'Book a Strategy Call',
    features: [
      'Everything in Starter',
      'Custom application development',
      'Advanced integrations',
      'Scalable architecture planning',
      'QA and performance testing',
      'Cloud deployment support',
      'Analytics and reporting setup',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored enterprise solutions',
    featured: false,
    cta: 'Contact Sales',
    features: [
      'Dedicated solution team',
      'Enterprise architecture',
      'Security and compliance planning',
      'AI and automation workflows',
      'Multi-platform delivery',
      'Complex system integrations',
      'Priority SLA support',
      'Long-term roadmap execution',
    ],
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2.2" aria-hidden="true">
      <path d="M4.5 10.5 8 14l7.5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-dark scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            Pricing
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start"
        >
          {PLANS.map((plan) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'glass card-hover glow-blue scale-100 border border-accent-500/30 lg:scale-105'
                  : 'glass card-hover'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-500 to-emerald-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.period ? <span className="ml-1 text-slate-400">{plan.period}</span> : null}
              </div>

              <ul className="mb-8 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 ring-1 ring-emerald-500/30">
                      <CheckIcon />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={plan.featured ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                {plan.cta}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
