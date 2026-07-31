import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const SOLUTIONS = ['Web Dev', 'Mobile Apps', 'AI & Automation', 'Cloud', 'UI/UX', 'Digital Transformation']
const COMPANY = ['About', 'Careers', 'Blog', 'Case Studies', 'Contact', 'Privacy Policy']

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="section-darker relative bg-[#060D1B]">
      <div className="container-custom">
        <div className="section-divider" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="py-16 md:py-20"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <a href="#top" className="inline-flex items-center text-2xl font-bold tracking-tight text-white">
                RayCres
                <span className="ml-1 text-accent-500">.</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
                Engineering premium software products, digital platforms, and transformation solutions for modern
                businesses.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <SocialIcon href="#" label="LinkedIn">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.02 2 2 0 0 0 5.2 7.03h.02a2.01 2.01 0 1 0 .03-4.03ZM20.44 12.56c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.1-3.35 1.87V8.5H9.4c.04.57 0 11.5 0 11.5h3.39v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.38 1.92-1.38 1.36 0 1.9 1.04 1.9 2.56V20H20v-6.89Z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="Twitter X">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.26l-4.9-7.14L5.8 22H2.7l7.25-8.3L1.2 2h6.42l4.43 6.51L18.9 2Zm-1.1 18h1.74L6.66 3.9H4.8L17.8 20Z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="GitHub">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.6 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.02-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.61.07-.61 1 .07 1.52 1.05 1.52 1.05.88 1.57 2.32 1.11 2.88.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.03-2.77-.1-.27-.45-1.33.1-2.77 0 0 .85-.28 2.8 1.06A9.36 9.36 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.95-1.34 2.8-1.06 2.8-1.06.56 1.44.21 2.5.1 2.77.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.84-4.57 5.1.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.28 10.28 0 0 0 22 12.26C22 6.6 17.52 2 12 2Z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="Dribbble">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm6.93 4.62a8.2 8.2 0 0 1 1.87 5.13 17.4 17.4 0 0 0-5.33-.16 24.41 24.41 0 0 0-1.1-2.16 14.08 14.08 0 0 0 4.56-2.81ZM12 3.8a8.16 8.16 0 0 1 5.42 2.04 12.23 12.23 0 0 1-4 2.42A41.97 41.97 0 0 0 10.9 4a8.1 8.1 0 0 1 1.1-.2Zm-3.1.62a36.4 36.4 0 0 1 2.4 4.13 34.77 34.77 0 0 1-7.3.1A8.24 8.24 0 0 1 8.9 4.42ZM3.8 12v-.24a36.17 36.17 0 0 0 8.34-.24c.23.45.45.9.65 1.34l-.31.09c-4.32 1.28-6.61 4.78-7.03 5.47A8.16 8.16 0 0 1 3.8 12Zm3 7.55c.28-.48 2.14-3.54 6.4-4.98.13-.05.27-.09.41-.13a27.76 27.76 0 0 1 1.47 5.43A8.15 8.15 0 0 1 6.8 19.55Zm10 .06a29.9 29.9 0 0 0-1.38-5.12 15.64 15.64 0 0 1 5.22.25 8.2 8.2 0 0 1-3.84 4.87Z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Solutions</h3>
              <ul className="mt-5 space-y-3">
                {SOLUTIONS.map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-sm text-slate-400 transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Company</h3>
              <ul className="mt-5 space-y-3">
                {COMPANY.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-400 transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Get in Touch</h3>
              <div className="mt-5 space-y-4 text-sm text-slate-400">
                <p>hello@raycres.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 RayCres Technologies. All rights reserved.</p>
            <p>Designed with ♥ by RayCres</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
