import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Vignette */}
      <div 
        className="absolute inset-0 hero-vignette"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Dress Uniformes e EPIs
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Proteção e profissionalismo em cada detalhe
        </p>
        <Button 
          variant="hero" 
          size="lg"
          className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
          onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Conheça Nossos Produtos
        </Button>
      </div>
    </section>
  );
};

export default Hero;
