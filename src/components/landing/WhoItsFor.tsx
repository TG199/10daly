const WhoItsFor = () => {
  return (
    <section className="py-24 px-6 bg-warmth">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Is this right for you?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Who it's for */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                <span className="text-primary text-lg">✓</span>
              </div>
              <h3 className="text-xl font-serif text-foreground">This is for you if...</h3>
            </div>
            
            <ul className="space-y-4 text-calm-text">
              <li className="flex gap-3">
                <span className="text-primary shrink-0">•</span>
                <span>Your parent lives independently but you worry about them daily</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">•</span>
                <span>You're tired of checking your phone constantly, looking for missed calls</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">•</span>
                <span>You want to feel connected without being intrusive</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary shrink-0">•</span>
                <span>A simple "she's okay" would let you sleep better at night</span>
              </li>
            </ul>
          </div>
          
          {/* Who it's not for */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-warmth-dark flex items-center justify-center shrink-0">
                <span className="text-muted-foreground text-lg">✗</span>
              </div>
              <h3 className="text-xl font-serif text-foreground">This isn't for you if...</h3>
            </div>
            
            <ul className="space-y-4 text-calm-text">
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">•</span>
                <span>You need real-time medical monitoring or emergency alerts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">•</span>
                <span>Your parent has advanced dementia or requires 24/7 care</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">•</span>
                <span>You want detailed health metrics and clinical dashboards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted-foreground shrink-0">•</span>
                <span>You need a fall detection or emergency response system</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-calm-text text-lg">
            We focus on one thing: giving you peace of mind through a simple daily connection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
