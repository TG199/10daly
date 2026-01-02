const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-warmth">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          We know the feeling
        </h2>
        
        <div className="space-y-6 text-lg text-calm-text leading-relaxed">
          <p>
            You're 500 miles away. Mom lives alone. Every time your phone buzzes, 
            your heart skips a beat.
          </p>
          
          <p>
            You've tried the apps—the ones with endless alerts, motion sensors 
            that ping at 2 AM, dashboards full of data you don't know how to read.
          </p>
          
          <p>
            You check your phone constantly. You call more than you should, 
            just to hear her voice and know she's okay.
          </p>
          
          <p className="text-foreground font-medium pt-4">
            It's exhausting. The worry never stops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
