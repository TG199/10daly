const steps = [
  {
    number: "1",
    title: "Connect",
    description: "A simple setup with your parent or their caregiver. Takes about 10 minutes.",
    icon: "🔗",
  },
  {
    number: "2",
    title: "We observe gently",
    description: "Throughout the day, we notice the rhythms of daily life—meals, movement, moments of connection.",
    icon: "👀",
  },
  {
    number: "3",
    title: "You receive one update",
    description: "At the time you choose, you get a simple, human summary. No jargon. Just peace of mind.",
    icon: "💌",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-sky-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            How it works
          </h2>
          <p className="text-calm-text mt-4 text-lg">
            Simple enough that it just fades into the background.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-card mx-auto flex items-center justify-center shadow-sm">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-primary font-medium">Step {step.number}</div>
                <h3 className="text-xl font-serif text-foreground">{step.title}</h3>
                <p className="text-calm-text leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
