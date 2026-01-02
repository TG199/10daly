const ValueShift = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* The old way */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-warmth-dark flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-serif text-muted-foreground">
              The usual approach
            </h3>
            <p className="text-calm-text leading-relaxed">
              Dozens of notifications. Motion alerts at all hours. 
              Complex dashboards. More data, more anxiety.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Alert!", "Motion detected", "Alert!", "Door opened", "Alert!"].map((alert, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-warmth-dark text-muted-foreground text-sm rounded-full"
                >
                  {alert}
                </span>
              ))}
            </div>
          </div>
          
          {/* The new way */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl font-serif text-primary">
              Our approach
            </h3>
            <p className="text-calm-text leading-relaxed">
              One thoughtful update, once a day. A simple summary that tells you 
              what matters: she had a good day.
            </p>
            <div className="pt-2">
              <span className="px-4 py-2 bg-sage-light text-primary text-sm rounded-full border border-primary/20">
                ✓ Mom had a good day
              </span>
            </div>
          </div>
        </div>
        
        {/* Central message */}
        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-serif text-foreground max-w-2xl mx-auto leading-relaxed">
            You don't need more data.
            <br />
            <span className="text-primary">You need peace of mind.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueShift;
