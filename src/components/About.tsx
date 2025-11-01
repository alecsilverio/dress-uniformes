const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
          Sobre Nós
        </h2>
        
        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
          <p>
            A <span className="text-primary font-semibold">Dress Uniformes e EPIs</span> é uma empresa especializada na confecção de uniformes profissionais e comercialização de equipamentos de proteção individual.
          </p>
          
          <p>
            Com anos de experiência no mercado, nos dedicamos a fornecer produtos de alta qualidade que garantem a segurança, conforto e a identidade visual das empresas que confiam em nosso trabalho.
          </p>
          
          <p>
            Nossa missão é vestir profissionais com excelência, oferecendo uniformes sob medida e EPIs certificados que atendem às normas de segurança do trabalho, sempre com o melhor custo-benefício.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">+500</div>
              <div className="text-muted-foreground">Clientes Atendidos</div>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">+1000</div>
              <div className="text-muted-foreground">Uniformes Produzidos</div>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
