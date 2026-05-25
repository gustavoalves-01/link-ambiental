import { ModalProvider } from '@/components/ModalProvider'
import Header          from '@/components/Header'
import HeroEase        from '@/components/HeroEase'
import PainSection     from '@/components/PainSection'
import StatsSection    from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection  from '@/components/ProcessSection'
import PillarsSection  from '@/components/PillarsSection'
import SegmentSection  from '@/components/SegmentSection'
import CtaFinalSection from '@/components/CtaFinalSection'
import Footer          from '@/components/Footer'
import RevealObserver  from '@/components/RevealObserver'

export default function Home() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <HeroEase />
        <PainSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <PillarsSection />
        <SegmentSection />
        <CtaFinalSection />
      </main>
      <Footer />
      <RevealObserver />
    </ModalProvider>
  )
}
