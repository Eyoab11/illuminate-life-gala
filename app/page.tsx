import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Experience from '@/components/Experience';
import Tickets from '@/components/Tickets';
import Sponsors from '@/components/Sponsors';
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
      <Programs />
      <Experience />
      <Tickets />
      <Sponsors />
      <Contact />
      <Partners />
      <Footer />
      <TicketModal />
      <RevealOnScroll />
    </>
  );
}
