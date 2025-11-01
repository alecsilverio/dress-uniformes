import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCards = () => {
  return (
    <section id="produtos" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
          Nossos Produtos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Uniformes */}
          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-secondary border-border/50 hover:border-primary/50 hover:shadow-[var(--accent-glow)] cursor-pointer">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Uniformes Profissionais</CardTitle>
              <CardDescription className="text-muted-foreground">
                Confecção personalizada de uniformes para empresas de todos os segmentos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-foreground/80">
                <li>• Uniformes corporativos</li>
                <li>• Camisetas e polos personalizadas</li>
                <li>• Jalecos e aventais</li>
                <li>• Calças e bermudas profissionais</li>
              </ul>
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento
              </Button>
            </CardContent>
          </Card>

          {/* Card EPIs */}
          <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-secondary border-border/50 hover:border-primary/50 hover:shadow-[var(--accent-glow)] cursor-pointer">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">EPIs - Equipamentos de Proteção</CardTitle>
              <CardDescription className="text-muted-foreground">
                Equipamentos de segurança certificados para proteger sua equipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-foreground/80">
                <li>• Capacetes e óculos de proteção</li>
                <li>• Luvas de segurança</li>
                <li>• Botas e calçados de proteção</li>
                <li>• Máscaras e respiradores</li>
              </ul>
              <Link to="/epis">
                <Button 
                  variant="hero" 
                  className="w-full"
                >
                  Ver Produtos
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
