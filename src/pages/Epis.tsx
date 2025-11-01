import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, X, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const products = [
  {
    id: 1,
    name: "Capacete de Segurança",
    description: "Capacete classe A/B com carneira ajustável",
    price: "R$ 45,00",
    category: "Proteção da Cabeça",
    inStock: true,
  },
  {
    id: 2,
    name: "Óculos de Proteção",
    description: "Óculos anti-embaçante com proteção UV",
    price: "R$ 25,00",
    category: "Proteção Visual",
    inStock: true,
  },
  {
    id: 3,
    name: "Luvas de Segurança",
    description: "Luvas de vaqueta com reforço",
    price: "R$ 18,00",
    category: "Proteção das Mãos",
    inStock: true,
  },
  {
    id: 4,
    name: "Botina de Segurança",
    description: "Botina com biqueira de aço",
    price: "R$ 120,00",
    category: "Proteção dos Pés",
    inStock: true,
  },
  {
    id: 5,
    name: "Máscara PFF2",
    description: "Máscara respiratória com válvula",
    price: "R$ 8,50",
    category: "Proteção Respiratória",
    inStock: true,
  },
  {
    id: 6,
    name: "Protetor Auricular",
    description: "Abafador de ruído tipo concha",
    price: "R$ 35,00",
    category: "Proteção Auditiva",
    inStock: true,
  },
  {
    id: 7,
    name: "Cinto de Segurança",
    description: "Cinto paraquedista com regulagem",
    price: "R$ 180,00",
    category: "Proteção Contra Quedas",
    inStock: false,
  },
  {
    id: 8,
    name: "Avental de Raspa",
    description: "Avental em couro para solda",
    price: "R$ 65,00",
    category: "Proteção do Corpo",
    inStock: true,
  },
];

const Epis = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productId: number, productName: string) => {
    setCart([...cart, productId]);
    toast.success(`${productName} adicionado ao orçamento!`);
  };

  const handleRemoveFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    toast.info("Produto removido do orçamento");
  };

  const cartProducts = cart.map(id => products.find(p => p.id === id)!);
  
  const totalValue = cartProducts.reduce((sum, product) => {
    const price = parseFloat(product.price.replace("R$ ", "").replace(",", "."));
    return sum + price;
  }, 0);

  const formatPrice = (value: number) => {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            EPIs - Equipamentos de Proteção
          </h1>
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <Button variant="hero" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Orçamento de Produtos
                </SheetTitle>
                <SheetDescription>
                  Produtos selecionados para retirada na loja
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                    <p className="text-muted-foreground">
                      Nenhum produto selecionado ainda
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {cartProducts.map((product, index) => (
                        <Card key={index} className="relative">
                          <CardContent className="p-4">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6"
                              onClick={() => handleRemoveFromCart(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            <div className="pr-8">
                              <h4 className="font-semibold mb-1">{product.name}</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {product.description}
                              </p>
                              <Badge variant="outline" className="text-xs mb-2">
                                {product.category}
                              </Badge>
                              <p className="text-lg font-bold text-primary">
                                {product.price}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-lg">
                        <span className="font-semibold">Valor Total:</span>
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(totalValue)}
                        </span>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                        <p className="text-sm font-semibold flex items-center gap-2">
                          <Package className="h-4 w-4 text-primary" />
                          Importante:
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                          <li>Este é apenas um orçamento</li>
                          <li>Não realizamos vendas online</li>
                          <li>Produtos disponíveis apenas para retirada na loja</li>
                          <li>Entre em contato para confirmar disponibilidade</li>
                        </ul>
                      </div>

                      <Link to="/#contato" onClick={() => setIsCartOpen(false)}>
                        <Button variant="hero" size="lg" className="w-full">
                          Fazer Encomenda
                        </Button>
                      </Link>

                      <p className="text-xs text-center text-muted-foreground">
                        Você será direcionado para nossos contatos para finalizar o pedido
                      </p>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Equipamentos de segurança certificados para proteger sua equipe. 
            Todos os produtos com certificado de aprovação (CA).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-secondary border-border/50 hover:border-primary/50 hover:shadow-[var(--accent-glow)]"
            >
              <CardHeader>
                <div className="w-full aspect-square rounded-lg bg-muted/30 flex items-center justify-center mb-4 overflow-hidden">
                  <div className="text-6xl opacity-20">🛡️</div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  {!product.inStock && (
                    <Badge variant="destructive" className="text-xs">
                      Indisponível
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                  <Button 
                    variant="hero"
                    className="w-full"
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product.id, product.name)}
                  >
                    {product.inStock ? 'Adicionar ao Orçamento' : 'Indisponível'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-secondary border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Solicite seu Orçamento</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco para solicitar um orçamento personalizado para sua empresa.
                Oferecemos condições especiais para compras em quantidade.
              </p>
              <Link to="/#contato">
                <Button variant="hero" size="lg">
                  Falar com Especialista
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Epis;
