import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const FAQS = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web, mobile, cloud, and AI technologies including React, Next.js, Node.js, Python, FastAPI, PostgreSQL, AWS, Azure, and advanced automation platforms.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Delivery timelines depend on scope and complexity. Most focused MVP engagements take 6 to 10 weeks, while larger enterprise platforms can span several months with phased milestones.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes. We provide structured support, monitoring, optimization, and iterative product enhancements to keep your systems secure, stable, and aligned with evolving business goals.',
  },
  {
    question: 'What is your development process?',
    answer: 'Our process combines strategy, architecture, design, agile development, testing, launch, and continuous improvement. Every project is managed with clear milestones and transparent communication.',
  },
  {
    question: 'Can you work with our existing tech stack?',
    answer: 'Absolutely. We frequently modernize, extend, and integrate with existing applications, APIs, and infrastructure while minimizing disruption to internal teams and current operations.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We establish a clear communication rhythm with shared channels, weekly progress reviews, milestone demos, and dedicated points of contact so stakeholders stay informed throughout delivery.',
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 text-accent-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq" className="section-alt scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto max-w-3xl"
        >
          {FAQS.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <motion.div key={item.question} variants={fadeUp} className="glass mb-4 overflow-hidden rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-white md:text-lg">{item.question}</span>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="section-divider mx-6" />
                      <div className="p-6 pt-5 text-slate-400 leading-7">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
