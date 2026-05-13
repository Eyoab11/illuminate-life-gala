import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import About from '@/components/About';
import DrErsnoSection1 from '@/components/DrErsnoSection1';
import Programs from '@/components/Programs';
import Experience from '@/components/Experience';
import DrErsnoSection2 from '@/components/DrErsnoSection2';
import Tickets from '@/components/Tickets';
import Sponsors from '@/components/Sponsors';
import DrErsnoSection3 from '@/components/DrErsnoSection3';
import Contact from '@/components/Contact';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import TicketModal from '@/components/TicketModal';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <Hero />
      <Countdown />
      <About />
      <DrErsnoSection1 />
      <Programs />
      <Experience />
      <DrErsnoSection2 />
      <Tickets />
      <Sponsors />
      <DrErsnoSection3 />
      <Contact />
      <Partners />
      <Footer />
      <TicketModal />
      <RevealOnScroll />
    </>
  );
}
