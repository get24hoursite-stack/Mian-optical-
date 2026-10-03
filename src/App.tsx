import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Collection } from "./components/Collection";
import { ProductCare } from "./components/ProductCare";
import { About } from "./components/About";
import { PhotoGallery } from "./components/PhotoGallery";
import { Faq } from "./components/Faq";
import { VisitUs } from "./components/VisitUs";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/WhatsAppIcon";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <Collection />
        <ProductCare />
        <About />
        <PhotoGallery />
        <Faq />
        <VisitUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

