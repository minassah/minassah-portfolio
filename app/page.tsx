import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ErpSection from '@/components/ErpSection';
import AppsSection from '@/components/AppsSection';
import Approach from '@/components/Approach';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ErpSection />
        <AppsSection />
        <Approach />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
