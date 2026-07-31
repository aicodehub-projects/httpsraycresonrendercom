import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

function HealthIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
    </svg>
  )
}

function FintechIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16M7 4v6M17 4v6M6 14h4M14 14h4M6 18h12" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="5" width="18" height="14" rx="3" />
    </svg>
  )
}

function RetailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 9h12l-1 10H7L6 9Z" strokeLinejoin="round" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    </svg>
  )
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 8.5 12 4l9 4.5L12 13 3 8.5Z" strokeLinejoin="round" />
      <path d="M7 10.5V15c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IoTIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="8" y="8" width="8" height="8" rx="2" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" strokeLinecap="round" />
    </svg>
  )
}

function RealEstateIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 20h16" strokeLinecap="round" />
      <path d="M6 20V9l6-5 6 5v11" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" strokeLinejoin="round" />
    </svg>
  )
}

function LogisticsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 7h11v8H3z" strokeLinejoin="round" />
      <path d="M14 10h3l3 3v2h-6z" strokeLinejoin="round" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}

function MediaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="m10 9 5 3-5 3V9Z" strokeLinejoin="round" />
    </svg>
  )
}

const INDUSTRIES = [
  { name: 'Healthcare & Life Sciences', icon: HealthIcon },
  { name: 'Financial Services & Fintech', icon: FintechIcon },
  { name: 'E-Commerce & Retail', icon: RetailIcon },
  { name: 'Education & EdTech', icon: EducationIcon },
  { name: 'Manufacturing & IoT', icon: IoTIcon },
  { name: 'Real Estate & PropTech', icon: RealEstateIcon },
  { name: 'Logistics & Supply Chain', icon: LogisticsIcon },
  { name: 'Media & Entertainment', icon: MediaIcon },
]

export default function IndustryExpertise() {
  return (
    <section id="industry-expertise" className="section-alt scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            Industries
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Deep Domain <span className="gradient-text">Expertise</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                className="glass card-hover flex items-center gap-3 rounded-xl px-6 py-4 text-left text-slate-200 transition-colors duration-300 hover:border-accent-500/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/4 text-accent-500">
                  <Icon />
                </span>
                <span className="text-sm font-medium leading-6 text-slate-200 md:text-base">{industry.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
