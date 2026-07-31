import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  )
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
      <path d="M9 3.5a3 3 0 0 0-3 3V7a3 3 0 0 0-2.5 3 3 3 0 0 0 1.1 2.33A3.5 3.5 0 0 0 7 18.5h2" />
      <path d="M15 3.5a3 3 0 0 1 3 3V7a3 3 0 0 1 2.5 3 3 3 0 0 1-1.1 2.33A3.5 3.5 0 0 1 17 18.5h-2" />
      <path d="M12 3v18" />
      <path d="M9 8.5h.01" />
      <path d="M15 8.5h.01" />
      <path d="M8.5 13.5c.9 1 2 1.5 3.5 1.5" />
      <path d="M15.5 13.5c-.9 1-2 1.5-3.5 1.5" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
      <path d="M7 18.5h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 8.3 4.5 4.5 0 0 0 7 18.5Z" />
    </svg>
  )
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9c0-1.4-1.1-2.5-2.5-2.5H16a2 2 0 0 1-2-2V5.5C14 4.1 12.9 3 11.5 3H12Z" />
      <circle cx="7.5" cy="12.5" r="1" />
      <circle cx="10" cy="8" r="1" />
      <circle cx="16.5" cy="13" r="1" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" aria-hidden="true">
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </svg>
  )
}

const SERVICES = [
  {
    title: 'Web Development',
    description: 'React, Next.js, and enterprise web platforms engineered for performance, resilience, and long-term scale.',
    icon: GlobeIcon,
  },
  {
    title: 'Mobile App Development',
    description: 'Premium iOS, Android, and cross-platform products with seamless experiences across every device.',
    icon: MobileIcon,
  },
  {
    title: 'AI & Automation',
    description: 'ML models and intelligent workflows that streamline operations, improve decisions, and unlock efficiency.',
    icon: BrainIcon,
  },
  {
    title: 'Cloud Solutions',
    description: 'AWS, Azure, and GCP architecture for secure, scalable infrastructure, migration, and modernization.',
    icon: CloudIcon,
  },
  {
    title: 'UI/UX Design',
    description: 'Research-driven design systems and interfaces that elevate usability, trust, and conversion quality.',
    icon: DesignIcon,
  },
  {
    title: 'Digital Transformation',
    description: 'Legacy modernization programs that connect systems, automate delivery, and accelerate business evolution.',
    icon: LayersIcon,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section-alt scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-5">
            <span className="badge">What We Do</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Enterprise <span className="gradient-text">Digital Solutions</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-5 text-base leading-8 text-slate-400 md:text-lg"
          >
            RayCres delivers strategic engineering, product design, and scalable platforms for ambitious organizations.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="glass card-hover rounded-2xl p-8"
              >
                <div className="mb-6 inline-flex rounded-2xl border border-white/8 bg-white/3 p-3 text-[#0FAAFF]">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-400">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#0FAAFF] transition-colors duration-300 hover:text-white"
                >
                  Learn more <span className="ml-1">→</span>
                </a>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
