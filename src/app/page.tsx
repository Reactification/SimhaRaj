import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials'; // Add this import
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials /> {/* Add this component */}
      <Contact />
    </>
  );
}
