const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          {/* Privacy promise */}
          <div className="space-y-2">
            <p className="text-primary-foreground/90 font-serif text-lg">
              Your family's data stays private. Always.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              We never sell data. We never share data. Privacy is not negotiable.
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-16 h-px bg-primary-foreground/20 mx-auto" />
          
          {/* Links */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          
          {/* Brand */}
          <div className="pt-4">
            <p className="text-primary-foreground/40 text-sm">
              © 2026 Tenderly. Made with care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
