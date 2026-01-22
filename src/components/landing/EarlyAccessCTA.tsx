import { useState } from "react";

const EarlyAccessCTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to join waitlist. Please try again.');
      }
      
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-gradient-to-b from-background to-sage-light">
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
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isSubmitting}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join the List'}
                </button>
              </div>
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
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
