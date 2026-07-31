import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const POSTS = [
  {
    title: 'The Future of AI in Enterprise Software',
    category: 'AI & ML',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt:
      'Explore how modern enterprises are embedding AI across operations, automation, and decision systems to create measurable competitive advantage.',
    gradient: 'from-accent-500/90 via-cyan-400/80 to-navy-700',
    badgeClass: 'border-accent-500/20 bg-accent-500/10 text-accent-300',
  },
  {
    title: 'Building Scalable Cloud Architecture',
    category: 'Cloud',
    readTime: '8 min read',
    date: 'May 2026',
    excerpt:
      'A practical framework for designing resilient cloud platforms that support performance, security, and sustainable business growth at scale.',
    gradient: 'from-emerald-600/90 via-teal-500/70 to-navy-800',
    badgeClass: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300',
  },
  {
    title: 'Design Systems That Scale',
    category: 'UI/UX',
    readTime: '6 min read',
    date: 'April 2026',
    excerpt:
      'Learn how unified design systems help software teams move faster, maintain consistency, and deliver premium digital experiences across products.',
    gradient: 'from-navy-700 via-accent-500/75 to-emerald-600/80',
    badgeClass: 'border-white/15 bg-white/10 text-slate-200',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section-dark scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <motion.span variants={fadeUp} className="badge mb-4">
            Insights
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Latest from Our <span className="gradient-text">Blog</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="glass card-hover overflow-hidden rounded-2xl"
            >
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(6,13,27,0.02),rgba(6,13,27,0.28))]" />
                <div className="absolute right-5 top-5">
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase ${post.badgeClass}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold leading-7 text-white transition-colors hover:text-accent-500">
                  <a href="#blog">{post.title}</a>
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">{post.excerpt}</p>

                <a
                  href="#blog"
                  className="mt-6 inline-flex items-center text-sm font-medium text-accent-500 transition-colors hover:text-white"
                >
                  Read Article <span className="ml-1">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
