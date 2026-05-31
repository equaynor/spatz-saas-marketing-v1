import Header from './Header';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Pillars from './Pillars';
import About from './About';
import EventGallery from './EventGallery';
import Outcomes from './Outcomes';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';

export default function DesignB() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] dark:bg-[#050505] dark:text-[#f5f5f5] font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <div className="bg-[#fafafa] text-[#1a1a1a] dark:bg-[#050505] dark:text-[#f5f5f5] transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Pillars />
          <About />
          <EventGallery />
          <Outcomes />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
