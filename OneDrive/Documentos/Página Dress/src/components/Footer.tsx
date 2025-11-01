const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} - Todos os direitos reservados à empresa <span className="text-primary font-semibold">Dress Uniformes e EPIs</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
