import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
          Fale Conosco
        </h2>
        
        <Card className="bg-gradient-to-br from-card to-secondary border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Entre em Contato</CardTitle>
            <CardDescription className="text-lg">
              Estamos prontos para atender você e sua empresa
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <a 
              href="tel:+5567992421314"
              className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Telefone / WhatsApp</div>
                <div className="text-lg font-semibold">(67) 9 9242-1314</div>
              </div>
            </a>
            
            <a 
              href="mailto:uniformedress@gmail.com.br"
              className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">E-mail</div>
                <div className="text-lg font-semibold break-all">uniformedress@gmail.com.br</div>
              </div>
            </a>
            
            <a 
              href="https://instagram.com/dress_uniformes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Instagram</div>
                <div className="text-lg font-semibold">@dress_uniformes</div>
              </div>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
