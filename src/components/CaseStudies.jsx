import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const CASE_STUDIES = [
  {
    category: 'Fintech',
    title: 'AI-Powered Analytics Platform',
    description:
      'Delivered a secure intelligence platform that unified fragmented transaction data, automated reporting, and enabled executive teams to act on real-time signals with confidence.',
    metrics: [
      { value: '4x', label: 'faster insights' },
      { value: '60%', label: 'cost reduction' },
    ],
    gradient: 'from-navy-700 via-accent-500 to-accent-300',
  },
  {
    category: 'Retail',
    title: 'Enterprise E-Commerce Suite',
    description:
      'Built a composable digital commerce stack with high-conversion storefronts, advanced personalization, and resilient backend services to support multi-market growth.',
    metrics: [
      { value: '$2.4M', label: 'revenue increase' },
      { value: '340%', label: 'ROI' },
    ],
    gradient: 'from-emerald-600 via-emerald-500 to-navy-700',
  },
  {
    category: 'Healthcare',
    title: 'Cloud Migration & DevOps',
    description:
      'Modernized legacy infrastructure for a healthcare provider with compliant cloud architecture, observability, and deployment automation that improved reliability at scale.',
    metrics: [
      { value: '99.99%', label: 'uptime' },
      { value: '45%', label: 'infra savings' },
    ],
    gradient: 'from-accent-500 via-accent-400 to-emerald-600',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-dark scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            Our Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Featured <span className="gradient-text">Case Studies</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {CASE_STUDIES.map((study) => (
            <motion.article
              key={study.title}
              variants={fadeUp}
              className="glass card-hover overflow-hidden rounded-2xl"
            >
              <div className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${study.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(6,13,27,0.34),transparent_50%)]" />
                <div className="absolute left-6 top-6">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                    {study.category}
                  </span>
                </div>
                <div className="relative px-6 pb-6">
                  <div className="h-12 w-12 rounded-2xl border border-white/12 bg-white/10 backdrop-blur-sm" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-400">{study.description}</p>

                <div className="mt-8 flex flex-wrap gap-4 border-t border-white/8 pt-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="min-w-[140px] flex-1">
                      <div className="text-2xl font-bold text-white md:text-3xl">{metric.value}</div>
                      <div className="mt-1 text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-accent-500 transition-colors duration-300 hover:text-accent-300"
                >
                  Read Case Study <span className="ml-1">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
