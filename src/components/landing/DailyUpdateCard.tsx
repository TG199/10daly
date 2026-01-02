const DailyUpdateCard = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Your daily update
          </h2>
          <p className="text-calm-text mt-4 text-lg">
            Simple, warm, and exactly what you need to know.
          </p>
        </div>
        
        {/* The card */}
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-10 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-sm text-muted-foreground">Today's update for</p>
              <p className="text-xl font-serif text-foreground">Mom</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Tuesday, Jan 2</p>
              <p className="text-sm text-primary font-medium">6:00 PM</p>
            </div>
          </div>
          
          {/* Overall status */}
          <div className="flex items-center gap-3 py-2">
            <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
              <span className="text-xl">😊</span>
            </div>
            <div>
              <p className="text-lg font-medium text-foreground">A good day overall</p>
              <p className="text-sm text-muted-foreground">Active and engaged</p>
            </div>
          </div>
          
          {/* Activity indicators */}
          <div className="grid grid-cols-2 gap-4">
            {/* Meals */}
            <div className="bg-warmth rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍽️</span>
                <span className="text-sm font-medium text-foreground">Meals</span>
              </div>
              <p className="text-calm-text text-sm">
                Breakfast and lunch eaten. Light dinner.
              </p>
            </div>
            
            {/* Movement */}
            <div className="bg-sage-light rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">🚶</span>
                <span className="text-sm font-medium text-foreground">Movement</span>
              </div>
              <p className="text-calm-text text-sm">
                Morning walk in the garden. Active around the house.
              </p>
            </div>
            
            {/* Social */}
            <div className="bg-sky-light rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">💬</span>
                <span className="text-sm font-medium text-foreground">Social</span>
              </div>
              <p className="text-calm-text text-sm">
                Called Aunt Linda. Neighbor visited for tea.
              </p>
            </div>
            
            {/* Mood */}
            <div className="bg-warmth rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">💜</span>
                <span className="text-sm font-medium text-foreground">Mood</span>
              </div>
              <p className="text-calm-text text-sm">
                Cheerful this morning. Relaxed this evening.
              </p>
            </div>
          </div>
          
          {/* Footer note */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground text-center italic">
              "She mentioned she's looking forward to your call this weekend."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyUpdateCard;
