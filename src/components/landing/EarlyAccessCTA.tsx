import { useState } from "react";

const EarlyAccessCTA = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      // MailerLite API configuration
      const MAILERLITE_API_KEY = import.meta.env.VITE_MAILERLITE_API_KEY || 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiODdiNzIyYjc4NTk5ZGUwNjVkNGIyOTVkY2I4ZTJjYzgxODYzNzI1NWY4MjQ1OGJlMTQ5Y2Y5ZmM0NTFjYzU4YzlmNTU3NTJjZGNlYTk3YTYiLCJpYXQiOjE3NjkxMjA5OTguNjYwNTE0LCJuYmYiOjE3NjkxMjA5OTguNjYwNTE2LCJleHAiOjQ5MjQ3OTQ1OTguNjUyNjQ5LCJzdWIiOiIyMDc1OTkyIiwic2NvcGVzIjpbXX0.jpSBC7AqfF7kQghnvCV4wO3zCfpzIFCpB3JbBRbSxvVzv4n7A8FP7dAsH0W2rbcN7rIQn5_RifGnVAMdR6yRs_qezI5SX1YdkFZti0Z3TIBFp10U2ouf2T5B0mElIfrZsT-7FRKl1497s5LFSR_f-NBkYkruf2XTY5z2WhUQRf-Omtshf9MNWVYf1W_wD4pAJjWPXIg2WWcO2c1CUnxwwtP4hYajfMUU9EmDefeTdfPhkXIqZQTL6AFzikP1epZskUIKqG79Xjop1lIcK0-0Nuwi-8pF4eszSfsTI6gj0IQI_Lanj-5an0ZirsxTwwGznttvia_2ZSC6QapRlEHZv4-sSee90PqGcE8byXp_wBzVA9blOc0mVAL__04axfKDWLzn_S1hc5E_FVwSqCU1bGV9Yts6rU5zxXZL56uOAeGdWyL7-jGjcUhMPGQGM-n8ChfAK7BDUe_MEkAdoVh6JpWBkfip8NE8H2IZyKv_JnDlXYVAjbdASpSg_pnwuAQHzYRU-HPWydYF3jjf5KrD-7vvmR_ilwIZBhh0nPfzIttBSvQZ6ioJI5w9wVE8r6_ZgqAAtaAimV1Ev_LAX1YCIaF5FJAVU0hbi3WtFOPRn_yEx5S-2ipb6DBkpEq0sK7mQxYU0v5B_yK9Jm8TGh8eIR6mYXzQv1Jf3bk_EAiRC8E';
      const MAILERLITE_GROUP_ID = import.meta.env.VITE_MAILERLITE_GROUP_ID || 
        '177335561597486964';
      
      // Call MailerLite API to add subscriber
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          email: email.trim(),
          ...(name.trim() && { 
            fields: {
              name: name.trim()
            }
          }),
          groups: [MAILERLITE_GROUP_ID],
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        
        // Handle specific error cases
        if (response.status === 422 && errorData?.message?.includes('already exists')) {
          setError('This email is already on our waitlist. Thank you!');
          return;
        }
        
        throw new Error(errorData?.message || 'Failed to join waitlist. Please try again.');
      }
      
      setSubmitted(true);
    } catch (err) {
      console.error('Waitlist submission error:', err);
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