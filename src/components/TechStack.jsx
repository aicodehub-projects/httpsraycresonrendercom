import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const STACK_CATEGORIES = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    name: 'AI & Data',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Scikit-learn', 'Pandas'],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-alt scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            Technology
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Our <span className="gradient-text">Technology Stack</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="space-y-6 md:space-y-7"
        >
          {STACK_CATEGORIES.map((category) => (
            <motion.div key={category.name} variants={fadeUp} className="glass rounded-2xl p-6 md:p-8">
              <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-500">
                {category.name}
              </div>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="glass rounded-lg px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-accent-500/30 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
