const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-background to-sage-light">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Decorative element */}
        <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-60" />
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight text-balance">
          One update a day.
          <br />
          <span className="text-primary">She's okay.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-calm-text max-w-xl mx-auto leading-relaxed">
          Finally, peace of mind for families caring for aging parents from miles away.
        </p>
        
        {/* CTA */}
        <div className="pt-4">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity shadow-sm">
            Join the Early Access List
          </button>
          <p className="text-muted-foreground text-sm mt-3">
            No spam. Just updates when we launch.
          </p>
        </div>
      </div>
      
      {/* Soft decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sky-light rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-sage-light rounded-full blur-3xl opacity-40" />
    </section>
  );
};

export default Hero;
