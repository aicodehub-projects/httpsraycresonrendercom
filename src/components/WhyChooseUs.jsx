import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

function ReliabilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
      <path d="M12 3 5 6v6c0 5 3.4 7.8 7 9 3.6-1.2 7-4 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </svg>
  )
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
      <path d="M4 13a8 8 0 1 1 16 0" />
      <path d="M4 13v3a2 2 0 0 0 2 2h1.5v-6H6a2 2 0 0 0-2 2Z" />
      <path d="M20 13v3a2 2 0 0 1-2 2h-1.5v-6H18a2 2 0 0 1 2 2Z" />
      <path d="M12 19v2" />
    </svg>
  )
}

function AgileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.34-5.66" />
      <path d="M20 4v6h-6" />
      <path d="M12 8v4l2.5 2.5" />
    </svg>
  )
}

const FEATURES = [
  {
    title: '99.9% Uptime SLA',
    description: 'Enterprise reliability engineered into every release, environment, and cloud workload we deliver.',
    icon: ReliabilityIcon,
  },
  {
    title: 'SOC 2 Compliant',
    description: 'Security-first practices, governance controls, and compliance-minded delivery for modern digital systems.',
    icon: SecurityIcon,
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support teams, proactive monitoring, and rapid response for business-critical operations.',
    icon: SupportIcon,
  },
  {
    title: 'Agile Delivery',
    description: 'Sprint-based execution with transparent collaboration, fast iteration, and measurable milestones.',
    icon: AgileIcon,
  },
]

const STATS = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Global Engagements' },
  { value: 12, suffix: '+', label: 'Years of Delivery' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function StatCard({ value, suffix, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    })

    return () => controls.stop()
  }, [isInView, value])

  return (
    <motion.div ref={ref} variants={fadeUp} transition={{ duration: 0.6 }} className="glass rounded-2xl p-6">
      <div className="gradient-text text-4xl font-extrabold tracking-tight">{displayValue}{suffix}</div>
      <p className="mt-3 text-sm font-medium text-slate-300 md:text-base">{label}</p>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" className="section-dark scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-14 max-w-3xl"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-5">
            <span className="badge">Why RayCres</span>
          </motion.div>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            <span className="gradient-text">Built for Enterprise Scale</span>
          </motion.h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-5"
          >
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <motion.div key={feature.title} variants={fadeUp} transition={{ duration: 0.6 }} className="glass card-hover rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-[#0FAAFF]">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400 md:text-base">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-2 gap-5"
          >
            {STATS.map((stat) => (
              <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
