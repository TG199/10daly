import { useState } from "react";

const EarlyAccessCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-sage-light">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Be among the first
        </h2>
        
        <p className="text-lg text-calm-text leading-relaxed max-w-lg mx-auto">
          We're building something that matters. Join our early access list 
          and we'll let you know when we're ready.
        </p>
        
        {/* Pricing teaser */}
        <div className="bg-card rounded-xl p-6 border border-border inline-block">
          <p className="text-calm-text">
            <span className="text-foreground font-medium">Pricing will be simple and fair.</span>
            <br />
            <span className="text-sm">No hidden fees. No long contracts. Cancel anytime.</span>
          </p>
        </div>
        
        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Join the List
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              We'll only email you about launch updates. No spam, ever.
            </p>
          </form>
        ) : (
          <div className="bg-sage-light rounded-xl p-6 max-w-md mx-auto">
            <p className="text-primary font-medium text-lg">Thank you 💚</p>
            <p className="text-calm-text mt-2">
              We'll be in touch when we're ready. Take care of yourself.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EarlyAccessCTA;
