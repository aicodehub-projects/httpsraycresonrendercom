import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="section-divider mb-10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(135deg,#0A1B33_0%,#0E2845_55%,#0A1B33_100%)] px-6 py-16 text-center shadow-[0_30px_100px_rgba(3,10,24,0.55)] sm:px-10 md:px-16 md:py-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
          <div className="orb orb-blue left-[12%] top-8 h-40 w-40 glow-blue" />
          <div className="orb orb-green bottom-10 right-[10%] h-44 w-44 glow-green" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,170,255,0.08),transparent_45%)]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Ready to Transform Your Digital Future?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Let&apos;s discuss how RayCres can accelerate your business growth with cutting-edge technology
              solutions.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary justify-center">
                Start Your Project
              </a>
              <a href="#contact" className="btn-secondary justify-center">
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>

        <div className="section-divider mt-10" />
      </div>
    </section>
  )
}
