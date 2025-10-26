import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}