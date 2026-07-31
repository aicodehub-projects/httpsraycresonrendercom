import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import IndustryExpertise from './components/IndustryExpertise'
import CaseStudies from './components/CaseStudies'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <IndustryExpertise />
        <CaseStudies />
        <TechStack />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <Blog />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
