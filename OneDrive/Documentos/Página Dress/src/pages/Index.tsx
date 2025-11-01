import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCards />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
