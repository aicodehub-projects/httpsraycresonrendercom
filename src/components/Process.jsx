import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const STEPS = [
  {
    title: 'Discovery & Strategy',
    description: 'Understanding your goals and challenges to define the right product, platform, and business direction.',
  },
  {
    title: 'Planning & Architecture',
    description: 'Technical roadmap and system design built for scalability, resilience, and long-term maintainability.',
  },
  {
    title: 'Design & Prototyping',
    description: 'UI/UX wireframes and interactive prototypes that validate the experience before engineering begins.',
  },
  {
    title: 'Development & Testing',
    description: 'Agile sprints with continuous integration, rigorous QA, and transparent delivery throughout the build.',
  },
  {
    title: 'Deployment & Launch',
    description: 'Cloud deployment and performance optimization to ensure a secure, stable, and production-ready release.',
  },
  {
    title: 'Support & Evolution',
    description: 'Ongoing maintenance and feature development that keeps your product improving after launch.',
  },
]

function TimelineStep({ step, index }) {
  const alignLeft = index % 2 === 0

  return (
    <motion.div variants={fadeUp} className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
      <div className={`${alignLeft ? 'md:pr-14' : 'md:order-2 md:pl-14'} relative`}>
        <div className={`glass rounded-xl p-6 ${alignLeft ? 'md:text-right' : 'md:text-left'}`}>
          <div className="mb-3 inline-flex rounded-full border border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
            Step {index + 1}
          </div>
          <h3 className="text-xl font-bold text-white">{step.title}</h3>
          <p className="mt-3 text-slate-400 leading-7">{step.description}</p>
        </div>
      </div>

      <div className={`${alignLeft ? 'md:order-2' : 'md:order-1 md:pr-0'} hidden md:block`} />

      <div className="absolute left-0 top-6 md:left-1/2 md:-translate-x-1/2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-emerald-600 text-sm font-bold text-white shadow-[0_12px_32px_rgba(15,170,255,0.3)] md:h-14 md:w-14 md:text-base">
          {index + 1}
        </div>
      </div>
    </motion.div>
  )
}

export default function Process() {
  return (
    <section id="process" className="section-alt scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            How We Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Our Proven <span className="gradient-text">Process</span>
          </motion.h2>
        </motion.div>

        <div className="relative mx-auto max-w-6xl space-y-8 md:space-y-10">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-accent-500 via-accent-400 to-emerald-600 md:left-1/2 md:-translate-x-1/2" />
          {STEPS.map((step, index) => (
            <TimelineStep key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
