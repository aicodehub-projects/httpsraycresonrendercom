import { useEffect, useMemo, useState } from 'react'
import { animate, motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.68L9.54 5.98A1 1 0 0 0 8 6.82Z" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m13 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Counter({ value, suffix, duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplayValue(Math.round(latest))
      },
    })

    return () => controls.stop()
  }, [duration, value])

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  )
}

function GlobeVisualization() {
  const nodes = useMemo(
    () => [
      { id: 'n1', x: 118, y: 88, r: 4.5, delay: '0s' },
      { id: 'n2', x: 208, y: 62, r: 4, delay: '0.4s' },
      { id: 'n3', x: 290, y: 110, r: 5, delay: '0.9s' },
      { id: 'n4', x: 322, y: 205, r: 4, delay: '0.3s' },
      { id: 'n5', x: 266, y: 302, r: 5.5, delay: '1.1s' },
      { id: 'n6', x: 162, y: 336, r: 4.5, delay: '0.7s' },
      { id: 'n7', x: 80, y: 270, r: 4, delay: '1.4s' },
      { id: 'n8', x: 66, y: 164, r: 5, delay: '0.5s' },
      { id: 'n9', x: 198, y: 204, r: 3.5, delay: '0.8s' },
      { id: 'n10', x: 132, y: 238, r: 3.5, delay: '1.2s' },
    ],
    [],
  )

  const connections = useMemo(
    () => [
      [118, 88, 208, 62],
      [208, 62, 290, 110],
      [290, 110, 322, 205],
      [322, 205, 266, 302],
      [266, 302, 162, 336],
      [162, 336, 80, 270],
      [80, 270, 66, 164],
      [66, 164, 118, 88],
      [118, 88, 198, 204],
      [208, 62, 198, 204],
      [290, 110, 198, 204],
      [266, 302, 198, 204],
      [162, 336, 198, 204],
      [80, 270, 132, 238],
      [132, 238, 198, 204],
      [66, 164, 132, 238],
    ],
    [],
  )

  return (
    <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px]">
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }

        @keyframes hero-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes hero-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes hero-drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(14px, -12px, 0); }
        }

        .hero-grid-overlay {
          background-image:
            linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
          background-size: 56px 56px;
        }

        .hero-globe-shell {
          animation: hero-float 9s ease-in-out infinite;
        }

        .hero-globe-rotate {
          transform-origin: center;
          animation: hero-rotate 34s linear infinite;
        }

        .hero-pulse-node {
          animation: hero-pulse 3.2s ease-in-out infinite;
          transform-origin: center;
        }

        .hero-orb-float {
          animation: hero-drift 12s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-10 rounded-full border border-white/6 bg-white/[0.02] blur-3xl" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(15,170,255,0.14),transparent_58%)]" />
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.12),transparent_65%)]" />

      <div className="hero-globe-shell relative z-10">
        <svg
          viewBox="0 0 390 390"
          className="hero-globe-rotate h-full w-full overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="heroGlow" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="rgba(15,170,255,0.28)" />
              <stop offset="100%" stopColor="rgba(15,170,255,0)" />
            </radialGradient>
            <linearGradient id="heroStroke" x1="40" y1="40" x2="340" y2="340">
              <stop offset="0%" stopColor="#0FAAFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          <circle cx="195" cy="195" r="152" fill="url(#heroGlow)" />
          <circle cx="195" cy="195" r="148" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
          <circle cx="195" cy="195" r="112" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <circle cx="195" cy="195" r="76" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <ellipse cx="195" cy="195" rx="148" ry="64" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <ellipse cx="195" cy="195" rx="148" ry="112" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <ellipse cx="195" cy="195" rx="64" ry="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <ellipse cx="195" cy="195" rx="112" ry="148" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          {connections.map(([x1, y1, x2, y2], index) => (
            <line
              key={`${x1}-${y1}-${x2}-${y2}-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#heroStroke)"
              strokeOpacity="0.45"
              strokeWidth="1.4"
            />
          ))}

          {nodes.map((node) => (
            <g key={node.id} className="hero-pulse-node" style={{ animationDelay: node.delay }}>
              <circle cx={node.x} cy={node.y} r={node.r * 2.4} fill="#0FAAFF" fillOpacity="0.12" />
              <circle cx={node.x} cy={node.y} r={node.r} fill="#EAF1FF" fillOpacity="0.95" />
              <circle cx={node.x} cy={node.y} r={node.r - 1.4} fill="#0FAAFF" fillOpacity="0.95" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

export default function Hero() {
  const stats = [
    { value: 500, suffix: '+', label: 'Projects' },
    { value: 98, suffix: '%', label: 'Satisfaction' },
    { value: 50, suffix: '+', label: 'Enterprise Clients' },
    { value: 12, suffix: '+', label: 'Years' },
  ]

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(15,170,255,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(5,150,105,0.16),transparent_24%),linear-gradient(180deg,#060D1B_0%,#0A1B33_48%,#060D1B_100%)] pt-28 pb-20"
    >
      <div className="hero-grid-overlay absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,27,0.04)_0%,rgba(6,13,27,0.22)_100%)]" />

      <div className="orb orb-blue hero-orb-float top-20 left-[4%] h-52 w-52" />
      <div className="orb orb-green hero-orb-float right-[10%] top-[18%] h-64 w-64" style={{ animationDelay: '1.8s' }} />
      <div className="orb orb-blue hero-orb-float bottom-12 right-[24%] h-48 w-48" style={{ animationDelay: '0.8s' }} />

      <div className="container-custom relative z-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.06fr)_minmax(420px,0.94fr)] lg:gap-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <div className="badge mb-6">
                <span aria-hidden="true">🚀</span>
                Engineering Tomorrow&apos;s Digital Edge
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-extrabold tracking-tight text-balance text-white md:text-6xl lg:text-7xl"
            >
              <span className="gradient-text-hero">Build Innovative Digital Solutions That Accelerate Growth</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              We deliver enterprise-grade Web Development, AI Automation, Mobile Apps, Cloud Solutions, and
              Digital Transformation services.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-primary justify-center sm:justify-start">
                Request a Demo
                <ArrowRightIcon />
              </a>
              <a href="#case-studies" className="btn-secondary justify-center sm:justify-start">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <PlayIcon />
                </span>
                View Our Work
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                    <span className="gradient-text-hero">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto flex w-full max-w-[540px] items-center justify-center lg:max-w-none"
          >
            <div className="absolute inset-[10%] rounded-full border border-white/8 bg-white/[0.02] blur-2xl" />
            <GlobeVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
