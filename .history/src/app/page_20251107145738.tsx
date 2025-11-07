import { Navbar } from '@/components/Navbar'; 
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { VideoDemo } from '@/components/VideoDemo';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <VideoDemo />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
